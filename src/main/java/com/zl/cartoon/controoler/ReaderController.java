package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.*;
import com.zl.cartoon.server.ReadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Controller
public class ReaderController {
    @Autowired
    ReadService readService;

    @RequestMapping(value = "book/reader.do")
    public String reader() {
        return "reader";
    }

    @RequestMapping(value = "activity/popup.json", method = RequestMethod.GET)
    @ResponseBody
    public PopupActivityResult popup() {
        PopupActivityResult result = new PopupActivityResult();
        ActivityModel model = new ActivityModel();
        model.setId("");
        model.setImageUrl("");
        model.setTargetUrl("");
        model.setVip(false);
        result.setActivity(model);
        return result;
    }

    @RequestMapping(value = "book/info.json", method = RequestMethod.GET)
    @ResponseBody
    public BookInfoResult info(@RequestParam(value = "sourceUuid") String sourceUuid,
                               @RequestParam(value = "articleUuid") String articleUuid) {
        BookInfoResult result = new BookInfoResult();
        BookInfoModel model = new BookInfoModel();
        model.setAuthor("zl");
        model.setBeautyFlag(1);
        model.setBookStatus(1);
        model.setCategory("jxh");
        model.setClickCount("123万");
        result.setBook(model);
        result.setProgress("np_JSg5KM1Aiib68jMgK2N_xBCNcv37PicqPnvPRYx1r69VJQ");
        result.setForceAutoPurchase(0);
        return result;
    }

    @RequestMapping(value = "trade/pending.json", method = RequestMethod.GET)
    @ResponseBody
    public TradePendingResult pend() {
        TradePendingResult result = new TradePendingResult();
        result.setAutoPurchase(-1);
        result.setHongbao("0");
        result.setBalance("0");
        return result;
    }

    @RequestMapping(value = "book/content.json", method = RequestMethod.POST)
    @ResponseBody
    public BookContentResult content(@RequestParam(value = "sourceUuid") String sourceUuid,
                                     @RequestParam(value = "articleUuid") String articleUuid,
                                     @RequestParam(value = "forceFollow") int forceFollow,
                                     @RequestParam(value = "isContinue") int isContinue) {
        BookContentResult result = new BookContentResult();
        BookNavBarModel model = new BookNavBarModel();
        model.setNextChapter("np_ciduK8xIjSX8_W9wK24kzknYcqmqaXR5airORd5--_xVJQ");
        CurrentChapterBean bean = new CurrentChapterBean();
        model.setCurrentChapter(bean);
        bean.setArticleUuid("np_Iy9sfMQV2yGh_m8mK2MlmEnXf_z8Pyktay6eQY11rfxVJQ");
        bean.setGrade(1);
        bean.setLeaf(true);
        bean.setNeedPay(false);
        bean.setPaid(false);
        bean.setTitle("周瑜的小黄书");
        bean.setPrice(0);
        bean.setSourceUuid("np_Iy9sfMQV2yGh_m8mK2MlmEnXf_z8Pyktay6eQY11rfxVJQ");

        result.setBookNavBar(model);
        result.setContent(content());
        return result;
    }

    private String content() {
        String content = "周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书周瑜的小黄书";
        content = Base64.getEncoder().encodeToString(content.getBytes(Charset.defaultCharset()));

        return content;
    }

    @RequestMapping(value = "ad/get", method = RequestMethod.GET)
    @ResponseBody
    public BaseResult getAd(@RequestParam(value = "boxIds") List<Integer> boxIds) {
        BaseResult result = new BaseResult();
        return result;
    }

    @RequestMapping(value = "book/promotion.json", method = RequestMethod.GET)
    @ResponseBody
    public BookPromotionResult promotion() {
        BookPromotionResult result = new BookPromotionResult();
        List<LinkListModel> linkList = new ArrayList<>();
        LinkListModel model = new LinkListModel();
        model.setAdditional("[{\"wordDesc\":\"女上司如狼似虎！在办公室一遍又一遍的折腾我\",\"source\":\"ts_0ca428e48cae4d02877ba5d2703ab5a7_4\"},{\"wordDesc\":\"租了个女友回家过年，竟发生了不可控的事情\",\"source\":\"bd_8b220ff6972e4102ba69a0f15a527b8c_4\"},{\"wordDesc\":\"我把你当情人，你却把我当提款机…\",\"source\":\"bd_45c9c2f311f34cd08e7ad72cb31dc25f_4\"},{\"wordDesc\":\"想要夫妻关系好，动作最重要\",\"source\":\"bd_4c23e2a64b8141adbdf4ad88b182fbbf_4\"}]");
        model.setBannerName("男频官场7.26");
        model.setId("5005");
        linkList.add(model);
        result.setLinkList(linkList);
        return result;
    }


}
