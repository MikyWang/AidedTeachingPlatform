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
<link rel="stylesheet" type="text/css" href="css/baseStyle.css" />
<script type="text/javascript" src="js/setUp.js"></script>
<script type="text/javascript" src="js/createHtml.js"></script>
<title>创建HTML页面</title>
</head>
<body>
	<div class="blockPane"></div>
	
	<div id="lefter" class="baseFrame ">
		<input type="text" placeholder="请输入文件名:" id="fileName"
			class="textBase" />
			<div id="showPreview" class="buttonBase">预览</div>
		<textarea id="htmlPane" class="textBase" spellcheck="false"></textarea>
		<div id="submitButton" class="buttonBase">上传代码</div>
	</div>
	<div id="righter" class="baseFrame">
		<iframe id="preview" ></iframe>
	</div>

</body>
</html>