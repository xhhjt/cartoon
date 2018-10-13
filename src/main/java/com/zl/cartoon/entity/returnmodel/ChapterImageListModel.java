package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class ChapterImageListModel {
    private String imglist;
    private long chapterid;
    private int code;
    private int coin;
    private int index;
    private int max;
    private String message;
    private String name;
    private String url;
    private int usercoin;


    public String getImglist() {
        return imglist;
    }

    public void setImglist(String imglist) {
        this.imglist = imglist;
    }

    public long getChapterid() {
        return chapterid;
    }

    public void setChapterid(long chapterid) {
        this.chapterid = chapterid;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getCoin() {
        return coin;
    }

    public void setCoin(int coin) {
        this.coin = coin;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public int getMax() {
        return max;
    }

    public void setMax(int max) {
        this.max = max;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public int getUsercoin() {
        return usercoin;
    }

    public void setUsercoin(int usercoin) {
        this.usercoin = usercoin;
    }
}
