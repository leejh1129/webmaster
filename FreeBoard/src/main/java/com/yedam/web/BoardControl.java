package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.common.SearchDTO;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		// board.do -> 상세조회(bno) -> 조회 -> board.jsp출력
		String bno = req.getParameter("bno");
		String page = req.getParameter("page");
		//검색조건 (1파라미터받기)
		String sc = req.getParameter("searchCondition");
		String kw = req.getParameter("keyword");
		
		SearchDTO search = new SearchDTO();
		search.setKeyword(kw);
		search.setSearchCondition(sc);
		search.setPage(Integer.parseInt(page));
		BoardService svc = new BoardServiceImpl();
		BoardVO board = svc.searchBoard(Integer.parseInt(bno));
		
		req.setAttribute("boardvo", board);
		req.setAttribute("page", page);
		// 검색조건(2. 전달하기)
		req.setAttribute("searchCondition", sc);
		req.setAttribute("keyword", kw);
		
		
		req.getRequestDispatcher("WEB-INF/jsp/board.jsp").forward(req, resp);;
		
	}

}
