package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HotController {


    @RequestMapping(value = "/hot")
    public String index(){
        return "hot";
    }
}