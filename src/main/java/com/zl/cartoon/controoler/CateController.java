package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.Result;
import com.zl.cartoon.entity.requestmodel.LocaInfoModel;
import com.zl.cartoon.server.CatServer;
import com.zl.cartoon.server.IndexServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CateController {
    @Autowired
    private CatServer catServer;
    @Autowired
    private IndexServer indexServer;

    @RequestMapping(value = "cate")
    public String Cate(Model model){
        model.addAttribute("lists",catServer.getTypeList());
        return "cate";
    }

    @RequestMapping(value = "cate/LoadInfo",method = RequestMethod.POST)
    @ResponseBody
    public Result LocaInfo(@RequestBody LocaInfoModel model){
        Result result=new Result();
        result.setCode(0);
        result.setData(indexServer.setRecommendDetailModelList(10,1));
        return result;
    }
}
