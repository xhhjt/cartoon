package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.LastReadProgressModel;
import com.zl.cartoon.entity.returnmodel.LastReadResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @RequestMapping(value = "user")
    public String user() {
        return "user";
    }

    @RequestMapping(value = "/user/lastRead.json", method = RequestMethod.GET)
    @ResponseBody
    public LastReadResult lastRead() {
        LastReadResult readResult = new LastReadResult();
        LastReadProgressModel model=new LastReadProgressModel();
        model.setArticleUuid("331231");
        model.setInfo("周浪的小幻数");
        model.setSourceUuid("313123");
        readResult.setProgress(model);
        return readResult;
    }
}
