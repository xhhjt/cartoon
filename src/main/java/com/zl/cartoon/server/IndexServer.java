package com.zl.cartoon.server;

import com.ty.erp.entitys.entity.Cartoon;
import com.zl.cartoon.dao.CartoonDao;
import com.zl.cartoon.entity.returnmodel.CartoonModel;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
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

        Map map = new HashMap();
        map.put("wel", getCartoons(wel, 6));
        map.put("top", getCartoonsTop(wel, 10));
        map.put("wyuZhaiFuLiel", getCartoons(wel, 3));
        map.put("lastUpdate", getCartoons(wel, 3));
        map.put("shendukongju", getCartoons(wel, 6));
        return map;
    }

    public List<CartoonModel> getCartoons(List<Cartoon> cartoons, int length) {
        List<CartoonModel> cartoonList = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            CartoonModel model = new CartoonModel();
            BeanUtils.copyProperties(cartoons.get(0), model);
            model.setDetailUrl("cartoondetail/" + model.getRowId());
            model.setAuthor("作者:" + model.getAuthor());
            model.setPic("/assets/picture/8f46d40d2e7b434da01b7ad9074b553c.gif");
            cartoonList.add(model);
        }

        return cartoonList;
    }

    public List<CartoonModel> getCartoonsTop(List<Cartoon> cartoons, int length) {
        List<CartoonModel> cartoonList = new ArrayList<>();
        for (int i = 0; i < length; i++) {
            CartoonModel model = new CartoonModel();
            BeanUtils.copyProperties(cartoons.get(0), model);
            model.setDetailUrl("cartoondetail/" + model.getRowId());
            model.setAuthor("作者:" + model.getAuthor());
            model.setPic("/assets/picture/8f46d40d2e7b434da01b7ad9074b553c.gif");
            model.setSortNum(1);
            model.setVisitCount(13);
            model.setSortPic("/assets/picture/8f46d40d2e7b434da01b7ad9074b553c.gif");
            cartoonList.add(model);
        }

        return cartoonList;
    }
}
