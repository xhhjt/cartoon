package com.zl.cartoon.entity.returnmodel;

public class BookContentResult extends BaseResult {
    private boolean isAutoPurchased;
    private String content;
    private BookNavBarModel bookNavBar;

    public boolean isAutoPurchased() {
        return isAutoPurchased;
    }

    public void setAutoPurchased(boolean autoPurchased) {
        isAutoPurchased = autoPurchased;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public BookNavBarModel getBookNavBar() {
        return bookNavBar;
    }

    public void setBookNavBar(BookNavBarModel bookNavBar) {
        this.bookNavBar = bookNavBar;
    }
}
