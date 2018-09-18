package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class CartoonDetailModel {
    private long rowId;
    private int hidprice;
    private String title;
    private String image;
    private String author;
    private int visitCount;
    private String des;
    private List<CartoonType> typeList;



    public long getRowId() {
        return rowId;
    }

    public void setRowId(long rowId) {
        this.rowId = rowId;
    }

    public int getHidprice() {
        return hidprice;
    }

    public void setHidprice(int hidprice) {
        this.hidprice = hidprice;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public int getVisitCount() {
        return visitCount;
    }

    public void setVisitCount(int visitCount) {
        this.visitCount = visitCount;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public List<CartoonType> getTypeList() {
        return typeList;
    }

    public void setTypeList(List<CartoonType> typeList) {
        this.typeList = typeList;
    }
}
