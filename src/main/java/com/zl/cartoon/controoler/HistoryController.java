package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HistoryController {

    @RequestMapping(value = "/history")
    public String history() {
        return "history";
    }
}
