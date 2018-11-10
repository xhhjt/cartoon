package com.zl.cartoon.entity.returnmodel;

import com.google.gson.annotations.SerializedName;

public class RechargeConfirmModel {

    /**
     * timeStamp : 1539763348
     * package : prepay_id=wx171602280353239b16db5df61577432213
     * paySign : 141333B29E5A0CFE3DC1032F5905D794
     * appId : wxdeb7b8aab7d08c22
     * signType : MD5
     * nonceStr : a9a78a280d4746f688b673d6cce19298
     * rechargeUuid : b9e00d71-3870-4877-a75f-de60c55eb8f6
     */

    private String timeStamp;
    @SerializedName("package")
    private String packageX;
    private String paySign;
    private String appId;
    private String signType;
    private String nonceStr;
    private String rechargeUuid;

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getPackageX() {
        return packageX;
    }

    public void setPackageX(String packageX) {
        this.packageX = packageX;
    }

    public String getPaySign() {
        return paySign;
    }

    public void setPaySign(String paySign) {
        this.paySign = paySign;
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getSignType() {
        return signType;
    }

    public void setSignType(String signType) {
        this.signType = signType;
    }

    public String getNonceStr() {
        return nonceStr;
    }

    public void setNonceStr(String nonceStr) {
        this.nonceStr = nonceStr;
    }

    public String getRechargeUuid() {
        return rechargeUuid;
    }

    public void setRechargeUuid(String rechargeUuid) {
        this.rechargeUuid = rechargeUuid;
    }
}
