package com.yedam.common;

import java.util.List;

import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

import lombok.Data;

@Data
public class PageDTO {

	private int startPage, endPage;
	private boolean prev, next;
	private int page;	// 현재페이지
	
	public PageDTO(int page) {
		BoardService svc = new BoardServiceImpl();
        int totalCnt = 64;
        this.endPage = (int)Math.ceil(page / 10.0) *10; 
        this.startPage = this.endPage - 9; 
        this.page = page;

        int realEnd = (int) Math.ceil(totalCnt/5.0); 
        this.endPage = 
                this.endPage > realEnd ? realEnd : this.endPage; 

        this.prev = this.startPage > 1;
        this.next = this.endPage < realEnd;
	}

}
