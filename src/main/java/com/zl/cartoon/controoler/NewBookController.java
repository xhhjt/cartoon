package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.returnmodel.*;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class NewBookController {
    @RequestMapping(value = "book", method = RequestMethod.GET)
    public String book(@RequestParam(value = "account_id", required = false) String account_id,
                       @RequestParam(value = "novel_id", required = false) String novel_id,
                       @RequestParam(value = "souce_scene", required = false) String souce_scene) {
        return "book";
    }

    @RequestMapping(value = "order/getRewardAmount", method = RequestMethod.GET)
    @ResponseBody
    public NewReturnBase getRewardAmount(@RequestParam(value = "fans_id",required = false)String fans_id) {
        NewReturnBase base = new NewReturnBase();
        List<Integer> list = new ArrayList<>();
        list.add(100);
        list.add(388);
        list.add(588);
        list.add(888);
        return base;
    }

    @RequestMapping(value = "novel/novelInfo", method = RequestMethod.GET)
    @ResponseBody
    public NewReturnBase novelInfo(@RequestParam(value = "fans_id",required = false)String fans_id,
                                   @RequestParam(value = "account_id",required = false)String account_id,
                                   @RequestParam(value = "novel_id",required = false)String novel_id,
                                   @RequestParam(value = "topic_id",required = false)String topic_id,
                                   @RequestParam(value = "souce_scene",required = false)String souce_scene) {
        NewReturnBase base = new NewReturnBase();
        BookDetailModel model = new BookDetailModel();
        model.setNovel_name("zljxh");
        model.setCategory("都是宴请");
        model.setIs_free(0);
        model.setFree_time(0);
        model.setAuthor("兵痞");
        model.setShow_author("0");
        model.setCover("http://cdn-novel.weituibao.com/novel-9458-cover-3539.jpg");
        model.setWord_num("2198584");
        model.setChapter_num("700");
        model.setComplete_status("0");
        model.setDescription("<p>一个令西方黑暗世界所有人都闻风丧胆的不败神话，龙隐都市，却成为了一名酒店服务生，冷若冰山的美女总裁，清纯俏皮的可爱护士，成熟妩媚的职业御姐，绝世冷魅的美女杀手接踵而来，且看他如何在都市之中叱诧风云</p>");
        model.setTicket_limit_time(0);
        model.setIs_buy_ticket(0);
        model.setTopic_ticket_name("");
        model.setCatalog_url("https://wx4e40adfdd15825e2.wx.mxs.com/directory?account_id=198&novel_id=9458&souce_scene=20");
        model.setRead_url("https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&souce_scene=20");
        model.setReward_amount("588");
        model.setRead_num("12万");
        model.setIs_whole(0);
        model.setWhole_fee(0);
        model.setTopic_id(0);
        model.setSource_fee(0);
        model.setIs_collect(1);
        model.setOwner_id("143");
        model.setUpdate_time("2018-11-10 03");
        base.setData(model);

        List<ChapterModel> models = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            ChapterModel model1 = new ChapterModel();
            model1.setChapter_name("第1章 暗夜女王");
            model1.setRead_url("https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=1&souce_scene=20");
            models.add(model1);
        }
        model.setSimple_chapters(models);
        LastestChapter chapter = new LastestChapter();
        chapter.setChapter_name("第1章 暗夜女王");
        chapter.setRead_url("https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=1&souce_scene=20");
        chapter.setFee(32);
        List<NewBookModel> bookModelList1 = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            NewBookModel model2 = new NewBookModel();
            model2.setCategory("都市言情");
            model2.setNovel_id("1629");
            model2.setDescription("失忆的陆振东，为了弄清自己的真正身份，无奈只能混迹职场，却因为得罪女上司，从而遭到各种销魂的折磨，本以为通过的实力可以成为商界的一枝独秀，然而他的真实身份却在这个时候悄悄浮出水面，他究竟是何方妖孽？");
            model2.setIs_topic(0);
            model2.setCover("http://cdn-novel.weituibao.com/0-temp-201810-17-1539753979598.jpg");
            model2.setName("zl的小书");
            model2.setRead_num(5545454);
            model2.setWord_num("1231231");
            model2.setLevel("89");
            model2.setComplete_status("1");
            model2.setLink("https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=12153&souce_scene=80");
            bookModelList1.add(model2);
        }
        model.setRecommend(bookModelList1);
        return base;
    }

    @RequestMapping(value = "novel/rewardRank", method = RequestMethod.GET)
    @ResponseBody
    public RewardRank rewardRank(@RequestParam(value = "fans_id",required = false)String fans_id,
                                 @RequestParam(value = "account_id",required = false)String account_id,
                                 @RequestParam(value = "novel_id",required = false)String novel_id,
                                 @RequestParam(value = "openid",required = false)String openid) {
        RewardRank returnBase = new RewardRank();
        List<RewardRankModel> list=new ArrayList<>();
        for (int i=0;i<3;i++){
            RewardRankModel model=new RewardRankModel();
            model.setReward(100);
            model.setNick_name("zljxh");
            model.setHeadimgurl("http://thirdwx.qlogo.cn/mmopen/Mo7RQZnPhwmPBERocGnHicJDdGSwvYMFeudGkAjeXEBKgzk3XboLeXNmfhC3sJnwwrXb5IFIoh7wNRwdld89vchsrVuiajsJvz/132");
        }
        return returnBase;
    }


}
