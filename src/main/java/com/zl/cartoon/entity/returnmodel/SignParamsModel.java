package com.zl.cartoon.entity.returnmodel;

public class SignParamsModel {

    /**
     * appId : wx4e40adfdd15825e2
     * timestamp : 1541843802
     * nonceStr : O4YgOQA8hCfN95A4
     * signature : 524ee1930cbf29df9c0d456bcf77cec5d46adf7b
     */

    private String appId;
    private int timestamp;
    private String nonceStr;
    private String signature;

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public int getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(int timestamp) {
        this.timestamp = timestamp;
    }

    public String getNonceStr() {
        return nonceStr;
    }

    public void setNonceStr(String nonceStr) {
        this.nonceStr = nonceStr;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }
}
