package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CartoonDetailController {


    @RequestMapping(value = "cartoondetail/{rowid}")
    public String cartoonDetail(@PathVariable("rowid") long rowid, Model model) {
        model.addAttribute("rowid", rowid);
        return "cartoondetail";
    }
}
