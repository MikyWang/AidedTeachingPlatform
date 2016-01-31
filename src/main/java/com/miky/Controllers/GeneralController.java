package com.miky.Controllers;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.miky.Models.UploadFile;
import com.miky.Models.User;
import com.miky.Service.FileHelper;
import com.miky.Service.FileHelper.FileType;

import java.io.File;

@Controller
public class GeneralController extends BaseController {

	@RequestMapping(value = "createHtml")
	public String createHtml_jsp(Model model) {
		return "createHtml";
	}

	@RequestMapping(value = "uploadHtml", method = RequestMethod.POST)
	@ResponseBody
	public String upload_html(@RequestBody UploadFile uploadFile) {
		try {

			FileHelper.PutFile(request, uploadFile.getFileBody(), uploadFile.getFileName(), FileType.html);
			response.setContentType("text/html;charset=UTF-8");

		} catch (Exception e) {

		}
		return ("htmls/" + uploadFile.getFileName());
	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String login_jsp(User user, Model model) {

		model.addAttribute("user", user.getFirstName());

		return "login";
	}

	@RequestMapping(value="/")
	public String loging_jsp(User user, Model model) {

	

		return "html/index.html";
	}
}
