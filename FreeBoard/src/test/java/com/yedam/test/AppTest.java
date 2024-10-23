package com.yedam.test;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.common.SearchDTO;
import com.yedam.mapper.BoardMapper;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.BoardVO;
import com.yedam.vo.ReplyVO;

public class AppTest {

	public static void main(String[] args) {
		
		ReplyService svc = new ReplyServiceImpl();
		ReplyVO rvo = new ReplyVO();
//		rvo.setBoardNo(141);
//		rvo.setReply("댓글테스트");
//		rvo.setReplyer("1234");
		rvo.setReplyNo(25);
		
		
		
//		svc.addReply(rvo);
//		if(svc.removeReply(rvo.getReplyNo()) == 1) {
//			System.out.println("성공");
//		}else {
//			System.out.println("실패");
//		}

//		svc.replyList(126).forEach(reply -> System.out.println(reply));
		
	}
	
}
