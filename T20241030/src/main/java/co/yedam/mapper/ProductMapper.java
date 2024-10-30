package co.yedam.mapper;

import java.util.List;

import co.yedam.vo.ProductVO;

public interface ProductMapper {
	String selectMessage();
	String selectHint(String remainTimeString);
	
	List<ProductVO> selectAll();
	ProductVO select(String code);
	List<ProductVO> selectStar();

}