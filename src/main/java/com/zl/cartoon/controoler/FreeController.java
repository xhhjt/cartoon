package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FreeController {
    @RequestMapping(value = "free")
    public String free() {
        return "free";
    }
}
