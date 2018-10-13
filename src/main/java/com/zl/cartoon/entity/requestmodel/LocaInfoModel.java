package com.zl.cartoon.entity.requestmodel;

public class LocaInfoModel {
    private int page;
    private int pageSize;
    private int novelClassId;
    private int jindu;
    private int attribute;
    private int sort;
    private int rClassId;

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getNovelClassId() {
        return novelClassId;
    }

    public void setNovelClassId(int novelClassId) {
        this.novelClassId = novelClassId;
    }

    public int getJindu() {
        return jindu;
    }

    public void setJindu(int jindu) {
        this.jindu = jindu;
    }

    public int getAttribute() {
        return attribute;
    }

    public void setAttribute(int attribute) {
        this.attribute = attribute;
    }

    public int getSort() {
        return sort;
    }

    public void setSort(int sort) {
        this.sort = sort;
    }

    public int getrClassId() {
        return rClassId;
    }

    public void setrClassId(int rClassId) {
        this.rClassId = rClassId;
    }
}
