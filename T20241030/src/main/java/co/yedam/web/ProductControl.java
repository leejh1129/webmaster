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

public class ProductControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		ProductService svc = new ProductServiceImpl();
	    String code = req.getParameter("code");
	    
	    List<ProductVO> list = svc.selectStar();

	    ProductVO pvo = svc.select(code);
	    req.setAttribute("productvo", pvo);
	    req.setAttribute("productlist", list);

	    req.getRequestDispatcher("productInfo.tiles").forward(req, resp);

	}

}
