package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.Result;
import com.zl.cartoon.entity.requestmodel.GetIndexOrderModel;
import com.zl.cartoon.server.CartoonDetailServer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class CartoonDetailController {
    @Autowired
    CartoonDetailServer server;

    @RequestMapping(value = "cartoondetail/{rowid}")
    public String cartoonDetail(@PathVariable("rowid") long rowid, Model model) {
        model.addAttribute("rowid", rowid);
        model.addAttribute("Pic", "/assets/picture/8f46d40d2e7b434da01b7ad9074b553c.gif");

        return "cartoondetail";
    }

    @RequestMapping(value = "cartoondetail/GetIndexOrderBy", method = RequestMethod.POST)
    @ResponseBody
    public Result GetIndexOrderBy(@RequestBody GetIndexOrderModel model) {
        Result result = new Result();
        result.setData(server.getGetIndexOrderBy(model));
        return result;
    }

    @RequestMapping(value = "cartoondetail/IsRank",method = RequestMethod.POST)
    @ResponseBody
    public Result IsRank(){
        Result result = new Result();
        result.setData("yes");
        return result;
    }
}
