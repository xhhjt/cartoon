package com.zl.cartoon.entity.returnmodel;

public class NewNovelsBean {
    /**
     * novel_id : 11136
     * is_topic : 0
     * category : 玄幻仙侠
     * description : 太古一战后万族皆寂，一个少年悄然崛起，脚踏圣子拳打圣女，夺得一切造化成就太古圣体，最后与天争高。
     * cover : http://cdn-novel.weituibao.com/novel-11136-cover-3987.jpg
     * novel_name : 仙道歧途
     * read_num : 23696
     * level : 75
     * word_num : 3411105
     * complete_status : 1
     * link : https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=11136&souce_scene=80
     */

    private String novel_id;
    private int is_topic;
    private String category;
    private String description;
    private String cover;
    private String novel_name;
    private int read_num;
    private String level;
    private String word_num;
    private String complete_status;
    private String link;

    public String getNovel_id() {
        return novel_id;
    }

    public void setNovel_id(String novel_id) {
        this.novel_id = novel_id;
    }

    public int getIs_topic() {
        return is_topic;
    }

    public void setIs_topic(int is_topic) {
        this.is_topic = is_topic;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getNovel_name() {
        return novel_name;
    }

    public void setNovel_name(String novel_name) {
        this.novel_name = novel_name;
    }

    public int getRead_num() {
        return read_num;
    }

    public void setRead_num(int read_num) {
        this.read_num = read_num;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }

    public String getWord_num() {
        return word_num;
    }

    public void setWord_num(String word_num) {
        this.word_num = word_num;
    }

    public String getComplete_status() {
        return complete_status;
    }

    public void setComplete_status(String complete_status) {
        this.complete_status = complete_status;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
