package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.Result;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MyController {


    @RequestMapping(value = "/my")
    public String index() {
        return "my";
    }

    @RequestMapping(value = "/my/bindphone")
    public String bindPhone() {
        return "bindphone";
    }

    @RequestMapping(value = "/usercartoon")
    public String UserCartoon(){
        return "usercartoon";
    }

    @RequestMapping(value = "my/task")
    public String task(){
        return "task";
    }

    @RequestMapping(value = "my/recharge")
    public String recharge(){
        return "recharge";
    }


    @RequestMapping(value = "phone/getcode",method = RequestMethod.POST)
    public Result phoneGetCode(@RequestParam(value = "mobile")String mobile){
        Result result=new Result();

        return result;
    }
}
