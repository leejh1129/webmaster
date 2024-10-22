/**
 *  basic.js
 */
console.log("basic.js")

let name = "홍길동";	//string
let age = 20;	// number
let obj = {name: "홍길동"
		  ,age: 20
		  ,showInfo: function(){
			  return this.name + " - " + this.age;
		  }}
		  
console.log(obj.name);
console.log(obj['age']);
console.log(obj.showInfo());

let data = [obj]
data.push({name : "박민수", age : 22})
data.push({name : "송민혁", age : 25})

// DOM
// date배열에 있는 정보를 출력
makeList();

function makeList(){
	
	document.querySelector('#show table:nth-of-type(2)').className = 'table';
	
	for(let i = 0; i < data.length; i++){		
		let tr = document.createElement('tr');
		let td = document.createElement('td');
		td.innerHTML = data[i]['name'];
		tr.appendChild(td);
		td = document.createElement('td');
		td.innerHTML = data[i]['age'];
		tr.appendChild(td);
		
		document.querySelector('#show table:nth-of-type(2) tbody').appendChild(tr);
	}
}


// <li></li>
let li = document.createElement("li");
li.innerText = 'Cherry';

let ul = document.querySelector('#show ul');	// css의 선택자
ul.appendChild(li);

//console.log(ul);	// <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>

document.querySelectorAll('#show ul li')	// [li, li, li]
.forEach(function(fruit){
	fruit.style.color = 'red';
	fruit.addEventListener('click', function(e){
		fruit.remove();
	});
	console.log(fruit.innerHTML);
});

// document.createElement = 태그생성 
// appendChild 태그안에 값이 들어간 태그 넣기
let tr = document.createElement('tr');

let td = document.createElement("th");
td.innerHTML = '이름';
tr.appendChild(td);

td = document.createElement("td");
td.innerHTML = name;
tr.appendChild(td);

document.querySelector('#show table tbody').appendChild(tr);



