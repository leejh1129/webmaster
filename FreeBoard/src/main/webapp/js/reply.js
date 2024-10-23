/**
 *  reply.js
 *  replyService 생성했던 메소드
 */

let page = 1; // 댓글페이지 변수,


/*<table id="replyList" class="table">
	<thead>
		<tr>
			<th>댓글번호</th><th>내용</th><th>작성자</th><th>글번호</th><th>작성일</th><th>삭제</th>
		</tr>
	</thead>
	<tbody></tbody>
</table>*/


//댓글등록 버튼
document.querySelector('#addReply').addEventListener('click', addReplyHandlerFnc);

function addReplyHandlerFnc() {
	let reply = document.querySelector('#reply').value;
	if (!reply || !logId) {
		alert('필수값이 없습니다')
		return;
	}
	svc.addReply({ bno, reply, replyer: logId },
		result => {
			console.log(result);	// OK: 화면에 한줄추가 FAIL: 에러발생
			if (result.retCode == 'OK') {
				alert('정상 처리');
				/*let template = makeLi(result.retVal);
				document.querySelector(".reply ul li").after(template);*/
				page = 1;
				showList();
				svc.getReplyCount(bno, createPageList, err => console.log(err));
				
			} else if (result.retCode == 'FAIL') {
				alert('등록중 오류 발생');
			} else {
				alert('알수 없는 코드');
			}
		},
		err => {
			console.log(err);
		}
	)
} // end of addReplyHandlerFnc

// pagination a 클릭이벤트
function linkMove() {
	document.querySelectorAll('nav ul.pagination a').forEach(function(aTag) {
		aTag.addEventListener('click', function(e) {
			e.preventDefault();	// 이동차단
			console.log(aTag.innerHTML);
			page = aTag.dataset.page;	// <a data-page="2">2</a>
			showList();	// 목록보여주고
			//createPageList();	// 페이징목록보여주고
			svc.getReplyCount(bno, createPageList, err => console.log(err));
		})
	})
}

// 페이지목록을 출력하는 함수
svc.getReplyCount(bno, createPageList, err => console.log(err));
//createPageList();
function createPageList(result) { // page = 2
	console.log(result.totalCount);
	
	let totalCnt = result.totalCount;
	let startPage, endPage, realEnd;
	let prev, next;

	endPage = Math.ceil(page / 5) * 5; // 5page.
	startPage = endPage - 4; // 1page.
	realEnd = Math.ceil(totalCnt / 5); // 7page.
	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;  // false
	next = endPage < realEnd; // true

	// 페이지리스트 출력.
	let list = '';
	list += '<li class="page-item">';
	if (prev) // 이전페이지 출력.
		list += '  <a class="page-link" href="#" aria-label="Previous" data-page="' + (startPage - 1) + '">&laquo;</a>';
	else
		list += '  <span class="page-link disabled" aria-hidden="true">&laquo;</span>';
	list += '    </li>';

	// <li class="page-item"><a class="page-link" href="#">1</a></li>
	for (let p = startPage; p <= endPage; p++) {
		list += '<li class="page-item"><a class="page-link" href="#" data-page="' + p + '">' + p + '</a></li>';
	}

	list += '<li class="page-item">';
	if (next) // 이후페이지 출력.
		list += '  <a class="page-link" href="#" aria-label="Next" data-page="' + (endPage + 1) + '">&raquo;</a>';
	else
		list += '  <span class="page-link disabled" aria-hidden="true">&raquo;</span>';
	list += '    </a></li>';

	document.querySelector('nav ul.pagination').innerHTML = list;

	linkMove();
}


// 댓글목록
showList();
function showList() {
	// 출력목록을 화면에서 지우고
	document.querySelectorAll('div.reply div.content li').forEach((li, idx) => {
		if (idx > 0)
			li.remove();
	})
	// 목록출력
	svc.rlist({ bno, page }//bno
		//successFnc 
		, function(result) {
			for (let i = 0; i < result.length; i++) {
				let template = makeLi(result[i]);
				document.querySelector(".reply ul").appendChild(template);
			}
		}
		//errorFnc
		, function(err) {
			console.log('요기', err);
		}
	); // end of svc.replylist
	// errorFnc
} // end of showList


// 댓글정보 한건있으면 <li>....</li> 함수 생성
function makeLi(rvo = { replyNo, reply, replyer }) {
	let template = document.querySelector(".reply ul li").cloneNode(true);
	console.log(template);
	template.querySelector('span').innerText = rvo.replyNo;
	template.querySelector('span:nth-of-type(2)').innerText = rvo.reply;
	template.querySelector('span:nth-of-type(3)').innerText = rvo.replyer;
	template.querySelector('span:nth-of-type(4)').innerHTML = '<button onclick="deleteRow(event)">삭제</button>';

	return template;
} // end of makeLi

//댓글 삭제하는 함수
function deleteRow(e) {
	let rno = e.target.parentElement.parentElement.firstElementChild.innerText;
	console.log(rno);
	// 삭제기능 호출
	svc.removeReply(rno, // 삭제할 댓글번호
		result => {
			if (result.retCode == 'OK') {
				alert('정상 처리');
				e.target.parentElement.parentElement.remove();
				showList();
				svc.getReplyCount(bno, createPageList, err => console.log(err));
			} else if (result.retCode == 'FAIL') {
				alert('처리중 예외');
			} else {
				alert('알수 없는 코드');
			}
		},	// 정상처리 실행함수
		function(err) { }	// 예외발생 실행함수
	)
} // end of deleteRow



