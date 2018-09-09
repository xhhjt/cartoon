package com.zl.cartoon.dao;

import com.ty.erp.entitys.entity.Cartoon;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartoonDao {
    List<Cartoon> getAll();

    List<Cartoon> welcome();

    List<Cartoon> top10();

    List<Cartoon> yuZhaiFuLi();

    List<Cartoon> lastUpdate();
}
