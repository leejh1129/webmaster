package com.yedam.service;

import java.util.List;

import com.yedam.vo.ReplyVO;

public interface ReplyService {

	List<ReplyVO> replyList(int boardNo);	// 목록
	int removeReply(int replyNo);			// 댓글등록
	int addReply(ReplyVO reply);			// 댓글삭제
	ReplyVO selectReply(int replyNo);		// 단건조회
	
}
