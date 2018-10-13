package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class ReadCountModel {
  private List<RecommendDetailModel> data;
  private List<RecommendDetailModel> data1;
  private List<RecommendDetailModel> data2;

    public List<RecommendDetailModel> getData() {
        return data;
    }

    public void setData(List<RecommendDetailModel> data) {
        this.data = data;
    }

    public List<RecommendDetailModel> getData1() {
        return data1;
    }

    public void setData1(List<RecommendDetailModel> data1) {
        this.data1 = data1;
    }

    public List<RecommendDetailModel> getData2() {
        return data2;
    }

    public void setData2(List<RecommendDetailModel> data2) {
        this.data2 = data2;
    }
}
