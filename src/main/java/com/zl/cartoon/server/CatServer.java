package com.zl.cartoon.server;

import com.zl.cartoon.entity.returnmodel.TypeModel;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CatServer {
    public List<TypeModel> getTypeList() {
        List<TypeModel> list=new ArrayList<>();
        TypeModel model1=new TypeModel();
        model1.setRowid(1L);
        model1.setTitle("zl1");

        TypeModel model2=new TypeModel();
        model2.setRowid(2L);
        model2.setTitle("zl1");


        TypeModel model3=new TypeModel();
        model3.setRowid(3L);
        model3.setTitle("zl1");

        list.add(model1);
        list.add(model2);
        list.add(model3);
        return list;
    }
}
