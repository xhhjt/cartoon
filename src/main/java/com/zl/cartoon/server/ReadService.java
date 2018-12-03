package com.zl.cartoon.server;

import com.zl.cartoon.dao.LastReadDao;
import com.zl.cartoon.entity.CurrentUser;
import com.zl.cartoon.entity.returnmodel.BookContentResult;
import com.zl.cartoon.util.ConvertHelp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
@Service
public class ReadService {
    @Autowired
    LastReadService lastReadService;

    @Transactional(propagation = Propagation.REQUIRED )
    public BookContentResult content(CurrentUser user, String sourceUuid, String articleUuid, int forceFollow, int isContinue) {
        BookContentResult result = new BookContentResult();
        lastReadService.save(user, ConvertHelp.ToLong(sourceUuid),ConvertHelp.ToLong(articleUuid));

        return result;
    }
}
