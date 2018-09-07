package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ClassifyController {


    @RequestMapping(value = "/classify")
    public String index(){
        return "classify";
    }
}
