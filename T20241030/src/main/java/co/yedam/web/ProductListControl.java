package co.yedam.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Control;
import co.yedam.service.ProductService;
import co.yedam.service.ProductServiceImpl;
import co.yedam.vo.ProductVO;

public class ProductListControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		ProductService svc = new ProductServiceImpl();
		List<ProductVO> pvo = svc.selectAll();
		
		req.setAttribute("productvo", pvo);
		
		req.getRequestDispatcher("/WEB-INF/jsp/productList.jsp").forward(req, resp);
		
	}

}
