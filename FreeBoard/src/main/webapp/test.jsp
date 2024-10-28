<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<title>jQuery Element Selection</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script>
		$(function() {
			$("p").on("click", function() {			// <p>요소를 모두 선택함.
				$("span").css("fontSize", "28px");	// <span>요소를 모두 선택함.
			});
			/*document.addEventListener('DOMContentLoaded', function(e){
				document.querySelectorAll('p').forEach(item => {	// 모든 <p></p>
					item.addEventListener('click', function(e){
						// 화면상의 <span></span>
						document.querySelectorAll('span').forEach(span => {
							span.style.fontSize = '28px';
						})
					})
				})
			})*/
		});
	</script>
</head>

<body>

	<h1>HTML 태그 선택자</h1>

	<p>이제부터 <span>제이쿼리</span>를 다 같이 공부해보죠!!<br>
	마우스로 글씨를 클릭해보세요!!</p>
	<p>이제부터 <span>제이쿼리</span>를 다 같이 공부해보죠!!<br>
	마우스로 글씨를 클릭해보세요!!</p>
	<p>이제부터 <span>제이쿼리</span>를 다 같이 공부해보죠!!<br>
	마우스로 글씨를 클릭해보세요!!</p>
	<p>이제부터 <span>제이쿼리</span>를 다 같이 공부해보죠!!<br>
	마우스로 글씨를 클릭해보세요!!</p>
	
	
	
</body>

</html>