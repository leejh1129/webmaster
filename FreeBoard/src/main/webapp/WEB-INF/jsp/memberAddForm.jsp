<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<jsp:include page="../includes/header.jsp"></jsp:include>  
<h3>회원가입(memberAddForm.jsp)</h3>
	<form action="memberAdd.do">
		<table class="table">
			<tr>
				<th>회원ID</th><td><input class="form-control" type="text" name="mid"></td>
			</tr>
			<tr>
				<th>회원이름</th><td><input class="form-control" type="text" name="mname"></td>
			</tr>
			<tr>
				<th>비밀번호</th><td><input class="form-control" type="password" name="passwd"></td>
			</tr>
			<tr>
				<th>연락처</th><td><input class="form-control" type="text" name="phone"></td>
			</tr>
			<tr>
				<td colspan='2' align="center"><input type="submit" value="저장" class="btn btn-primary"></td>
			</tr>
		</table>
	</form>
	
<jsp:include page="../includes/footer.jsp"></jsp:include> 