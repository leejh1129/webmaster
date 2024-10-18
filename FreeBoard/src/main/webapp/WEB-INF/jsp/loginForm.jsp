<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../includes/header.jsp"></jsp:include> 
<h3>로그인화면(loginForm.jsp)</h3>
<form action="loginForm.do" method="post">
<table class="table">
	<tr>
		<th>아이디</th><td><input class="form-control" type="text" name="logId"></td>
	</tr>
	<tr>
		<th>비밀번호</th><td><input class="form-control" type="password" name="logPw"></td>
	</tr>
	<tr>
		<td colspan="2" colspan="4" align="center">
			<button type="submit" class="btn btn-primary">로그인</button>
		</td>
	</tr>
</table>
</form>

<jsp:include page="../includes/footer.jsp"></jsp:include> 