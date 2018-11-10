package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.BaseResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CommonController {

    @RequestMapping(value = "/statistics/log/upload.json", method = RequestMethod.GET)
    @ResponseBody
    public BaseResult upload(@RequestParam(value = "dot", required = false) String dot,
                             @RequestParam(value = "message", required = false) String message) {
        BaseResult result = new BaseResult();
        return result;
    }

    @RequestMapping(value = "/statistics/log/cors/logUpload.json", method = RequestMethod.GET)
    @ResponseBody
    public BaseResult logUpload(@RequestParam(value = "dot",required = false)String dot) {
        BaseResult result = new BaseResult();
        return result;
    }

}
