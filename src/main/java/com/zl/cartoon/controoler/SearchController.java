package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.Result;
import com.zl.cartoon.entity.requestmodel.SearchModel;
import com.zl.cartoon.server.IndexServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SearchController {

    @Autowired
    IndexServer indexServer;
    @RequestMapping(value = "home/Search")
    public String Search(@RequestParam(value = "keyValue") String keyValue, Model model) {
        model.addAttribute("keyword", keyValue);
        return "search";
    }

    @RequestMapping("home/GetInfo")
    @ResponseBody
    public Result GetInfo(@RequestBody SearchModel model) {
        Result result = new Result();
        result.setCode(0);
        result.setData(indexServer.setRecommendDetailModelList(12,1));
        return result;
    }
}
