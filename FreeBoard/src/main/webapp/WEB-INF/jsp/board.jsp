<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.yedam.vo.BoardVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<
<style>
.reply span {
	display: inline-block;
}

.reply ul {
	list-style-type: none;
}
</style>
<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>상세페이지(board.jsp)</h3>
<%
BoardVO bvo = (BoardVO) request.getAttribute("boardvo");
String pg = (String) request.getAttribute("page");
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String wdate = sdf.format(bvo.getWriteDate());

String sc = (String) request.getAttribute("searchCondition");
String kw = (String) request.getAttribute("keyword");
%>

<table class="table">
	<tr>
		<th>글번호</th>
		<td><%=bvo.getBoardNo()%></td>
		<th>조회수</th>
		<td><%=bvo.getViewCnt()%></td>
	</tr>
	<tr>
		<th>제목</th>
		<td><%=bvo.getTitle()%></td>
		<th>작성자</th>
		<td><%=bvo.getWriter()%></td>
	</tr>
	<tr>
		<th>내용</th>
		<td colspan="3"><textarea class="form-control"
				id="exampleFormControlTextarea1" name="story" rows="5" cols="50"><%=bvo.getContent()%></textarea>
		</td>
	</tr>
	<tr>
		<c:if test="${boardvo.img != null }">
			<th>이미지</th>
			<td colspan="3"><img src="images/${boardvo.img }" width="100px"></td>
		</c:if>
	</tr>
	<tr>
		<th>작성일시</th>
		<td colspan="3"><%=wdate%></td>
	</tr>
	<tr>
		<td colspan="4" align="center"><input type="button" value="수정"
			class="btn btn-warning"> <input type="button" value="삭제"
			class="btn btn-danger"></td>
	</tr>

</table>

<!-- 댓글관련 -->
<div class="container reply">
	<!-- 댓글등록 -->
	<div class="header">
		댓글내용: <input class="col-sm-8" id="reply">
		<button class="col-sm-3" id="addReply">댓글등록</button>
	</div>
	<!-- 댓글목록 -->
	<div class="content">
		<ul>
			<li><span class="col-sm-2">글번호</span> <span class="col-sm-5">내용</span>
				<span class="col-sm-2">작성자</span> <span class="col-sm-2">삭제</span></li>
			<!--<li>
	 			<span class="col-sm-2">3</span>
	 			<span class="col-sm-5">댓글입니다</span>
	 			<span class="col-sm-2">user01</span>
	 			<span class="col-sm-2"><button>삭제</button></span>
	 		</li> -->
		</ul>
	</div>
	<!-- 댓글페이징 -->
	<nav aria-label="Page navigation example">
		<ul class="pagination">
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Previous"> 
				<span aria-hidden="true">&laquo;</span>
			</a>
			</li>
			
			<li class="page-item"><a class="page-link" href="#">1</a></li>
			<li class="page-item"><a class="page-link" href="#">2</a></li>
			<li class="page-item"><a class="page-link" href="#">3</a></li>
			
			<li class="page-item">
				<a class="page-link" href="#" aria-label="Next">
			 		<span aria-hidden="true">&raquo;</span>
			</a>
			</li>
		</ul>
	</nav>
</div>
<jsp:include page="../includes/footer.jsp"></jsp:include>


<script>
	const bno = "${boardvo.boardNo }"; console.log(bno);
	const logId = "${logId }"; console.log(logId);
	const reply = "${reply }"; console.log(reply);
	const replyer = "${replyer }"; console.log(reply);
	document.querySelector('input[value="수정"]')//
	.addEventListener('click',function(e){
		location.href = 'modifyBoard.do?searchCondition=<%=sc%>&keyword=<%=kw%>&page=<%=pg%>&bno=<%=bvo.getBoardNo()%>';
	});
	 <%-- document.querySelector('input[value="삭제"]')//
	.addEventListener('click',function(e){
		location.href = 'removeBoard.do?bno=<%=bvo.getBoardNo()%>
	';
	}); --%>
</script>

<!-- <script src="js/replyService.js"></script>
<script src="js/reply.js"></script>  -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="js/jreply.js"></script>
