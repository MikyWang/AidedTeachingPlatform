package com.miky.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.miky.Models.User;

@Controller
public class GeneralController extends BaseController {
	
	
	@RequestMapping(value="index")
	public String index_jsp(Model model){
		model.addAttribute("Hello", "Hello,Test");
		return "index";
	}
	
	@RequestMapping(value="login",method=RequestMethod.POST)
	public String login_jsp(User user,Model model){
		
	    model.addAttribute("user",user.getFirstName());
	    
		return "login";
	}
	@RequestMapping(value="login",method=RequestMethod.GET)
	public String loging_jsp(User user,Model model){
		
	    model.addAttribute("user","hee");
	    
		return "login";
	}
}
