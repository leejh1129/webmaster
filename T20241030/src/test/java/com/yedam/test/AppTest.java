package com.yedam.test;

import java.util.List;

import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.vo.ProductVO;

public class AppTest {

	public static void main(String[] args) {
		
		
		
		ProductVO pvo = new ProductVO();
		pvo.setPrdCode("P001");
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> list = (List<ProductVO>)svc.select(pvo);
		
		for(ProductVO vo : list) {
			System.out.println(vo);
		}
		
	}
	
}
