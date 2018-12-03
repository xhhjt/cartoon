package com.zl.cartoon.server;

import com.ty.erp.entitys.entity.Book;
import com.zl.cartoon.config.CartoonConfig;
import com.zl.cartoon.dao.BookDao;
import com.zl.cartoon.entity.menu.SexEnum;
import com.zl.cartoon.entity.returnmodel.BookModel;
import com.zl.cartoon.util.NumberUtils;
import com.zl.cartoon.util.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
@Service
public class BookService {
    @Autowired
    BookDao bookDao;
    @Autowired
    CartoonConfig cartoonConfig;

    public List<BookModel> homeList() {
        List<Book> bookList = bookDao.homeList();
        List<BookModel> modelList = new ArrayList<>();
        for (Book book : bookList) {
            modelList.add(getModel(book));
        }

        return modelList;
    }

    public List<BookModel> books(String channel, int page, int pageSize) {
        List<BookModel> modelList = new ArrayList<>();
        HashMap params = RequestParam.getParam(page, pageSize);
        params.put("Sex", SexEnum.getSex(channel));
        List<Book> bookList = bookDao.books(params);
        for (Book book : bookList) {
            modelList.add(getModel(book));
        }
        return modelList;
    }

    private BookModel getModel(Book book) {
        BookModel model = new BookModel();
        model.setAuthor(book.getAuthor());
        model.setCategory(book.getType());
        model.setTitle(book.getTitle());
        model.setSourceUuid(book.getRowId() + "");
        model.setCover(cartoonConfig.getPicPath() + "" + book.getPic());
        model.setDescription(book.getDes());
        model.setTotalCount(NumberUtils.getWanZi(book.getAllCount()));
        return model;
    }
}
