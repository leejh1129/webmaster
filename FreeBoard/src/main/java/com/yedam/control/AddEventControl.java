package com.yedam.control;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.EventVO;

public class AddEventControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		String title = req.getParameter("title");
		String startData = req.getParameter("start");
		String endData = req.getParameter("end");
		
		EventVO evo = new EventVO();
		evo.setTitle(title);
		evo.setStartDate(startData);
		evo.setEndDate(endData);
		
		BoardService svc = new BoardServiceImpl();
		
		try {
			svc.registerEvent(evo);
			resp.getWriter().print("{\"retCode\": \"OK\"}");
			
		} catch (Exception e) {
			e.printStackTrace();
			resp.getWriter().print("{\"retCode\": \"FAIL\"}");
		}
		

	}
}
