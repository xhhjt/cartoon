package com.zl.cartoon.controoler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CouponController {

    @RequestMapping(value = "coupon")
    public String coupon(){
        return "coupon";
    }
}
