package com.zl.cartoon.entity.returnmodel;

public class CurrentChapterBean {

    /**
     * paid : false
     * leaf : true
     * grade : 1
     * needPay : false
     * sourceUuid : np_Iy9sfMQV2yGh_m8mK2MlmEnXf_z8Pyktay6eQY11rfxVJQ
     * title : 第001章
     * price : 0
     * articleUuid : np_JSg5KM1Aiib68jMgK2N_xBCNcv37PicqPnvPRYx1r69VJQ
     */

    private boolean paid;
    private boolean leaf;
    private int grade;
    private boolean needPay;
    private String sourceUuid;
    private String title;
    private int price;
    private String articleUuid;

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

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public boolean isNeedPay() {
        return needPay;
    }

    public void setNeedPay(boolean needPay) {
        this.needPay = needPay;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getArticleUuid() {
        return articleUuid;
    }

    public void setArticleUuid(String articleUuid) {
        this.articleUuid = articleUuid;
    }
}
