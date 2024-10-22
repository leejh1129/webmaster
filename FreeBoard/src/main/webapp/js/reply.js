/**
 *  reply.js
 *  replyService 생성했던 메소드
 */
svc.rlist(126 // bno
	, function(result) {
		console.log(result);
		let obj = result[0];
		for(let i = 0; i < result.length; i++){			
			for(let prop in obj){
				console.log(result[i][prop]);
			}
		}
		console.log(obj);
	}// successFnc
	, function(err) {
		console.log('요기', err);
	}	// errorFnc
)