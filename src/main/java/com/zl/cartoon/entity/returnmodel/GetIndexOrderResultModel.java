package com.zl.cartoon.entity.returnmodel;

import java.util.Date;

public class GetIndexOrderResultModel {
    private long cartoonId;
    private int chapterStatus;
    private long id;
    private String imgUrl;
    private int index;
    private String name;
    private Date addTime;

    public long getCartoonId() {
        return cartoonId;
    }

    public void setCartoonId(long cartoonId) {
        this.cartoonId = cartoonId;
    }

    public int getChapterStatus() {
        return chapterStatus;
    }

    public void setChapterStatus(int chapterStatus) {
        this.chapterStatus = chapterStatus;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getAddTime() {
        return addTime;
    }

    public void setAddTime(Date addTime) {
        this.addTime = addTime;
    }
}
