package com.zl.cartoon.entity.returnmodel;

public class ActivityModel {

    /**
     * vip : false
     * targetUrl :
     * imageUrl :
     * id :
     */

    private boolean vip;
    private String targetUrl;
    private String imageUrl;
    private String id;

    public boolean isVip() {
        return vip;
    }

    public void setVip(boolean vip) {
        this.vip = vip;
    }

    public String getTargetUrl() {
        return targetUrl;
    }

    public void setTargetUrl(String targetUrl) {
        this.targetUrl = targetUrl;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
