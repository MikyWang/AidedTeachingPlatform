package com.miky.Controllers;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.miky.Models.User;

@Controller
public class GeneralController extends BaseController {

	@RequestMapping(value="createHtml")
	public String index_jsp(Model model){
	   FileInputStream path = null;
	try {
		path = new FileInputStream("/htmls/Init.html");
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	   model.addAttribute("htmldata", path.toString());
		return "createHtml";
	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String login_jsp(User user, Model model) {

		model.addAttribute("user", user.getFirstName());

		return "login";
	}

	@RequestMapping(value = "login", method = RequestMethod.GET)
	public String loging_jsp(User user, Model model) {

		model.addAttribute("user", "hee");

		return "login";
	}
}
