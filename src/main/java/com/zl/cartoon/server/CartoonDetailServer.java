package com.zl.cartoon.server;

import com.zl.cartoon.entity.requestmodel.GetIndexOrderModel;
import com.zl.cartoon.entity.returnmodel.GetIndexOrderResultModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CartoonDetailServer {

    public List<GetIndexOrderResultModel> getGetIndexOrderBy(GetIndexOrderModel model){
        List<GetIndexOrderResultModel> list=new ArrayList<>();

        for (int i=0;i<model.getPageSize();i++){
            GetIndexOrderResultModel model1=new GetIndexOrderResultModel();
            model1.setCartoonId(123L);
            model1.setChapterStatus(1);
            model1.setId(123L);
            model1.setImgUrl("http://img1.xmh222.com//cartoonchaps/137/7245.jpg");
            model1.setIndex(i);
            model1.setName("好骚啊");
            model1.setAddTime(new Date());
            list.add(model1);
        }
        return list;
    }
}
