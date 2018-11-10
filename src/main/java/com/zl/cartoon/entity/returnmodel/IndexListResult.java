package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class IndexListResult extends BaseResult {

    public IndexListResult() {
    }

    /**
     * msg : 成功
     * code : 0
     * templates : [{"sources":[{"description":"　　小人物马英杰无意间发现了上司的一个秘密，于是，他利用这个秘密，在职上步步为营，上演了一曲假结婚游戏，他和上司的女友是算计还是爱情，职场的路还能平步青云吗？","sourceUuid":"np_In09eZkUjHX6qD4gK255yhOKc6z-aHMpbHvPEN1wq6pVJQ","title":"绯色升迁图:崛起官场","cover":"https://easyreadfs.nosdn.127.net/nfb.d5040d2a9cf14879bf843124755d5ab0.jpg","author":"梅花三弄","category":"官场","serial":false,"totalCount":"210.5万"},{"description":"一次偶然的冲动，他获得了女副县长的青睐，他短暂的拥有了她，从此，他的命运发生了改变，在这条陷井纵横，尔虞我诈的道路上，他用他智慧，良知，激情和热血，一往直前，一路攀爬。","sourceUuid":"np_IydpKcxI3Hf8qmh0K2kvn0jWJq79OiUua3nOENx_qKpVJQ","title":"官道之活色生香","cover":"https://easyreadfs.nosdn.127.net/nfb.d216765226284c03bef0722e4ab53267.jpg","author":"西门吹雪","category":"官场","serial":false,"totalCount":"253.3万"},{"description":"出身贫寒的小员工顾乐在公司里被美女上司狠虐，正打算辞职，结果公司组织去巴厘岛旅游，美女上司酒后误入顾乐的房间，因为冲动，顾乐对女上司做了不该做的事情。\r\n本以为麻烦将至，可没想到他却得到了女上司的特殊关爱\u2026\u2026\r\n","sourceUuid":"np_JHppeM1C2CP6qTtzKz18z0nedKH6OHR-ay2bENtyq_lVJQ","title":"我的女神上司","cover":"https://easyreadfs.nosdn.127.net/ULJtylkZMWH3bmm5pJ91Wg==/8796093023002329805","author":"葵花小子","category":"都市","serial":false,"totalCount":"200.4万"}],"title":"1004","templateId":"3001","type":2}]
     * title : 夜潇潇
     */



    private String title;
    private List<TemplatesModel> templates;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<TemplatesModel> getTemplates() {
        return templates;
    }

    public void setTemplates(List<TemplatesModel> templates) {
        this.templates = templates;
    }
}
