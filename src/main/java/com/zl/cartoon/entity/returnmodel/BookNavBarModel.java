package com.zl.cartoon.entity.returnmodel;

public class BookNavBarModel {

    /**
     * currentChapter : {"paid":false,"leaf":true,"grade":1,"needPay":false,"sourceUuid":"np_Iy9sfMQV2yGh_m8mK2MlmEnXf_z8Pyktay6eQY11rfxVJQ","title":"第001章","price":0,"articleUuid":"np_JSg5KM1Aiib68jMgK2N_xBCNcv37PicqPnvPRYx1r69VJQ"}
     * nextChapter : np_ciduK8xIjSX8_W9wK24kzknYcqmqaXR5airORd5--_xVJQ
     * preFreeChapter : null
     * preChapter : null
     */

    private CurrentChapterBean currentChapter;
    private String nextChapter;
    private String preFreeChapter;
    private String preChapter;

    public String getNextChapter() {
        return nextChapter;
    }

    public void setNextChapter(String nextChapter) {
        this.nextChapter = nextChapter;
    }

    public Object getPreFreeChapter() {
        return preFreeChapter;
    }

    public CurrentChapterBean getCurrentChapter() {
        return currentChapter;
    }

    public void setCurrentChapter(CurrentChapterBean currentChapter) {
        this.currentChapter = currentChapter;
    }

    public void setPreFreeChapter(String preFreeChapter) {
        this.preFreeChapter = preFreeChapter;
    }

    public String getPreChapter() {
        return preChapter;
    }

    public void setPreChapter(String preChapter) {
        this.preChapter = preChapter;
    }
}
