package com.zl.cartoon.entity.returnmodel;

public class ChapterDetailModel {
    private String title;
    private Long catoonRowid;
    private long chapterRowid;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Long getCatoonRowid() {
        return catoonRowid;
    }

    public void setCatoonRowid(Long catoonRowid) {
        this.catoonRowid = catoonRowid;
    }

    public long getChapterRowid() {
        return chapterRowid;
    }

    public void setChapterRowid(long chapterRowid) {
        this.chapterRowid = chapterRowid;
    }
}
