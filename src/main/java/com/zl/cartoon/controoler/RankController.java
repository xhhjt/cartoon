package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RankController {

    @RequestMapping(value = "/rank")
    public String rank() {
        return "rank";
    }
}
