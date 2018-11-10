package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class BannerResult extends BaseResult {
    public BannerResult() {
        super();
    }

    private List<BannerModel> bannerList;

    public List<BannerModel> getBannerList() {
        return bannerList;
    }

    public void setBannerList(List<BannerModel> bannerList) {
        this.bannerList = bannerList;
    }
}
