package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class NewIndexRecommend  {


    private BannerInfoBean banner_info;
    private int free_time;
    private String qrcode_url;
    private String account_name;
    private String banner_type;
    private List<NewBookModel> circle_recommends;
    private List<NewBookModel> recommends;
    private List<NewBookModel> male_novels;
    private List<NewBookModel> female_novels;
    private List<NewBookModel> new_novels;
    private List<NewBookModel> free_novels;

    public BannerInfoBean getBanner_info() {
        return banner_info;
    }

    public void setBanner_info(BannerInfoBean banner_info) {
        this.banner_info = banner_info;
    }

    public int getFree_time() {
        return free_time;
    }

    public void setFree_time(int free_time) {
        this.free_time = free_time;
    }

    public String getQrcode_url() {
        return qrcode_url;
    }

    public void setQrcode_url(String qrcode_url) {
        this.qrcode_url = qrcode_url;
    }

    public String getAccount_name() {
        return account_name;
    }

    public void setAccount_name(String account_name) {
        this.account_name = account_name;
    }

    public String getBanner_type() {
        return banner_type;
    }

    public void setBanner_type(String banner_type) {
        this.banner_type = banner_type;
    }

    public List<NewBookModel> getCircle_recommends() {
        return circle_recommends;
    }

    public void setCircle_recommends(List<NewBookModel> circle_recommends) {
        this.circle_recommends = circle_recommends;
    }

    public List<NewBookModel> getRecommends() {
        return recommends;
    }

    public void setRecommends(List<NewBookModel> recommends) {
        this.recommends = recommends;
    }

    public List<NewBookModel> getMale_novels() {
        return male_novels;
    }

    public void setMale_novels(List<NewBookModel> male_novels) {
        this.male_novels = male_novels;
    }

    public List<NewBookModel> getFemale_novels() {
        return female_novels;
    }

    public void setFemale_novels(List<NewBookModel> female_novels) {
        this.female_novels = female_novels;
    }

    public List<NewBookModel> getNew_novels() {
        return new_novels;
    }

    public void setNew_novels(List<NewBookModel> new_novels) {
        this.new_novels = new_novels;
    }

    public List<NewBookModel> getFree_novels() {
        return free_novels;
    }

    public void setFree_novels(List<NewBookModel> free_novels) {
        this.free_novels = free_novels;
    }
}
