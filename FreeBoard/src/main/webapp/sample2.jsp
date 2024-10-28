<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
	<meta charset="UTF-8">
	<title>jQuery Element Selection</title>
	<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
	<script>
		/*$(function() {	이벤트 : "DOMContentLoaded"
			$("p").on("click", function() {
				$(".jq").css("backgroundColor", "lightgray");	// 클래스가 "jq"인 요소를 모두 선택함.
			});
		});*/
		// javascript 기준으로 이벤트 생성 .style.backgroundColor ='lightgray';
		/*document.addEventListener('DOMContentLoaded', function(e){
			// 모든 p요소를 선택
			document.querySelectorAll('p').forEach(item => {
				// 클릭이벤트 등록
				item.addEventListener('click', function(e) {
					// 클래스 jq의 배경색을 변경
					document.querySelectorAll('.jq').forEach(jq => {
						jq.style.backgroundColor = 'lightgray';
					});
				});				
			});
		})*/
		$(function() {
			$("button").on("click", function() {
				// id가 "list"인 요소의 자손 요소 중에서 <li>요소를 모두 선택한 후에,
				// 그 중에서 두 번째 요소의 값을 설정함.
				$("#list").find("li").eq(1).html("두 번째 아이템을 선택했어요!!");
			});
		});
		$(function() {
			document.querySelector('button').addEventListener('click', function(e) {
				let list = document.querySelector('#list');
				list.querySelectorAll('li').forEach((item, idx) => {
					if(idx == 1){
						item.innerHTML = "두 번째 아이템을 선택했어요!!";
					}
				})
			})
		})
		
	</script>
</head>

<body>

	<h1>클래스 선택자</h1>

	<p class="jq">이제부터 제이쿼리를 다 같이 공부해보죠!!</p>
	<p class="jq">클래스 선택자로 특정 요소들을 한 번에 선택할 수 있어요!!</p>
	<p>마우스로 글씨를 클릭해보세요!!</p>
	
	
	<h1>메소드 체이닝</h1>
	<ul id="list">
		<li>첫 번째 아이템이에요!</li>
		<li>두 번째 아이템이에요!</li>
		<li>세 번째 아이템이에요!</li>
	</ul>
	<button>텍스트 변경</button>
	
</body>

</html>