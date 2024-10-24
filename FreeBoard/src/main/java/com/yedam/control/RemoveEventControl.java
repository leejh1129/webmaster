package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.EventVO;

public class RemoveEventControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		BoardService svc = new BoardServiceImpl();
		EventVO evo = new EventVO();
		
		String title = req.getParameter("title");
		evo.setTitle(title);

		try {			
			// {"retCode": "OK"}
			if(svc.removeEvent(evo)) {
				System.out.println("성공");
				resp.getWriter().print("{\"retCode\": \"OK\"}");
			}
		}catch (Exception e){
			e.printStackTrace();
			resp.getWriter().print("{\"retCode\": \"FAIL\"}");
		}
		
	}

}
