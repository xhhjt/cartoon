package com.zl.cartoon.entity.returnmodel;

public class LastestChapter {
    /**
     * is_buy : 0
     * is_vip : 0
     * is_whole : 0
     * fee : 32
     * chapter_name : 第700章  冰王
     * read_url : https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=700&souce_scene=20
     * whole_fee : 0
     * topic_id : 0
     * source_fee : 0
     */

    private int is_buy;
    private int is_vip;
    private int is_whole;
    private int fee;
    private String chapter_name;
    private String read_url;
    private int whole_fee;
    private int topic_id;
    private int source_fee;

    public int getIs_buy() {
        return is_buy;
    }

    public void setIs_buy(int is_buy) {
        this.is_buy = is_buy;
    }

    public int getIs_vip() {
        return is_vip;
    }

    public void setIs_vip(int is_vip) {
        this.is_vip = is_vip;
    }

    public int getIs_whole() {
        return is_whole;
    }

    public void setIs_whole(int is_whole) {
        this.is_whole = is_whole;
    }

    public int getFee() {
        return fee;
    }

    public void setFee(int fee) {
        this.fee = fee;
    }

    public String getChapter_name() {
        return chapter_name;
    }

    public void setChapter_name(String chapter_name) {
        this.chapter_name = chapter_name;
    }

    public String getRead_url() {
        return read_url;
    }

    public void setRead_url(String read_url) {
        this.read_url = read_url;
    }

    public int getWhole_fee() {
        return whole_fee;
    }

    public void setWhole_fee(int whole_fee) {
        this.whole_fee = whole_fee;
    }

    public int getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(int topic_id) {
        this.topic_id = topic_id;
    }

    public int getSource_fee() {
        return source_fee;
    }

    public void setSource_fee(int source_fee) {
        this.source_fee = source_fee;
    }
}
