package com.zl.cartoon.controoler;

import com.zl.cartoon.config.CartoonConfig;
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
    @Autowired
    CartoonConfig cartoonConfig;

    @RequestMapping(value = "cartoondetail/{rowid}")
    public String cartoonDetail(@PathVariable("rowid") long rowid, Model model) {
        model.addAttribute("cartoon", server.getCartoonDetailModel(rowid));
        return "cartoondetail";
    }

    @RequestMapping(value = "cartoondetail/GetIndexOrderBy", method = RequestMethod.POST)
    @ResponseBody
    public Result GetIndexOrderBy(@RequestBody GetIndexOrderModel model) {
        Result result = new Result();
        result.setData(server.getGetIndexOrderBy(model));
        return result;
    }

    @RequestMapping(value = "cartoondetail/IsRank", method = RequestMethod.POST)
    @ResponseBody
    public Result IsRank() {
        Result result = new Result();
        result.setData("yes");
        return result;
    }

    @RequestMapping(value = "cartoondetail/ChapterList/{cartoonId}")
    public String ChapterList(@PathVariable("cartoonId") long CartoonId, Model model) {
        model.addAttribute("cartoon", server.getCartoonDetailModel(12L));
        return "chapterlist";
    }

    @RequestMapping(value = "Cartoon/Read/{cartoonId}/{chapterId}")
    public String Read(@PathVariable(value = "cartoonId") long cartoonId,
                       @PathVariable(value = "chapterId") long chapterId, Model model) {
        model.addAttribute("chapter", server.getChapterDetailModel(cartoonId));
        return "read";
    }

    @RequestMapping(value = "Cartoon/GetContent")
    @ResponseBody
    public Result GetContent() {
        Result result = new Result();
        result.setData(server.getChapterImageListModel());
        return result;
    }


}
