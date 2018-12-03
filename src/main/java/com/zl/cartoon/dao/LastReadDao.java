package com.zl.cartoon.dao;

import com.ty.erp.entitys.entity.LastRead;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
@Repository
public interface LastReadDao {
    LastRead Get(@Param("BookDetailRowId") long BookDetailRowId, @Param("UserRowId") Long UserRowId);

    void save(LastRead read);

    void update(LastRead read);

    LastRead getLastRead(@Param("userRowid") long userRowId);

}
