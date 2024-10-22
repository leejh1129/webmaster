/**
 *  reply.js
 *  replyService 생성했던 메소드
 */

svc.rlist(141 // bno
	, function(result) {
		let obj = result[0];
		for(let i = 0; i < result.length; i++){		
			let tr = document.createElement('tr');	
			for(let prop in obj){
				let td = document.createElement('td');
				td.innerText = result[i][prop];				
				tr.appendChild(td);
			}
			let td = document.createElement('td'); // 새로운 td 생성
			let btn = document.createElement('button');
			btn.innerText = '삭제';
			td.appendChild(btn);
			tr.appendChild(td);
			document.querySelector('#replyList tbody').appendChild(tr);
		}
		console.log(obj);
	}// successFnc
	, function(err) {
		console.log('요기', err);
	}	// errorFnc
)

