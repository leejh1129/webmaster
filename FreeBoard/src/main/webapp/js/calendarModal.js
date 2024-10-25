/**
 *  calendarModal.js
 */
function modalShow(arg) {
	modalArg = arg	// 여러 함수에서 사용할 용도
	//body 태그
	let body = document.querySelector('body');

	body.className = 'modal-open';
	body.style.overflow = 'hidden';
	body.style.paddingRight = '16px';

	let div = document.createElement('div');
	div.className = 'modal-backdrop fade show';

	body.appendChild(div);

	// modal 태그
	let modal = document.querySelector('#exampleModal');
	modal.classList.add('show');
	modal.setAttribute('aria-modal', true);
	modal.setAttribute('role', 'dialog');
	modal.removeAttribute('aria-hidden','none');
	modal.style.display = 'block';

	start.value = modalArg.startStr;
	end.value = modalArg.endStr;

}

function modalClose(){
	// body의 속성 변경
	// div 속성 변경
	// back-drop 속성 변경
	
	let body = document.querySelector('body');
	document.querySelector('.modal-backdrop').remove();
	
	body.removeAttribute = ('class');
	body.removeAttribute = ('sytle');
	
	
	let modal = document.querySelector('#exampleModal');
	modal.classList.remove('show');
	modal.removeAttribute('aria-modal');
	modal.removeAttribute('role', 'dialog');
	modal.setAttribute('aria-hidden',true);
	modal.style.display = 'none';
	
}



function modalSave() {
   // title, startStr, endStr
   let title = document.querySelector("#title").value;
   //let title = modalArg.title;
   let startStr = document.querySelector("#start").value;
   let endStr = document.querySelector("#end").value;
   console.log(modalArg)
   fetch('addEvent.do?title=' + title + '&start=' + startStr + '&end=' + endStr)
      .then(resolve => resolve.json())
      .then(result => {
         if (result.retCode == 'OK') {
         console.log(modalArg.start);
            alert('성공');
            calendar.addEvent({
               title: title,
               start: modalArg.start,
               end:  modalArg.end,
               allDay:  modalArg.allDay
            })
            modalClose();
         } else if (result.retCode == 'FAIL') {
            alert('등록 에러')
         }
      })
      .catch(err => console.log(err));
}

function startChange(event) {
   console.log(event);
   modalArg.start = new Date(event.target.value); //2024-20-21 데이터 객체 생성
}




