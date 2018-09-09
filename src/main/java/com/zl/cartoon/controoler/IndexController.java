package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.Result;
import com.zl.cartoon.server.IndexServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class IndexController {
    @Autowired
    IndexServer indexServer;

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "index/data", method = RequestMethod.GET)
    @ResponseBody
    public Result getIndexData() {
        Result result = new Result();
        Object o = indexServer.getIndexDate();
        result.setData(o);
        return result;
    }


}
