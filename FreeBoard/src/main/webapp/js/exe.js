function textRemove(){
	
	let input = document.querySelector('#userValue').value;
	let elem = document.querySelectorAll('span');
	
	for(let i = 0; i < elem.length; i++){
		if(input == elem[i].innerHTML){
			elem[i].remove();
		}
	}
		
}