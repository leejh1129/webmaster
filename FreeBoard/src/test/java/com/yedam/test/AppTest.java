package com.yedam.test;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.EventVO;

public class AppTest {

	public static void main(String[] args) {
		
		BoardService svc = new BoardServiceImpl();
		EventVO evo = new EventVO();
		evo.setTitle("캠핑");
		evo.setStartDate("2024-10-17");
		evo.setEndDate("2024-10-19");
		
		if(svc.modifyEvent(evo)) {
			System.out.println("성공");
		}else {
			System.out.println("실패");
		}
		
		
//		Gson gson = new GsonBuilder().setPrettyPrinting().create();
//		String json = gson.toJson(result);
		
		
	}
	
}
