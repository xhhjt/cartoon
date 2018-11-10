package com.zl.cartoon.entity.returnmodel;

public class RechargeListModel {

    /**
     * price : 29
     * vm : 2900
     * hongbao : 0
     * hongbaoType : 0
     * select : false
     * iconUrl :
     * configId : 2001
     * productType : 0
     * productAmount : 0
     * defaultRecharge : 1
     * defaultActivity : 0
     * couponId : np_IC1sJMhC1n6q
     * discount : 3
     * expiring : false
     */

    private int price;
    private int vm;
    private int hongbao;
    private int hongbaoType;
    private boolean select;
    private String iconUrl;
    private int configId;
    private int productType;
    private int productAmount;
    private int defaultRecharge;
    private int defaultActivity;
    private String couponId;
    private int discount;
    private boolean expiring;

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getVm() {
        return vm;
    }

    public void setVm(int vm) {
        this.vm = vm;
    }

    public int getHongbao() {
        return hongbao;
    }

    public void setHongbao(int hongbao) {
        this.hongbao = hongbao;
    }

    public int getHongbaoType() {
        return hongbaoType;
    }

    public void setHongbaoType(int hongbaoType) {
        this.hongbaoType = hongbaoType;
    }

    public boolean isSelect() {
        return select;
    }

    public void setSelect(boolean select) {
        this.select = select;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }

    public int getConfigId() {
        return configId;
    }

    public void setConfigId(int configId) {
        this.configId = configId;
    }

    public int getProductType() {
        return productType;
    }

    public void setProductType(int productType) {
        this.productType = productType;
    }

    public int getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(int productAmount) {
        this.productAmount = productAmount;
    }

    public int getDefaultRecharge() {
        return defaultRecharge;
    }

    public void setDefaultRecharge(int defaultRecharge) {
        this.defaultRecharge = defaultRecharge;
    }

    public int getDefaultActivity() {
        return defaultActivity;
    }

    public void setDefaultActivity(int defaultActivity) {
        this.defaultActivity = defaultActivity;
    }

    public String getCouponId() {
        return couponId;
    }

    public void setCouponId(String couponId) {
        this.couponId = couponId;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public boolean isExpiring() {
        return expiring;
    }

    public void setExpiring(boolean expiring) {
        this.expiring = expiring;
    }
}
