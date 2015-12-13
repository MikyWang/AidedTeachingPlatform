package com.miky.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GeneralController {

	@RequestMapping(value="index")
	public String index_jsp(Model model){
		model.addAttribute("Hello", "Hello,Test");
		return "index";
	}
	
}
