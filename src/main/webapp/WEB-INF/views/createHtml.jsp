<%@ page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<script src="js/jquery-1.11.3.js"></script>
<link rel="stylesheet" type="text/css" href="css/createHtml.css" />
<script src="js/createHtml.js"></script>
<title>创建HTML页面</title>
</head>
<body>
	<div id="lefter" class="baseFrame">
		<form action="upload">
			<textarea id="htmlPane">${htmldata}</textarea>
			<input type="submit" value="上传">
		</form>
	</div>
	<div id="righter" class="baseFrame">
		<div id="preview"></div>
	</div>
</body>
</html>