package com.zl.cartoon.server;

import com.ty.erp.entitys.entity.LastRead;
import com.ty.erp.utils.util.Snowflake.FactoryIdWorker;
import com.zl.cartoon.dao.LastReadDao;
import com.zl.cartoon.entity.CurrentUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
@Service
public class LastReadService {

    @Autowired
    LastReadDao dao;

    public void save(CurrentUser user, Long bookRowId, Long bookDetailRowId) {
        LastRead read = dao.getLastRead(user.getRowId());
        if (read == null) {
            read = new LastRead();
            read.setRowId(FactoryIdWorker.NextId());
            read.setUserRowId(user.getRowId());
            read.setBookRowId(bookRowId);
            read.setBookDetailRowId(bookDetailRowId);
            dao.save(read);
        } else {
            read.setBookRowId(bookRowId);
            read.setBookDetailRowId(bookDetailRowId);
            dao.update(read);
        }
    }

}
