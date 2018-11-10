package com.zl.cartoon.entity.returnmodel;

public class CategorysDataModel {

    /**
     * paid : false
     * leaf : true
     * needPay : false
     * grade : 1
     * articleUuid : np_d3o1epUEjyn-lDkhK2krxEaxdqj6PSQobCWiRQ
     * price : 0
     * sourceUuid : np_c3sEJM1G3yWp-2lwemwlyUTaf6H_MnQtbnnOF493rqg7JXoEKQ
     * title : 第1章：被女上司打压
     */

    private boolean paid;
    private boolean leaf;
    private boolean needPay;
    private int grade;
    private String articleUuid;
    private int price;
    private String sourceUuid;
    private String title;

    public boolean isPaid() {
        return paid;
    }

    public void setPaid(boolean paid) {
        this.paid = paid;
    }

    public boolean isLeaf() {
        return leaf;
    }

    public void setLeaf(boolean leaf) {
        this.leaf = leaf;
    }

    public boolean isNeedPay() {
        return needPay;
    }

    public void setNeedPay(boolean needPay) {
        this.needPay = needPay;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public String getArticleUuid() {
        return articleUuid;
    }

    public void setArticleUuid(String articleUuid) {
        this.articleUuid = articleUuid;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getSourceUuid() {
        return sourceUuid;
    }

    public void setSourceUuid(String sourceUuid) {
        this.sourceUuid = sourceUuid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
