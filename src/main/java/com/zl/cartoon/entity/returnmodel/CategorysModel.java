package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class CategorysModel {
    private List<CategorysDataModel> data;


    /**
     * pageSize : 100
     * pageNow : 1
     * pageCount : 29
     * totalRecord : 2837
     */

    private int pageSize;
    private int pageNow;
    private String pageCount;
    private String totalRecord;

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNow() {
        return pageNow;
    }

    public void setPageNow(int pageNow) {
        this.pageNow = pageNow;
    }

    public String getPageCount() {
        return pageCount;
    }

    public void setPageCount(String pageCount) {
        this.pageCount = pageCount;
    }

    public String getTotalRecord() {
        return totalRecord;
    }

    public void setTotalRecord(String totalRecord) {
        this.totalRecord = totalRecord;
    }

    public List<CategorysDataModel> getData() {
        return data;
    }

    public void setData(List<CategorysDataModel> data) {
        this.data = data;
    }
}
