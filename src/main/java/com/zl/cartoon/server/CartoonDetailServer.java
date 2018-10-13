package com.zl.cartoon.server;

import com.zl.cartoon.entity.requestmodel.GetIndexOrderModel;
import com.zl.cartoon.entity.returnmodel.*;
import com.zl.cartoon.util.JsonHelper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CartoonDetailServer {

    public CartoonDetailModel getCartoonDetailModel(long rowid) {
        CartoonDetailModel model = new CartoonDetailModel();
        model.setRowId(12L);
        model.setHidprice(0);
        model.setTitle("不错哦");
        model.setAuthor("zl");
        model.setVisitCount(1314);
        model.setDes("发现我老婆和朋友关系的那瞬间，与愤怒伴随而来的，是快感！！发现我老婆和朋友关系的那瞬间，与愤怒伴随而来的，是快感！！发现我老婆和朋友关系的那瞬间，与愤怒伴随而来的，是快感！！");
        model.setImage("http://img3.xmh222.com//uploadfiles/20180910/small/27494a1ddd9848148932124ab7ca39ae932.jpg");

        List<CartoonType> typeList = new ArrayList<>();
        CartoonType type1 = new CartoonType();
        type1.setRowid(123L);
        type1.setTitle("zl");
        CartoonType type2 = new CartoonType();
        type2.setRowid(123L);
        type2.setTitle("jxh");
        typeList.add(type1);
        typeList.add(type2);

        model.setTypeList(typeList);
        return model;
    }

    public List<GetIndexOrderResultModel> getGetIndexOrderBy(GetIndexOrderModel model) {
        List<GetIndexOrderResultModel> list = new ArrayList<>();

        for (int i = 0; i < model.getPageSize(); i++) {
            GetIndexOrderResultModel model1 = new GetIndexOrderResultModel();
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

    public List<GetIndexOrderResultModel> getAll(long CartoonRowId) {
        List<GetIndexOrderResultModel> list = new ArrayList<>();

        for (int i = 0; i < 10; i++) {
            GetIndexOrderResultModel model1 = new GetIndexOrderResultModel();
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

    public ChapterDetailModel getChapterDetailModel(long rowid) {
        ChapterDetailModel model = new ChapterDetailModel();
        model.setTitle("zl");
        model.setCatoonRowid(13L);
        model.setChapterRowid(14L);
        return model;
    }

    public ChapterImageListModel getChapterImageListModel(){
        ChapterImageListModel model=new ChapterImageListModel();
        model.setChapterid(1234L);
        model.setCoin(0);
        model.setCode(0);
        model.setIndex(0);
        model.setIndex(1);
        model.setMax(40);
        model.setUsercoin(0);
        model.setUrl("%2fCartoon%2fread%3fcartoonId%3d137%26chapterId%3d7245");
        List<ImageListModel> imageList=new ArrayList<>();
        ImageListModel model1=new ImageListModel();
        ImageListModel model2=new ImageListModel();
        ImageListModel model3=new ImageListModel();
        ImageListModel model4=new ImageListModel();
        model1.setU("http://img1.xmh222.com/img/1374589rl/72458009-1179994zu");
        model2.setU("http://img1.xmh222.com/img/1374589rl/72458009-1179994zu");
        model3.setU("http://img1.xmh222.com/img/1374589rl/72458009-1179994zu");
        model4.setU("http://img1.xmh222.com/img/1374589rl/72458009-1179994zu");
        imageList.add(model1);
        imageList.add(model2);
        imageList.add(model3);
        imageList.add(model4);
        model.setImglist(JsonHelper.writeValueAsString(imageList));
        return model;
    }
}
