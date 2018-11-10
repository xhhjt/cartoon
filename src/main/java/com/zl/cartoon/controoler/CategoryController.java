package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.BookInfoResult;
import com.zl.cartoon.entity.returnmodel.CategoryTypeResult;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CategoryController {

    @RequestMapping(value = "/category.do")
    public String category(@RequestParam(value = "channel", required = false) String channel,
                           @RequestParam(value = "category", required = false) String category) {
        return "category";
    }

    @RequestMapping(value = "category/header.json", method = RequestMethod.GET)
    @ResponseBody
    public CategoryTypeResult header(@RequestParam(value = "channel", required = false) String channel) {
        CategoryTypeResult result = new CategoryTypeResult();
        return result;
    }

    @RequestMapping(value = "category/books.json", method = RequestMethod.GET)
    @ResponseBody
    public BookInfoResult categoryBook(@RequestParam("channel")String channel,
                                       @RequestParam("serial")int serial,
                                       @RequestParam("wordCount")int wordCount,
                                       @RequestParam("category")long category,
                                       @RequestParam("page")int page,
                                       @RequestParam("pageSize")int pageSize) {
        BookInfoResult result = new BookInfoResult();

        return result;
    }
}
