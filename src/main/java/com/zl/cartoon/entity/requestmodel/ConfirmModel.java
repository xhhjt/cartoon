package com.zl.cartoon.entity.requestmodel;

public class ConfirmModel {
    //userId: 22773673
    //time: 1539762959380
    //agentId: 0
    //key: gkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMtAOrpbNIYml3 6if7Or5WJfPxyLPxKPudZyfx
    //sign: dd3c37e4f33311caf96eaf74af316708
    //linkId: 0
    //siteId: 5062
    //type: 6
    //amount: 26
    //configId: 2001
    //couponId: np_IC1sJMhC1n6q
    //discount: 3
    //hongbao: 0
    //index: 1

    private long userId;
    private long time;
    private long agentId;
    private String key;
    private String sign;
    private long linkId;
    private long siteId;
    private int type;
    private int amount;
    private long configId;
    private long couponId;
    private int discount;
    private int hongbao;
    private int index;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getTime() {
        return time;
    }

    public void setTime(long time) {
        this.time = time;
    }

    public long getAgentId() {
        return agentId;
    }

    public void setAgentId(long agentId) {
        this.agentId = agentId;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getSign() {
        return sign;
    }

    public void setSign(String sign) {
        this.sign = sign;
    }

    public long getLinkId() {
        return linkId;
    }

    public void setLinkId(long linkId) {
        this.linkId = linkId;
    }

    public long getSiteId() {
        return siteId;
    }

    public void setSiteId(long siteId) {
        this.siteId = siteId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public long getConfigId() {
        return configId;
    }

    public void setConfigId(long configId) {
        this.configId = configId;
    }

    public long getCouponId() {
        return couponId;
    }

    public void setCouponId(long couponId) {
        this.couponId = couponId;
    }

    public int getDiscount() {
        return discount;
    }

    public void setDiscount(int discount) {
        this.discount = discount;
    }

    public int getHongbao() {
        return hongbao;
    }

    public void setHongbao(int hongbao) {
        this.hongbao = hongbao;
    }

    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }
}
