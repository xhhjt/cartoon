package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.LastReadProgressModel;
import com.zl.cartoon.entity.returnmodel.LastReadResult;
import com.zl.cartoon.server.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
public class UserController {
    @Autowired
    UserService service;

    @RequestMapping(value = "user")
    public String user() {
        return "user";
    }

    @RequestMapping(value = "/user/lastRead.json", method = RequestMethod.GET)
    @ResponseBody
    public LastReadResult lastRead() {
        log.error("你妹的");
        LastReadResult readResult = new LastReadResult();
        LastReadProgressModel model = service.getLastRead(0L);
        readResult.setProgress(model);
        return readResult;
    }
}
