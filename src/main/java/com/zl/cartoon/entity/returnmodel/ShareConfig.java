package com.zl.cartoon.entity.returnmodel;

public class ShareConfig {

    /**
     * appId : wxdeb7b8aab7d08c22
     * nonceStr : gMNWVlUvDf
     * timestamp : 1539518249759
     * signature : dfea3934d134774861d88ac230a08847d0fe03fb
     */

    private String appId;
    private String nonceStr;
    private long timestamp;
    private String signature;

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getNonceStr() {
        return nonceStr;
    }

    public void setNonceStr(String nonceStr) {
        this.nonceStr = nonceStr;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getSignature() {
        return signature;
    }

    public void setSignature(String signature) {
        this.signature = signature;
    }
}
