package com.zl.cartoon.server;

import com.ty.erp.entitys.entity.Cartoon;
import com.zl.cartoon.dao.CartoonDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IndexServer {
    @Autowired
    CartoonDao dao;

    public Object getIndexDate() {

        List<Cartoon> wel = dao.welcome();
        List<Cartoon> top10 = dao.top10();
        List<Cartoon> yuZhaiFuLi = dao.yuZhaiFuLi();
        List<Cartoon> lastUpdate = dao.lastUpdate();

        Map map=new HashMap();
        map.put("wel",wel);
        map.put("top10",top10);
        map.put("wyuZhaiFuLiel",yuZhaiFuLi);
        map.put("lastUpdate",lastUpdate);
        return map;
    }
}
