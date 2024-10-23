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
	if(!reply || !logId){
		alert('필수값이 없습니다')
		return;
	}
	svc.addReply({ bno, reply, replyer: logId },
		result => {
			console.log(result);	// OK: 화면에 한줄추가 FAIL: 에러발생
			if (result.retCode == 'OK') {
				alert('정상 처리');
				let template = makeLi(result.retVal);
				document.querySelector(".reply ul li").after(template);
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

// 댓글목록
svc.rlist({bno, page}//bno
	//successFnc 
	, function(result) {
		console.log(result);
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



/*function makeList(result) {
	for (let i = 0; i < result.length; i++) {
		let tr = makeRow(result[i]);
		document.querySelector('#replyList tbody').appendChild(tr);
	}
}

function makeRow() {
	console.log(result);
	let obj = result[0];
	let tr = document.createElement('tr');
	tr.setAttribute('data-id', obj.memberId);
	for (let j = 0; j < fields.length; j++) {
		let td = document.createElement('td');
		td.innerText = obj[fields[j]];
		tr.appendChild(td);
	}
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.addEventListener('click', deleteRowFnc);
	btn.innerText = '삭제';
	td.appendChild(btn);
	tr.appendChild(td);

	return tr;
}*/// successFnc

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
			} else if (result.retCode == 'FAIL') {
				alert('처리중 예외');
			} else {
				alert('알수 없는 코드');
			}
		},	// 정상처리 실행함수
		function(err) { }	// 예외발생 실행함수
	)
} // end of deleteRow

/*fetch('removeReply.do?rno=' + rno)
.then(resolve => resolve.json())
.then(result => {
   if(result.retCode == 'OK'){
	  alert('성공')
	  e.target.parentElement.parentElement.remove(); //화면에서 삭제
	  
   }else if(result.retCode =='FAIL'){
	  alert('처리중 에러가 발생')
   }
})
.catch(err => console.log(err))*/

