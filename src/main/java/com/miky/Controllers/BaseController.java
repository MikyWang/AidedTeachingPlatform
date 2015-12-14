package com.miky.Controllers;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.ModelAttribute;

public class BaseController {
    
	@Resource
    protected HttpServletRequest request;
	@Resource
    protected HttpServletResponse response;
	@Resource
    protected HttpSession session;
      
    @ModelAttribute
    public void setReqAndRes(HttpServletRequest request, HttpServletResponse response){  
        this.request = request;
        this.response = response;
        this.session = request.getSession();
    }
    
}
