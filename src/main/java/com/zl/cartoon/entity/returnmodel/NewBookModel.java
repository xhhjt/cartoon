package com.zl.cartoon.entity.returnmodel;

import com.google.gson.annotations.SerializedName;

public class NewBookModel {

    private String novel_id;
    private String category;
    private String description;
    private int is_topic;
    private String cover;
    private String name;
    private int read_num;
    private String word_num;
    private String level;
    private String complete_status;
    private String link;
    /**
     * author : 月下吟
     * is_free : 0
     * free_time : 0
     * read_num : 1000万+
     * topic_id : 0
     * whole_fee : 0
     * source_fee : 0
     */

    private String author;
    private int is_free;
    private int free_time;
    @SerializedName("read_num")
    private String read_numX;
    private int topic_id;
    private int whole_fee;
    private int source_fee;
    /**
     * type : 2
     * banner_type : 1
     * novel_id : 11943
     * novel_name : 小农民的妖孽人生
     * img_url : http://cdn-novel.weituibao.com/0-temp-201811-07-1541577310584.jpg
     */

    private String type;
    private String banner_type;
    @SerializedName("novel_id")
    private int novel_idX;
    private String novel_name;
    private String img_url;

    public String getNovel_id() {
        return novel_id;
    }

    public void setNovel_id(String novel_id) {
        this.novel_id = novel_id;
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

    public int getIs_topic() {
        return is_topic;
    }

    public void setIs_topic(int is_topic) {
        this.is_topic = is_topic;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getRead_num() {
        return read_num;
    }

    public void setRead_num(int read_num) {
        this.read_num = read_num;
    }

    public String getWord_num() {
        return word_num;
    }

    public void setWord_num(String word_num) {
        this.word_num = word_num;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getIs_free() {
        return is_free;
    }

    public void setIs_free(int is_free) {
        this.is_free = is_free;
    }

    public int getFree_time() {
        return free_time;
    }

    public void setFree_time(int free_time) {
        this.free_time = free_time;
    }

    public String getRead_numX() {
        return read_numX;
    }

    public void setRead_numX(String read_numX) {
        this.read_numX = read_numX;
    }

    public int getTopic_id() {
        return topic_id;
    }

    public void setTopic_id(int topic_id) {
        this.topic_id = topic_id;
    }

    public int getWhole_fee() {
        return whole_fee;
    }

    public void setWhole_fee(int whole_fee) {
        this.whole_fee = whole_fee;
    }

    public int getSource_fee() {
        return source_fee;
    }

    public void setSource_fee(int source_fee) {
        this.source_fee = source_fee;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getBanner_type() {
        return banner_type;
    }

    public void setBanner_type(String banner_type) {
        this.banner_type = banner_type;
    }

    public int getNovel_idX() {
        return novel_idX;
    }

    public void setNovel_idX(int novel_idX) {
        this.novel_idX = novel_idX;
    }

    public String getNovel_name() {
        return novel_name;
    }

    public void setNovel_name(String novel_name) {
        this.novel_name = novel_name;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
}
