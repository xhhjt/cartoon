package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.BookCatalogResult;
import com.zl.cartoon.entity.returnmodel.CategorysDataModel;
import com.zl.cartoon.entity.returnmodel.CategorysModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

@Controller
public class CatalogController {

    @RequestMapping(value = "/book/catalog.do")
    public String catalog(@RequestParam(value = "sourceUuid", required = false) String sourceUuid,
                          @RequestParam(value = "articleUuid", required = false) String articleUuid) {
        return "catalog";
    }

    @RequestMapping(value = "book/catalog.json", method = RequestMethod.GET)
    @ResponseBody
    public BookCatalogResult bookCatalog(@RequestParam(value = "sourceUuid", required = false) String sourceUuid,
                                         @RequestParam(value = "articleUuid", required = false) String articleUuid) {

        BookCatalogResult result = new BookCatalogResult();
        CategorysModel model = new CategorysModel();
        model.setPageCount("29");
        model.setPageSize(100);
        model.setPageNow(1);
        model.setTotalRecord("2879");
        List<CategorysDataModel> dataModels = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            CategorysDataModel model1 = new CategorysDataModel();
            model1.setPaid(false);
            model1.setLeaf(true);
            model1.setGrade(1);
            model1.setPrice(0);
            model1.setNeedPay(true);
            model1.setArticleUuid("lDkhK2krxEaxdqj6PSQnbyWiRQ");
            model1.setSourceUuid("lDkhK2krxEaxdqj6PSQnbyWiRQ");
            model1.setTitle("周浪的小黄书");
            if (i < 10) {
                model1.setNeedPay(false);
            } else {
                model1.setNeedPay(true);
            }
            dataModels.add(model1);
        }
        model.setData(dataModels);
        result.setCategorys(model);
        return result;
    }

}
