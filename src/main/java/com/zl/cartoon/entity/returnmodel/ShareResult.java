package com.zl.cartoon.entity.returnmodel;

public class ShareResult extends BaseResult {

    private boolean shareAble;
    private ShareConfig config;

    public boolean isShareAble() {
        return shareAble;
    }

    public void setShareAble(boolean shareAble) {
        this.shareAble = shareAble;
    }

    public ShareConfig getConfig() {
        return config;
    }

    public void setConfig(ShareConfig config) {
        this.config = config;
    }
}
