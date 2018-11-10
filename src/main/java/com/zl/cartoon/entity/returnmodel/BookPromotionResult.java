package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class BookPromotionResult extends BaseResult {
    private List bannerList;
    private List<LinkListModel> linkList;

    public List getBannerList() {
        return bannerList;
    }

    public void setBannerList(List bannerList) {
        this.bannerList = bannerList;
    }

    public List<LinkListModel> getLinkList() {
        return linkList;
    }

    public void setLinkList(List<LinkListModel> linkList) {
        this.linkList = linkList;
    }
}
