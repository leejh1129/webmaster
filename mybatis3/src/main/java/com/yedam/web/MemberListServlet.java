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

@WebServlet("/MemberListServlet")
public class MemberListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public MemberListServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//		response.getWriter().append("Served at: ").append(request.getContextPath());
//		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		
		PrintWriter out = response.getWriter();
		
		SqlSession sqlSession = DataSource.getInstance().openSession(true);
		MemberMapper dao = sqlSession.getMapper(MemberMapper.class);
		
		List<Member> result = dao.members();
		for(Member member : result) {
			response.getWriter().print(member.toString());
		}
		
		out.print("<table style='border: 1px solid #ddd;'>");
		for(Member member2 : result) {
			out.print("<tr style='border: 1px solid #ddd;'>"
					+ "<th style='border: 1px solid #ddd;'>아이디</th>"
					+ "<th style='border: 1px solid #ddd;'>이름</th>"
					+ "<th style='border: 1px solid #ddd;'>비밀번호</th>"
					+ "<th style='border: 1px solid #ddd;'>휴대폰</th>"
					+ "<th style='border: 1px solid #ddd;'>권한</th>"
					+ "<th style='border: 1px solid #ddd;'>등록일</th></tr>");
			out.print("<tr style='border: 1px solid #ddd;'>"
					+"<td style='border: 1px solid #ddd;'>" + member2.getMemberId() + "</td>"
					+ "<td style='border: 1px solid #ddd;'>" + member2.getMemberName() + "</td>"
					+ "<td style='border: 1px solid #ddd;'>" + member2.getPassword() + "</td>"
					+"<td style='border: 1px solid #ddd;'>" + member2.getPhone() + "</td>" 
					+ "<td style='border: 1px solid #ddd;'>" + member2.getResponsibility() + "</td>" 
					+ "<td style='border: 1px solid #ddd;'>" + member2.getCreationDate() + "</td>"+ "</tr>");
		}
		out.print("</table>");
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
