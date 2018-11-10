package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.*;
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
        List<BookModel> bookModels = new ArrayList<>();
        for (int i = 0; i < 9; i++) {
            BookModel model = new BookModel();
            if (i == 1) {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("313123123");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.f9bc2c574e6948d3bb0a60d11c5128c3.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
            } else if (i == 2) {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("3133");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.d5040d2a9cf14879bf843124755d5ab0.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
            } else if (i == 3) {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("3123123");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.d216765226284c03bef0722e4ab53267.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
            } else {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("313177723123");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.f9bc2c574e6948d3bb0a60d11c5128c3.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
                if (i < 4) {
                    model.setSerial(true);
                }
            }
            bookModels.add(model);
        }
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
        result.setTitle("周浪小黄书");
        List<TemplatesModel> templatesModels = new ArrayList<>();
        TemplatesModel templatesModel = new TemplatesModel();
        templatesModel.setTemplateId("3001");
        templatesModel.setType(2);
        templatesModel.setTitle("1004");
        List<BookModel> bookModels = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            BookModel model = new BookModel();
            if (i == 1) {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("313123123123");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.d5040d2a9cf14879bf843124755d5ab0.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
            }

            if (i == 2) {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("313123123");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.d5040d2a9cf14879bf843124755d5ab0.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
            }

            if (i == 3) {
                model.setAuthor("zl");
                model.setCategory("御史大夫");
                model.setAuthor("御史大夫");
                model.setTitle("特种官路");
                model.setTotalCount("413.9万");
                model.setSourceUuid("3123123");
                model.setCover("https://easyreadfs.nosdn.127.net/nfb.d5040d2a9cf14879bf843124755d5ab0.jpg");
                model.setDescription("归都市，只为保护战友的女神妹妹。繁华都市里，陈扬如鱼得水，逍遥自在。且看一代兵王如何用铁拳和智慧打下一片商业帝国……欲了解四帝更多故事，请微");
            }
            bookModels.add(model);
        }

        templatesModel.setSources(bookModels);
        templatesModels.add(templatesModel);
        result.setTemplates(templatesModels);
        return result;
    }
}
