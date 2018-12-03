package com.zl.cartoon.dao;

import com.ty.erp.entitys.entity.Book;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
@Repository
public interface BookDao {
    public List<Book> homeList();

    public List<Book> books(@Param("map")HashMap params);
}
