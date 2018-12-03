package com.zl.cartoon.controoler;

import com.zl.cartoon.config.CartoonConfig;
import com.zl.cartoon.entity.returnmodel.*;
import com.zl.cartoon.server.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class IndexController {

    @Autowired
    CartoonConfig cartoonConfig;

    @Autowired
    BookService service;

    @RequestMapping(value = "/")
    public String index(Model model) {
        return "index";
    }

    @RequestMapping(value = "rank/books.json", method = RequestMethod.GET)
    @ResponseBody
    public BooksResult books(@RequestParam(value = "channel") String channel,
                             @RequestParam(value = "page") int page,
                             @RequestParam(value = "pageSize") int pageSize) {
        BooksResult result = new BooksResult();
        List<BookModel> bookModels = service.books(channel, page, pageSize);
        result.setNextUrl("/rank/books.json?channel=male&page=2&pageSize=20");
        result.setBooks(bookModels);
        return result;
    }

    @RequestMapping(value = "banner/getBanners.json", method = RequestMethod.GET)
    @ResponseBody
    public BannerResult getBanners(@RequestParam(value = "location") int location) {
        BannerResult result = new BannerResult();
        return result;
    }

    @RequestMapping(value = "home/list.json", method = RequestMethod.GET)
    @ResponseBody
    public IndexListResult list() {
        IndexListResult result = new IndexListResult();
        result.setTitle(cartoonConfig.getSetTitle());
        List<TemplatesModel> templatesModels = new ArrayList<>();
        TemplatesModel templatesModel = new TemplatesModel();
        //todo 写死
        templatesModel.setTemplateId("3001");
        templatesModel.setType(2);
        templatesModel.setTitle("1004");
        List<BookModel> bookModels = service.homeList();
        templatesModel.setSources(bookModels);
        templatesModels.add(templatesModel);
        result.setTemplates(templatesModels);
        return result;
    }
}
