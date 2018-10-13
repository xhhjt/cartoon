package com.zl.cartoon.server;

import cfca.org.bouncycastle.jce.provider.N;
import com.ty.erp.entitys.entity.Cartoon;
import com.zl.cartoon.config.CartoonConfig;
import com.zl.cartoon.dao.CartoonDao;
import com.zl.cartoon.entity.returnmodel.CartoonModel;
import com.zl.cartoon.entity.returnmodel.RecommendDetailModel;
import com.zl.cartoon.entity.returnmodel.RecommendModel;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class IndexServer {
    @Autowired
    CartoonDao dao;
    @Autowired
    CartoonConfig cartoonConfig;

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
        cartoons=dao.getAll();
        for (int i = 0; i < length; i++) {
            CartoonModel model = new CartoonModel();
            BeanUtils.copyProperties(cartoons.get(0), model);
            model.setDetailUrl("cartoondetail/" + model.getRowId());
            model.setAuthor("作者:" + model.getAuthor());
            model.setPic(cartoonConfig.getPicPath()+model.getPic());
            cartoonList.add(model);
        }

        return cartoonList;
    }

    public List<CartoonModel> getCartoonsTop(List<Cartoon> cartoons, int length) {
        List<CartoonModel> cartoonList = new ArrayList<>();
        cartoons= dao.getAll();
        for (int i = 0; i < length; i++) {
            CartoonModel model = new CartoonModel();
            BeanUtils.copyProperties(cartoons.get(0), model);
            model.setDetailUrl("cartoondetail/" + model.getRowId());
            model.setAuthor("作者:" + model.getAuthor());
            model.setPic(cartoonConfig.getPicPath()+model.getPic());
            model.setSortNum(1);
            model.setVisitCount(model.getVisitCount());
            model.setSortPic("/assets/picture/top_logo_2.png");
            model.setLastTitle("nidaye");
            cartoonList.add(model);
        }

        return cartoonList;
    }


    public List<RecommendModel> getRecommend() {
        List<RecommendModel> list = new ArrayList<>();
        RecommendModel jingping = new RecommendModel();
        RecommendModel zuixinshangjia = new RecommendModel();
        RecommendModel yuzhaifuli = new RecommendModel();
        RecommendModel zuixingengxin = new RecommendModel();
        RecommendModel kongbulingyi = new RecommendModel();
        RecommendModel youmoqingsong = new RecommendModel();
        RecommendModel sanbenmianfei = new RecommendModel();
        list.add(jingping);
        list.add(zuixinshangjia);
        list.add(yuzhaifuli);
        list.add(zuixingengxin);
        list.add(zuixingengxin);
        list.add(kongbulingyi);
        list.add(youmoqingsong);
        list.add(sanbenmianfei);

        setRecommendModel(jingping, false, "", "最新上架", 0, setRecommendDetailModelList(6, 0));
        setRecommendModel(zuixinshangjia, false, "", "最新上架", 1, setRecommendDetailModelList(6, 1));
        setRecommendModel(yuzhaifuli, false, "", "最新上架", 1, setRecommendDetailModelList(6, 1));
        setRecommendModel(zuixingengxin, false, "", "最新上架", 1, setRecommendDetailModelList(6, 1));
        setRecommendModel(kongbulingyi, false, "", "最新上架", 1, setRecommendDetailModelList(6, 1));
        setRecommendModel(youmoqingsong, false, "", "最新上架", 1, setRecommendDetailModelList(6, 1));
        setRecommendModel(sanbenmianfei, false, "", "最新上架", 1, setRecommendDetailModelList(3, 1));

        return list;
    }

    private void setRecommendModel(RecommendModel model, boolean isFree, String linkUrl, String Name, int rtype, List<RecommendDetailModel> list) {
        model.setIsfree(isFree);
        model.setLinkurl(linkUrl);
        model.setList(list);
        model.setName(Name);
        model.setRtype(rtype);
    }

    public RecommendModel jingping() {
        RecommendModel jingping = new RecommendModel();
        setRecommendModel(jingping, false, "", "最新上架", 1, setRecommendDetailModelList(6, 0));
        return jingping;
    }

    public List<RecommendDetailModel> setRecommendDetailModelList(int Length, int type) {
        List<RecommendDetailModel> modelList = new ArrayList<>();
        Cartoon cartoon=dao.getAll().get(0);
        for (int i = 0; i < Length; i++) {
            RecommendDetailModel model = new RecommendDetailModel();
            model.setAuthor(cartoon.getAuthor());
            model.setCname("");
            model.setContent(cartoon.getDes());
            if (type == 0) {
                model.setImgUrl(cartoonConfig.getPicPath()+cartoon.getPic());
            } else {
                model.setImgUrl(cartoonConfig.getPicPath()+cartoon.getPic());
            }
            model.setLinkUrl("/cartoondetail/"+cartoon.getRowId());
            model.setSummary(cartoon.getDes());
            model.setTitle(cartoon.getTitle());
            model.setUpdateStatus(0);
            model.setUpstr("连在中国");

            modelList.add(model);
        }

        return modelList;
    }



}
