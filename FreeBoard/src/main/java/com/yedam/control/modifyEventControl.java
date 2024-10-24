package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.EventVO;

public class modifyEventControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		BoardService svc = new BoardServiceImpl();
		EventVO evo = new EventVO();
		
		String title = req.getParameter("title");
		String start = req.getParameter("start");
		String end = req.getParameter("end");
		
		System.out.println("title" + title);
		System.out.println("start" + start);
		System.out.println("end" + end);
		
		evo.setTitle(title);
		evo.setStartDate(start);
		evo.setEndDate(end);
		
		// {"retCode":"OK"}
		try {
			if(svc.modifyEvent(evo)) {
				System.out.println("{\"retCode\":\"OK\"}");
			}			
		}catch(Exception e){
			e.printStackTrace();
			System.out.println("{\"retCode\":\"FAIL\"}");
		}
		
	}

}
