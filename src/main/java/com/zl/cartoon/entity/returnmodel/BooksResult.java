package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class BooksResult extends BaseResult {
    private List<BookModel> books;
    private String nextUrl;

    public BooksResult() {
        super();
    }

    public List<BookModel> getBooks() {
        return books;
    }

    public void setBooks(List<BookModel> books) {
        this.books = books;
    }

    public String getNextUrl() {
        return nextUrl;
    }

    public void setNextUrl(String nextUrl) {
        this.nextUrl = nextUrl;
    }
}
