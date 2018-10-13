package com.zl.cartoon.entity.returnmodel;

public class RecommendDetailModel {
    private long id;
    private String author;
    private String cname;
    private String content;
    private String imgUrl;
    private String linkUrl;
    private String summary;
    private String title;
    private int updateStatus;
    private String upstr;
    private int lchapter;

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getLinkUrl() {
        return linkUrl;
    }

    public void setLinkUrl(String linkUrl) {
        this.linkUrl = linkUrl;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getUpdateStatus() {
        return updateStatus;
    }

    public void setUpdateStatus(int updateStatus) {
        this.updateStatus = updateStatus;
    }

    public String getUpstr() {
        return upstr;
    }

    public void setUpstr(String upstr) {
        this.upstr = upstr;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getLchapter() {
        return lchapter;
    }

    public void setLchapter(int lchapter) {
        this.lchapter = lchapter;
    }
}
