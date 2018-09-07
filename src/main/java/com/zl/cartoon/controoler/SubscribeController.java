package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SubscribeController {


    @RequestMapping(value = "/subscribe")
    public String index(){
        return "subscribe";
    }
}
