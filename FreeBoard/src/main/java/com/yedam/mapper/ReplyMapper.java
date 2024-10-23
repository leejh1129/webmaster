package com.yedam.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yedam.vo.ReplyVO;

public interface ReplyMapper {

	List<ReplyVO> selectList(int boardNo);
	List<ReplyVO> selectListPaging(@Param("bno")int boardNo, @Param("page") int page);
	boolean deleteReply(int replyNo);
	boolean insertReply(ReplyVO reply);
	ReplyVO selectReply(int replyNo);
	
}
