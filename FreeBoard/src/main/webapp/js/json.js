/*
*
*
*/

let obj = { name: "홍길동", age: 20 }
let json = JSON.stringify(obj);	// object -> String
obj = JSON.parse(json);	// String -> object

// JSP => 페이지 출력
// JSON 데이터 => 페이지 작성

fetch('js/MOCK_DATA .json')
	.then(function(resolve) {
		console.log(resolve);
		return resolve.json();	// object 변환 반환
	})
	.then(function(result) {
		console.log(result);
		makeList(result);
	})
	
// obj = JSON.parse(data);
// console.log(obj);

// obj배열에 있는 건수만큼 tr 생성하고 tbody 하위요소
function makeList(obj = []) {
	let fields = ['id', 'first_name', 'last_name', 'email', 'salary'];
	for (let i = 0; i < obj.length; i++) {
		let tr = document.createElement('tr');
		tr.addEventListener('mouseover', function(e) { tr.style.backgroundColor = 'gray' });
		tr.addEventListener('mouseout', function(e) { tr.style.backgroundColor = '' });
		for (let j = 0; j < fields.length; j++) {
			let td = document.createElement('td');
			td.innerText = obj[i][fields[j]];	// obj.name, obj['name']
			tr.appendChild(td);
		}
		let td = document.createElement('td');
		let btn = document.createElement('button');
		btn.addEventListener('click', function(e) { btn.parentElement.parentElement.remove() })
		btn.innerText = '삭제';
		td.appendChild(btn);
		tr.appendChild(td);
		//document.querySelector('#show tbody').appendChild(tr);
	}
}
//makeList();

//console.log(document.querySelector('#show button').closest('tr'))