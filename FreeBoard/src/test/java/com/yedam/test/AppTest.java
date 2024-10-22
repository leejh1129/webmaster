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
//		rvo.setBoardNo(126);
//		rvo.setReply("댓글테스트");
//		rvo.setReplyer("1234");
//		rvo.setReplyNo(7);
		
		
		
		svc.addReply(rvo);
		svc.removeReply(rvo.getReplyNo());
		
		svc.replyList(126).forEach(reply -> System.out.println(reply));
		
	}
	
}
