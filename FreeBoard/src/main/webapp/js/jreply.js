/**
 *  jreply.js
 */

$('#addReply').on('click', function(e) {
	let reply = $('#reply').val();
	if (!reply || !logId) {
		alery('값을 입력')
		return;
	}
	$.ajax({
		url: 'addReply.do',
		data: { bno: bno, reply: reply, replyer: logId },
		method: 'post',
		dataType: 'json'
	})
		.done(function(result) {
			if (result.retCode == 'OK') {
				let item = result.retVal;
				$('<li />').append(
					$('<span />').addClass('col-sm-2').text(item.replyNo),	// 글번호
					$('<span />').addClass('col-sm-5').text(item.reply),	// 댓글내용
					$('<span />').addClass('col-sm-2').text(item.replyer),	// 작성자
					$('<span />').addClass('col-sm-2').append('<button>삭제</button>')	// 삭제버튼 
				)
				.appendTo($('div.content ul'));
			}
		})
})


$.ajax('replyList.do?bno=' + bno + '&page=1')
	.done(function(result) {
		console.log(result); // [{}....{}]
		result.forEach((item) => {
			$('<li />').append(
				$('<span />').addClass('col-sm-2').text(item.replyNo),	// 글번호
				$('<span />').addClass('col-sm-5').text(item.reply),	// 댓글내용
				$('<span />').addClass('col-sm-2').text(item.replyer),	// 작성자
				$('<span />').addClass('col-sm-2').append('<button>삭제</button>')	// 삭제버튼 
			)
				.appendTo($('div.content ul'));
		});
	})
	.fail(function(err) {
		console.log(err);
	})
// 삭제 이벤트
$('div.content ul').on('click', 'button', function(e) {
	console.log($(e.target).parent().parent().find('span:eq(0)').text());
	let rno = ($(e.target).parent().parent().find('span:eq(0)').text());
	$.ajax({
		url: 'removeReply.do',
		data: { rno: rno },
		method: 'get',
		dataType: 'json'	// 문자열 => 자바스크립트
	})
		.done(function(result) {
			if (result.retCode == 'OK') {
				$(e.target).closest('li').remove();
			}
		})
		.fail(function(err) {
			console.log(err);
		});	// 삭제
})