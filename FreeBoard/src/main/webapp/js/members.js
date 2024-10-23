/*
 * member.js
*/
// JSP => req.getDispatch...("board/boardList.tiles").forward(req,resp);
// json => json데이터 홀용 페이지 그리기
// json형태의 회원목록을 출력하는 데이터
// 등록버튼에 이벤트 추가
document.querySelector('#addBtn').addEventListener('click', function(e) {
	let id = document.querySelector('#mid').value;
	let name = document.querySelector('#mname').value;
	let phone = document.querySelector('#mphone').value;

	fetch('addMemberJson.do?id=' + id + '&name=' + name + '&phone=' + phone)
		.then(resolve => { return resolve.json() })
		.then(result => {
			console.log(result);	// {retCode: 'OK'}
			if (result.retCode = 'OK') {
				let tr = makeBow({memberId: id, memberName: name, phone: phone});
				document.querySelector('#show tbody').appendChild(tr);
			} else if (result.retCode == 'FAIL') {
				alert('처리중 에러가 발생');
			}

		})
		.catch(err => { console.log(err) })
})

// 1.목록출력
fetch('memberJson.do')
	.then(function(resolve) {
		return resolve.json();
	})
	.then(function(result) {
		console.log(result);
		makeList(result);
	})
	.catch(function(err) {
		console.log(err);
	})

function makeList(obj = []) {
	// 작성
	for (let i = 0; i < obj.length; i++) {
		let tr = makeBow(obj[i]);
		document.querySelector('#show tbody').appendChild(tr);
	}
}

function makeBow(obj = {}) {
	let fields = ['memberId', 'memberName', 'phone'];
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
}

function deleteRowFnc(e) {
	 //console.log(e.target.parentElement.parentElement.firstElementChild.innerText);
	 console.log(e.target.parentElement.parentElement.dataset.id);
	 let id = e.target.parentElement.parentElement.dataset.id;
	 fetch('removeMemberJson.do?id=' + id)
	 .then(resolve => resolve.json())
	 .then(result => {
		 if(result.retCode == 'OK'){
			 alert('성공');
			 e.target.parentElement.parentElement.remove(); 
		 }else if(result.retCode == 'FAIL'){
			 alert('처리중 에러가 발생');
		 }
	 })
	 .catch(err => console.log(err))
}

function deleteRow(e){
	let rno = e.target.parentElement.parentElement.firstElementChild.innerText;
	console.log(rno);
}