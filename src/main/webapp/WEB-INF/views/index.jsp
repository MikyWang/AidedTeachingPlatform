<%@ page pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html>
<head>
<title>HelloTest</title>
</head>
<body>
	<div>${Hello}</div>
	<form action="login" method="post">
		<input name="firstName" value="张" /><br> <input name="lastName"
			value="三" /><br> <input name="contactInfo.tel"
			value="13809908909" /><br> <input name="contactInfo.address"
			value="北京海淀" /><br> <input type="submit" value="Save" />
	</form>
	<a href="<c:url value="/login"/>">TEST</a>
</body>
</html>