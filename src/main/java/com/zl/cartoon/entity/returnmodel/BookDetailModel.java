package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class BookDetailModel {

    /**
     * novel_name : 超级兵王混花都
     * category : 都市言情
     * is_free : 0
     * free_time : 0
     * author : 兵痞
     * show_author : 0
     * cover : http://cdn-novel.weituibao.com/novel-9458-cover-3539.jpg
     * word_num : 2198584
     * chapter_num : 700
     * complete_status : 0
     * description : <p>一个令西方黑暗世界所有人都闻风丧胆的不败神话，龙隐都市，却成为了一名酒店服务生，冷若冰山的美女总裁，清纯俏皮的可爱护士，成熟妩媚的职业御姐，绝世冷魅的美女杀手接踵而来，且看他如何在都市之中叱诧风云</p>
     * simple_chapters : [{"chapter_name":"第1章 暗夜女王","read_url":"https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=1&souce_scene=20"},{"chapter_name":"第2章 做真正的男人","read_url":"https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=2&souce_scene=20"},{"chapter_name":"第3章 后会无期","read_url":"https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=3&souce_scene=20"},{"chapter_name":"第4章 保护费","read_url":"https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=4&souce_scene=20"}]
     * latest_chapter : {"is_buy":0,"is_vip":0,"is_whole":0,"fee":32,"chapter_name":"第700章  冰王","read_url":"https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&chapter=700&souce_scene=20","whole_fee":0,"topic_id":0,"source_fee":0}
     * ticket_limit_time : 0
     * is_buy_ticket : 0
     * topic_ticket_name :
     * recommend : [{"novel_id":"2846","novel_name":"终极教官","cover":"http://cdn-novel.weituibao.com/novel-2846-cover-7612.jpg","link":"https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=2846"},{"novel_id":"11841","novel_name":"这个女婿有点猛","cover":"http://cdn-novel.weituibao.com/0-temp-201810-15-1539597468895.jpg","link":"https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=11841"},{"novel_id":"8025","novel_name":"官途","cover":"http://cdn-novel.weituibao.com/novel-8025-cover-2209.jpg","link":"https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=8025"},{"novel_id":"3461","novel_name":"花都战兵","cover":"http://cdn-novel.weituibao.com/0-temp-201801-06-1515231053523.jpg","link":"https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=3461"},{"novel_id":"7953","novel_name":"我的乡村发迹史","cover":"http://cdn-novel.weituibao.com/0-temp-201806-20-1529490043692.jpg","link":"https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=7953"},{"novel_id":"2856","novel_name":"仕途天骄","cover":"http://cdn-novel.weituibao.com/0-temp-201808-24-1535088542530.jpg","link":"https://wx4e40adfdd15825e2.wx.mxs.com/book?account_id=198&novel_id=2856"}]
     * catalog_url : https://wx4e40adfdd15825e2.wx.mxs.com/directory?account_id=198&novel_id=9458&souce_scene=20
     * read_url : https://wx4e40adfdd15825e2.wx.mxs.com/read/index?account_id=198&novel_id=9458&souce_scene=20
     * reward_amount : 588
     * read_num : 12万
     * is_whole : 0
     * whole_fee : 0
     * topic_id : 0
     * source_fee : 0
     * is_collect : 1
     * owner_id : 143
     * update_time : 2018-11-10 03:14:46
     */

    private String novel_name;
    private String category;
    private int is_free;
    private int free_time;
    private String author;
    private String show_author;
    private String cover;
    private String word_num;
    private String chapter_num;
    private String complete_status;
    private String description;
    private LastestChapter latest_chapter;
    private int ticket_limit_time;
    private int is_buy_ticket;
    private String topic_ticket_name;
    private String catalog_url;
    private String read_url;
    private String reward_amount;
    private String read_num;
    private int is_whole;
    private int whole_fee;
    private int topic_id;
    private int source_fee;
    private int is_collect;
    private String owner_id;
    private String update_time;
    private List<ChapterModel> simple_chapters;
    private List<NewBookModel> recommend;

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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getShow_author() {
        return show_author;
    }

    public void setShow_author(String show_author) {
        this.show_author = show_author;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getWord_num() {
        return word_num;
    }

    public void setWord_num(String word_num) {
        this.word_num = word_num;
    }

    public String getChapter_num() {
        return chapter_num;
    }

    public void setChapter_num(String chapter_num) {
        this.chapter_num = chapter_num;
    }

    public String getComplete_status() {
        return complete_status;
    }

    public void setComplete_status(String complete_status) {
        this.complete_status = complete_status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LastestChapter getLatest_chapter() {
        return latest_chapter;
    }

    public void setLatest_chapter(LastestChapter latest_chapter) {
        this.latest_chapter = latest_chapter;
    }

    public int getTicket_limit_time() {
        return ticket_limit_time;
    }

    public void setTicket_limit_time(int ticket_limit_time) {
        this.ticket_limit_time = ticket_limit_time;
    }

    public int getIs_buy_ticket() {
        return is_buy_ticket;
    }

    public void setIs_buy_ticket(int is_buy_ticket) {
        this.is_buy_ticket = is_buy_ticket;
    }

    public String getTopic_ticket_name() {
        return topic_ticket_name;
    }

    public void setTopic_ticket_name(String topic_ticket_name) {
        this.topic_ticket_name = topic_ticket_name;
    }

    public String getCatalog_url() {
        return catalog_url;
    }

    public void setCatalog_url(String catalog_url) {
        this.catalog_url = catalog_url;
    }

    public String getRead_url() {
        return read_url;
    }

    public void setRead_url(String read_url) {
        this.read_url = read_url;
    }

    public String getReward_amount() {
        return reward_amount;
    }

    public void setReward_amount(String reward_amount) {
        this.reward_amount = reward_amount;
    }

    public String getRead_num() {
        return read_num;
    }

    public void setRead_num(String read_num) {
        this.read_num = read_num;
    }

    public int getIs_whole() {
        return is_whole;
    }

    public void setIs_whole(int is_whole) {
        this.is_whole = is_whole;
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

    public int getIs_collect() {
        return is_collect;
    }

    public void setIs_collect(int is_collect) {
        this.is_collect = is_collect;
    }

    public String getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(String owner_id) {
        this.owner_id = owner_id;
    }

    public String getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(String update_time) {
        this.update_time = update_time;
    }

    public List<ChapterModel> getSimple_chapters() {
        return simple_chapters;
    }

    public void setSimple_chapters(List<ChapterModel> simple_chapters) {
        this.simple_chapters = simple_chapters;
    }

    public List<NewBookModel> getRecommend() {
        return recommend;
    }

    public void setRecommend(List<NewBookModel> recommend) {
        this.recommend = recommend;
    }


}
