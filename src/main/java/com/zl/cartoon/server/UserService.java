package com.zl.cartoon.server;

import com.ty.erp.entitys.entity.LastRead;
import com.zl.cartoon.dao.LastReadDao;
import com.zl.cartoon.entity.returnmodel.LastReadProgressModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
@Service
public class UserService {
    @Autowired
    LastReadDao lastReadDao;

    public LastReadProgressModel getLastRead(long userRowId) {
        LastRead read = lastReadDao.getLastRead(userRowId);
        LastReadProgressModel model = new LastReadProgressModel();
        if (read != null) {
            model.setInfo(read.getTitle());
            model.setSourceUuid(read.getBookRowId() + "");
            model.setArticleUuid(read.getBookDetailRowId() + "");
        }
        return model;
    }
}
