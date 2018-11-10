package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.SearchBookResult;
import com.zl.cartoon.entity.returnmodel.SearchHintResult;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SearchController {

    @RequestMapping(value = "/search")
    public String index(Model model) {
        return "search";
    }

    @RequestMapping(value = "search/books.json", method = RequestMethod.GET)
    @ResponseBody
    public SearchBookResult searchBook(@RequestParam(value = "keyword")String keyword,
                                       @RequestParam(value = "page")int page,
                                       @RequestParam(value = "pageSize")int pageSize) {
        SearchBookResult result = new SearchBookResult();

        return result;
    }

    @RequestMapping(value = "/search/book.do",method = RequestMethod.GET)
    @ResponseBody
    public SearchBookResult searchBookDo(@RequestParam(value = "keyword")String keyword) {
        SearchBookResult result = new SearchBookResult();

        return result;
    }

    @RequestMapping(value = "search/hint.json",method = RequestMethod.GET)
    @ResponseBody
    public SearchHintResult searchHint(){
        SearchHintResult result=new SearchHintResult();

        return result;
    }


}
