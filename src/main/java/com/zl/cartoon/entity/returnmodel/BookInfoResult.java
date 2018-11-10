package com.zl.cartoon.entity.returnmodel;

public class BookInfoResult extends BaseResult {
    public BookInfoResult() {
        super();
    }

    private String progress;
    private int forceAutoPurchase;

    private BookInfoModel book;

    public String getProgress() {
        return progress;
    }

    public void setProgress(String progress) {
        this.progress = progress;
    }

    public int getForceAutoPurchase() {
        return forceAutoPurchase;
    }

    public void setForceAutoPurchase(int forceAutoPurchase) {
        this.forceAutoPurchase = forceAutoPurchase;
    }

    public BookInfoModel getBook() {
        return book;
    }

    public void setBook(BookInfoModel book) {
        this.book = book;
    }
}
