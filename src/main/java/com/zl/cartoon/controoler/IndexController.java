package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.Result;
import com.zl.cartoon.entity.returnmodel.ReadCountModel;
import com.zl.cartoon.entity.returnmodel.RecommendModel;
import com.zl.cartoon.server.IndexServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class IndexController {
    @Autowired
    IndexServer indexServer;

    @RequestMapping(value = "/")
    public String index(Model model) {
        model.addAttribute("data", indexServer.getIndexDate());
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

    @RequestMapping(value = "index/recommend",method = RequestMethod.POST)
    @ResponseBody
    public Result getRecommend() {
        Result result = new Result();
        Object o = indexServer.getRecommend();
        result.setData(o);
        return result;
    }

    @RequestMapping(value = "/Cartoon/LoadRecom", method = RequestMethod.POST)
    @ResponseBody
    public Result LoadRecom() {
        Result result = new Result();
        List<RecommendModel> list=new ArrayList<>();
        list.add(indexServer.jingping());
        result.setData(list);
        return result;
    }

    @RequestMapping(value = "rank")
    public String rank(){
        return "rank";
    }

    @RequestMapping(value = "rank/ReadCount")
    @ResponseBody
    public Result ReadCount(){
        Result result=new Result();
        ReadCountModel countModel=new ReadCountModel();
        countModel.setData(indexServer.setRecommendDetailModelList(10,1));
        countModel.setData1(indexServer.setRecommendDetailModelList(10,1));
        countModel.setData2(indexServer.setRecommendDetailModelList(10,1));
        result.setData(countModel);
        result.setCode(0);
        return result;
    }
}
