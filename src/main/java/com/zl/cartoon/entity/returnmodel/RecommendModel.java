package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class RecommendModel {
    private boolean isfree;
    private String linkurl;
    private int rtype;
    private String name;
    private List<RecommendDetailModel> list;

    public boolean isIsfree() {
        return isfree;
    }

    public void setIsfree(boolean isfree) {
        this.isfree = isfree;
    }

    public String getLinkurl() {
        return linkurl;
    }

    public void setLinkurl(String linkurl) {
        this.linkurl = linkurl;
    }

    public int getRtype() {
        return rtype;
    }

    public void setRtype(int rtype) {
        this.rtype = rtype;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<RecommendDetailModel> getList() {
        return list;
    }

    public void setList(List<RecommendDetailModel> list) {
        this.list = list;
    }
}
