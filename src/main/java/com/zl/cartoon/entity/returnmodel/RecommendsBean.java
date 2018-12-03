package com.zl.cartoon.entity.returnmodel;

public class RecommendsBean {
    /**
     * novel_id : 6508
     * novel_name : 狂少纵横
     * category : 都市言情
     * is_topic : 0
     * img_url : http://cdn-novel.weituibao.com/0-temp-201810-26-1540542079185.jpg
     * description : 超级兵王接到神秘任务，强势回归校园，掀起血雨腥风！
     清纯校花，美艳御姐老师，暴力警花，尽数臣服胯下。
     看天才狂少如何纵横都市，博览群花，书写传奇！
     * complete_status : 0
     * word_num : 1182731
     * link : https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=6508&souce_scene=20
     */

    private String novel_id;
    private String novel_name;
    private String category;
    private int is_topic;
    private String img_url;
    private String description;
    private String complete_status;
    private String word_num;
    private String link;

    public String getNovel_id() {
        return novel_id;
    }

    public void setNovel_id(String novel_id) {
        this.novel_id = novel_id;
    }

    public String getNovel_name() {
        return novel_name;
    }

    public void setNovel_name(String novel_name) {
        this.novel_name = novel_name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getIs_topic() {
        return is_topic;
    }

    public void setIs_topic(int is_topic) {
        this.is_topic = is_topic;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getComplete_status() {
        return complete_status;
    }

    public void setComplete_status(String complete_status) {
        this.complete_status = complete_status;
    }

    public String getWord_num() {
        return word_num;
    }

    public void setWord_num(String word_num) {
        this.word_num = word_num;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
