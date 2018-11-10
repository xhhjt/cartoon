package com.zl.cartoon.controoler;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HoneBaoController {

    @RequestMapping(value = "hongbao")
    public String hongbao(){
        return "hongbao";
    }
}
