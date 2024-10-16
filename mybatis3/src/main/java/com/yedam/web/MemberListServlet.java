package com.yedam.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.dao.MemberMapper;
import com.yedam.vo.Member;

// 객체생성 -> init()
// 객체생성 -> init() -> service() -> destroy() : 서블릿의 생명주기
@WebServlet("/MemberListServlet")
public class MemberListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberListServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse resp)
			throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		request.setCharacterEncoding("utf-8");
		resp.setContentType("text/html;charset=utf-8");
		
		PrintWriter out = resp.getWriter();
		
		SqlSession sqlSession = DataSource.getInstance().openSession(true);
		MemberMapper dao = sqlSession.getMapper(MemberMapper.class);
		
		List<Member> result = dao.members();
		String str = "";
		str += "<h3>회원정보</h3>";
		str += "<table border='1'";
		str += "<thead><tr><th>회원아이디</th><th>회원명</th><th>연락처</th></tr></thead>";
		str += "<tbody>";
		
		for(Member member : result) {
		      str += "<tr>"
		      		+ "<td><a href='member.action?mid=" + member.getMemberId() + "'>" 
		      		+ member.getMemberId() + "</a></td>"  // 회원아이디를 앵커 텍스트로 표시
		    		+ "<td>" + member.getMemberName() + "</td>"
		    		+ "<td>" + member.getPhone() + "</td>"
		    		+ "</tr>";
		}
		str += "</tbody>";
		str += "</table>";
		resp.getWriter().print(str);
		str += "<a href='MemberListServlet'>목록으로</a>";
		out.print("<a href='./'>첫페이지</a><br>");
		out.print("<a href='/html/MemberAddServlet'>서블릿페이지로 이동</a><br>");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
