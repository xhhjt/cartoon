package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.requestmodel.SignParamsRequestModel;
import com.zl.cartoon.entity.returnmodel.*;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class NewIndexController {

    @RequestMapping(value = "index/center")
    public String newindex(@RequestParam(value = "account_id", required = false) String account_id,
                           @RequestParam(value = "scene", required = false) String scene) {
        return "newindex";
    }

    @RequestMapping(value = "index/recommend", method = RequestMethod.GET)
    @ResponseBody
    public NewReturnBase indexRecommend(@RequestParam(value = "fans_id", required = false) String fans_id,
                                        @RequestParam(value = "account_id", required = false) String account_id,
                                        @RequestParam(value = "sex_type", required = false) String sex_type) {
        NewReturnBase returnBase = new NewReturnBase();
        NewIndexRecommend recommend = new NewIndexRecommend();
        BannerInfoBean bannerInfoBean = new BannerInfoBean();
        bannerInfoBean.setImg_url("http://cdn-novel.weituibao.com/0-temp-201810-18-1539849809739.jpg");
        bannerInfoBean.setLink("https://wx4e40adfdd15825e2.wx.mxs.com/special/books?account_id=198&topic_id=25&source_type=banner&souce_scene=10");
        recommend.setBanner_info(bannerInfoBean);
        recommend.setBanner_type("2");
        List<NewBookModel> bookModelList = new ArrayList<>();
        List<NewBookModel> bookModelList1 = new ArrayList<>();
        List<NewBookModel> bookModelList2 = new ArrayList<>();
        List<NewBookModel> bookModelList3 = new ArrayList<>();
        List<NewBookModel> bookModelList4 = new ArrayList<>();
        List<NewBookModel> bookModelList5 = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            NewBookModel model = new NewBookModel();
            model.setCategory("都市言情");
            model.setNovel_id("1629");
            model.setDescription("失忆的陆振东，为了弄清自己的真正身份，无奈只能混迹职场，却因为得罪女上司，从而遭到各种销魂的折磨，本以为通过的实力可以成为商界的一枝独秀，然而他的真实身份却在这个时候悄悄浮出水面，他究竟是何方妖孽？");
            model.setIs_topic(0);
            model.setCover("http://cdn-novel.weituibao.com/0-temp-201810-17-1539753979598.jpg");
            model.setName("zl的小书");
            model.setRead_num(5545454);
            model.setWord_num("1231231");
            model.setLevel("89");
            model.setComplete_status("1");
            model.setLink("https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=12153&souce_scene=80");
            NewBookModel model1 = new NewBookModel();
            NewBookModel model2 = new NewBookModel();
            NewBookModel model3 = new NewBookModel();
            NewBookModel model4 = new NewBookModel();
            NewBookModel model5 = new NewBookModel();
            if (i < 5) {//小编推荐
                BeanUtils.copyProperties(model, model1);
            }
            BeanUtils.copyProperties(model, model2);
            BeanUtils.copyProperties(model, model3);
            BeanUtils.copyProperties(model, model4);
            BeanUtils.copyProperties(model, model5);
            bookModelList.add(model);
            bookModelList1.add(model1);
            bookModelList2.add(model2);
            bookModelList3.add(model3);
            if (i < 6) {
                bookModelList4.add(model4);
            }
            if (i < 3) {
                bookModelList5.add(model5);
            }
            model.setImg_url("http://cdn-novel.weituibao.com/0-temp-201811-07-1541577310584.jpg");

        }

        recommend.setRecommends(bookModelList1);
        recommend.setMale_novels(bookModelList2);
        recommend.setFree_novels(bookModelList3);
        recommend.setNew_novels(bookModelList4);
        recommend.setFree_novels(bookModelList5);
        recommend.setFree_time(124522);
        recommend.setAccount_name("zl");
        recommend.setCircle_recommends(bookModelList);
        recommend.setQrcode_url("http://mmbiz-qpic-cn.weituibao.com/mmbiz_jpg/YiaYByia1hRYMChZyP4FnxRKjYtZgib5WKZkAtZcq1x8dTUG8ejM8FBD1VeLttr4rQRPhYKXmgPQB5GPbcQm9VkFw/0");
        returnBase.setData(recommend);
        return returnBase;
    }

    @RequestMapping(value = "novel/rank", method = RequestMethod.GET)
    @ResponseBody
    public NewReturnBase novelRank(@RequestParam(value = "account_id", required = false) String account_id,
                                   @RequestParam(value = "sex_type", required = false) String sex_type,
                                   @RequestParam(value = "type", required = false) String type,
                                   @RequestParam(value = "limit", required = false) String limit) {
        //{
        //      "novel_id": "2099",
        //      "author": "\u6708\u4e0b\u541f",
        //      "category": "\u90fd\u5e02\u8a00\u60c5",
        //      "is_free": 0,
        //      "free_time": 0,
        //      "is_topic": 0,
        //      "read_num": "1000\u4e07+",
        //      "name": "\u5175\u738b\u5378\u7532",
        //      "level": "90",
        //      "cover": "http:\/\/cdn-novel.weituibao.com\/0-temp-201711-23-1511400192342.jpg",
        //      "description": "\u8d85\u7ea7\u5175\u738b\u79e6\u6e0a\uff0c\u5378\u7532\u5f52\u7530\u91cd\u56de\u90fd\u5e02\uff0c\u5c06\u5f53\u5e74\u7684\u8c1c\u9898\u4e00\u4e00\u89e3\u5f00\uff01\u66fe\u7ecf\u626c\u540d\u4e16\u754c\u7684\u5175\u738b\uff0c\u8ba9\u6240\u6709\u4eba\u4e3a\u4e4b\u6298\u670d\uff01",
        //      "link": "https:\/\/wx4e40adfdd15825e2.wx.mxs.com\/book?account_id=198&novel_id=2099&souce_scene=40",
        //      "complete_status": "1",
        //      "topic_id": 0,
        //      "word_num": "8012812",
        //      "whole_fee": 0,
        //      "source_fee": 0
        //    }
        NewReturnBase returnBase = new NewReturnBase();
        List<NewBookModel> models = new ArrayList<>();
        for (int i = 0; i < 6; i++) {
            NewBookModel model = new NewBookModel();
            model.setCategory("都市言情");
            model.setNovel_id("1629");
            model.setDescription("失忆的陆振东，为了弄清自己的真正身份，无奈只能混迹职场，却因为得罪女上司，从而遭到各种销魂的折磨，本以为通过的实力可以成为商界的一枝独秀，然而他的真实身份却在这个时候悄悄浮出水面，他究竟是何方妖孽？");
            model.setIs_topic(0);
            model.setCover("http://cdn-novel.weituibao.com/0-temp-201810-17-1539753979598.jpg");
            model.setName("zl的小书");
            model.setRead_num(5545454);
            model.setWord_num("1231231");
            model.setLevel("89");
            model.setComplete_status("1");
            model.setLink("https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=12153&souce_scene=80");

            models.add(model);
        }
        returnBase.setData(models);
        return returnBase;
    }

    @RequestMapping(value = "index/customNovels", method = RequestMethod.GET)
    @ResponseBody
    public NewReturnBase indexCustomNovels(@RequestParam(value = "account_id", required = false) String account_id,
                                           @RequestParam(value = "sex_type", required = false) String sex_type) {
        //  "novel_id": "8418",
        //        "description": "\u5f53\u521d\u770b\u4e0d\u8d77\u6211\u7684\u5973\u795e\uff0c\u73b0\u5728\u7adf\u7136\u8981\u8ddf\u6211\u540d\u4e0b\u7684\u516c\u53f8\u5408\u4f5c\u2026\u2026\n\u91d1\u9cde\u5c82\u662f\u6c60\u4e2d\u7269\uff0c\u4e00\u671d\u7f18\u5230\u5373\u5316\u9f99\u3002\n\u6211\u8981\u6210\u4e3a\u4e00\u4ee3\u67ad\u96c4\uff0c\u8ba9\u90a3\u4e9b\u770b\u4e0d\u8d77\u6211\u7684\u4eba\u90fd\u901a\u901a\u540e\u6094\u5f53\u521d\u62db\u60f9\u8fc7\u6211\u3002",
        //        "category": "\u90fd\u5e02\u8a00\u60c5",
        //        "cover": "http:\/\/cdn-novel.weituibao.com\/novel-8418-cover-3762.jpg",
        //        "name": "\u67ad\u96c4",
        //        "level": "99",
        //        "word_num": "835834",
        //        "complete_status": "0",
        //        "score": "2.9",
        //        "link": "https:\/\/wx4e40adfdd15825e2.wx.mxs.com\/book?account_id=198&novel_id=8418&souce_scene=130"
        NewReturnBase returnBase = new NewReturnBase();
        CustomNovelsModel novelsModel = new CustomNovelsModel();
        novelsModel.setDescription("zl的小玥玥");
        novelsModel.setName("小玥玥");
        novelsModel.setType("2");
        List<NewBookModel> models = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            NewBookModel model = new NewBookModel();
            model.setCategory("都市言情");
            model.setNovel_id("1629");
            model.setDescription("失忆的陆振东，为了弄清自己的真正身份，无奈只能混迹职场，却因为得罪女上司，从而遭到各种销魂的折磨，本以为通过的实力可以成为商界的一枝独秀，然而他的真实身份却在这个时候悄悄浮出水面，他究竟是何方妖孽？");
            model.setIs_topic(0);
            model.setCover("http://cdn-novel.weituibao.com/0-temp-201810-17-1539753979598.jpg");
            model.setName("zl的小书");
            model.setRead_num(5545454);
            model.setWord_num("1231231");
            model.setLevel("89");
            model.setComplete_status("1");
            model.setLink("https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=12153&souce_scene=80");

            models.add(model);
        }

        novelsModel.setNovels(models);
        returnBase.setData(novelsModel);
        return returnBase;
    }

    @RequestMapping(value = "stat/signParams", method = RequestMethod.POST)
    @ResponseBody
    public NewReturnBase statSignParams(@RequestParam(value = "openid", required = false) String openid,
                                        @RequestParam(value = "account_id", required = false) String account_id,
                                        @RequestParam(value = "fans_id", required = false) String fans_id,
                                        @RequestParam(value = "url", required = false) String url) {
        NewReturnBase result = new NewReturnBase();
        SignParamsModel model = new SignParamsModel();
        model.setAppId("");
        model.setAppId("");
        model.setAppId("");
        model.setAppId("");
        result.setData(model);
        return result;
    }


    @RequestMapping(value = "stat/log", method = RequestMethod.POST)
    @ResponseBody
    public NewReturnBase statLog(@RequestParam(value = "openid", required = false) String openid,
                                 @RequestParam(value = "account_id", required = false) String account_id,
                                 @RequestParam(value = "fans_id", required = false) String fans_id,
                                 @RequestParam(value = "url", required = false) String url,
                                 @RequestParam(value = "novel_id", required = false) String novel_id,
                                 @RequestParam(value = "referrer", required = false) String referrer) {
        NewReturnBase result = new NewReturnBase();
        return result;
    }


    @RequestMapping(value = "index/userInfo", method = RequestMethod.GET)
    @ResponseBody
    public NewReturnBase indexUserInfo(@RequestParam(value = "openid", required = false) String openid,
                                       @RequestParam(value = "account_id", required = false) String account_id,
                                       @RequestParam(value = "fans_id", required = false) String fans_id) {
        NewReturnBase returnBase = new NewReturnBase();
        NewUserInfo userInfo = new NewUserInfo();
        returnBase.setData(userInfo);
        userInfo.setId("24234");
        userInfo.setOpenid("2423424");
        userInfo.setHeadimgurl("http://wx.qlogo.cn/mmopen/PiajxSqBRaEKrxqHy3NlshbDR1M3zX54vXibMibrE7o9P5icRCU3sE0dHKKL1egVdWxia8qwxmCa0LBpFzGQTkY9Obg/0");
        userInfo.setNickname("zl");
        userInfo.setAmount("200");
        userInfo.setIs_vip(0);
        userInfo.setVip_end_time("");
        userInfo.setIs_have_coupon(0);
        userInfo.setIs_buy_topic(0);
        userInfo.setAllow_year_fee(1);
        userInfo.setIs_signin(1);
        userInfo.setCan_export(0);
        userInfo.setCan_import(0);
        return returnBase;
    }
}
