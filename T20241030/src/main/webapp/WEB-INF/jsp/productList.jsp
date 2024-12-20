<%@page import="java.util.List"%>
<%@page import="co.yedam.vo.ProductVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no" />
<meta name="description" content="" />
<meta name="author" content="" />
<title>Shop Homepage - Start Bootstrap Template</title>
<!-- Favicon-->
<link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
<!-- Bootstrap icons-->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
	rel="stylesheet" />
<!-- Core theme CSS (includes Bootstrap)-->
<link href="css/styles.css" rel="stylesheet" />
</head>
<!-- 상품목록  -->

<%
	List<ProductVO> list = (List<ProductVO>) request.getAttribute("productvo");
%>

<!-- Section-->
<section class="py-5">
	<div class="container px-4 px-lg-5 mt-5">
		<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
			<%
				for (ProductVO pvo : list) {
			%>

			<div class="col mb-5">
				<div class="card h-100">
					<!-- Sale badge-->
					<div class="badge bg-dark text-white position-absolute"
						style="top: 0.5rem; right: 0.5rem">Sale</div>
					<!-- Product image-->
					<a href="productInfo.do?code=<%=pvo.getPrdCode()%>"> <img
						class="card-img-top" alt="..."
						src="images/<%=pvo.getProdImage()%>">
					</a>
					<!-- Product details-->
					<div class="card-body p-4">
						<div class="text-center">
							<!-- Product name-->
							<h5 class="fw-bolder"><%=pvo.getPrdName()%></h5>
							<!-- Product reviews-->
							<div class="d-flex justify-content-center small text-warning mb-2">
								<%
									for (int i = 0; i < pvo.getStarPoint(); i++) { 
								%>
								<div class="bi-star-fill"></div>
								<%
									}
								%>
							</div>
							<!-- Product price-->
							<span class="text-muted text-decoration-line-through"><%=pvo.getOriginPrice()%></span>
							<%=pvo.getSalePrice()%>
						</div>
					</div>
					<!-- Product actions-->
					<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
						<div class="text-center">
							<a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
						</div>
					</div>
				</div>
			</div>
			<%
			}
			%>
		</div>
	</div>
</section>