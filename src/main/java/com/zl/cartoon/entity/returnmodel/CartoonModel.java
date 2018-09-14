package com.zl.cartoon.entity.returnmodel;

import java.util.Date;
import java.util.List;

public class CartoonModel {
    private long RowId;
    private String Title;
    private String Des;
    private Date CreateTime;
    private Date UpdateTime;
    private String Creater;
    private String Pic;
    private String Author;
    private int Enable;
    private long VisitCount;
    private String DetailUrl;
    private int SortNum;
    private String SortPic;
    private String LastTitle;

    public long getRowId() {
        return RowId;
    }

    public void setRowId(long rowId) {
        RowId = rowId;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDes() {
        return Des;
    }

    public void setDes(String des) {
        Des = des;
    }

    public Date getCreateTime() {
        return CreateTime;
    }

    public void setCreateTime(Date createTime) {
        CreateTime = createTime;
    }

    public Date getUpdateTime() {
        return UpdateTime;
    }

    public void setUpdateTime(Date updateTime) {
        UpdateTime = updateTime;
    }

    public String getCreater() {
        return Creater;
    }

    public void setCreater(String creater) {
        Creater = creater;
    }

    public String getPic() {
        return Pic;
    }

    public void setPic(String pic) {
        Pic = pic;
    }

    public String getAuthor() {
        return Author;
    }

    public void setAuthor(String author) {
        Author = author;
    }

    public int getEnable() {
        return Enable;
    }

    public void setEnable(int enable) {
        Enable = enable;
    }

    public long getVisitCount() {
        return VisitCount;
    }

    public void setVisitCount(long visitCount) {
        VisitCount = visitCount;
    }

    public String getDetailUrl() {
        return DetailUrl;
    }

    public void setDetailUrl(String detailUrl) {
        DetailUrl = detailUrl;
    }

    public int getSortNum() {
        return SortNum;
    }

    public void setSortNum(int sortNum) {
        SortNum = sortNum;
    }

    public String getSortPic() {
        return SortPic;
    }

    public void setSortPic(String sortPic) {
        SortPic = sortPic;
    }

    public String getLastTitle() {
        return LastTitle;
    }

    public void setLastTitle(String lastTitle) {
        LastTitle = lastTitle;
    }
}
