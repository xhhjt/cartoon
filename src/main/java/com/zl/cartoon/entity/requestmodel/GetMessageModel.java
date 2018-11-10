package com.zl.cartoon.entity.requestmodel;

public class GetMessageModel {
    //userId: 22773673
    //time: 1539762377407
    //agentId: 0
    //key: gkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAMtAOrpbNIYml3 6if7Or5WJfPxyLPxKPudZyfx
    //sign: f8a3737ba3e717581faa7e8ac31e3156
    //linkId: 0
    //siteId: 5062
    //type: 0
    private long userId;
    private long time;
    private long agentId;
    private String key;
    private String sign;
    private long linkId;
    private long siteId;
    private int type;

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
}
