package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MyController {


    @RequestMapping(value = "/my")
    public String index(){
        return "my";
    }
}
