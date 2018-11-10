package com.zl.cartoon.controoler;

import com.zl.cartoon.entity.requestmodel.ConfirmModel;
import com.zl.cartoon.entity.requestmodel.GetMessageModel;
import com.zl.cartoon.entity.returnmodel.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Controller
public class PayController {

    @RequestMapping(value = "pay.do")
    public String pay(@RequestParam(value = "sourceUuid", required = false) String sourceUuid) {
        return "redirect:/recharge/pay.do";
    }

    @RequestMapping(value = "recharge/pay.do")
    public String rechargePay(@RequestParam(value = "userId", required = false) String userId,
                              @RequestParam(value = "time", required = false) String time,
                              @RequestParam(value = "agentId", required = false) String agentId,
                              @RequestParam(value = "key", required = false) String key,
                              @RequestParam(value = "sign", required = false) String sign,
                              @RequestParam(value = "linkId", required = false) String linkId,
                              @RequestParam(value = "siteId", required = false) String siteId,
                              @RequestParam(value = "env", required = false) String env,
                              @RequestParam(value = "site", required = false) String site,
                              @RequestParam(value = "type", required = false) String type,
                              @RequestParam(value = "shareUrl", required = false) String shareUrl) {
        return "pay";
    }

    @RequestMapping(value = "/share.json", method = RequestMethod.GET)
    @ResponseBody
    public ShareResult share(@RequestParam(value = "shareUrl", required = false) String shareUrl,
                             @RequestParam(value = "siteId", required = false) String siteId) {
        ShareResult result = new ShareResult();
        ShareConfig config = new ShareConfig();
        config.setAppId("wxdeb7b8aab7d08c22");
        config.setNonceStr("gMNWVlUvDf");
        config.setSignature("dfea3934d134774861d88ac230a08847d0fe03fb");
        config.setTimestamp((new Date()).getTime());
        result.setShareAble(true);
        result.setConfig(config);
        return result;
    }

    @RequestMapping(value = "/banner/cors/getBanners.json", method = RequestMethod.GET)
    @ResponseBody
    public BannerResult getBanners(@RequestParam(value = "location", required = false) String location,
                                   @RequestParam(value = "siteId", required = false) String siteId) {
        BannerResult result = new BannerResult();
        result.setBannerList(new ArrayList<>());
        return result;
    }

    @RequestMapping(value = "/cors/user/baseinfo.json", method = RequestMethod.GET)
    @ResponseBody
    public BaseInfoResult baseInfo(@RequestParam(value = "uid", required = false) String uid) {
        BaseInfoResult result = new BaseInfoResult();
        UserModel userModel = new UserModel();
        userModel.setAgentId("0");
        userModel.setIp("122.238.121.65");
        userModel.setNickname("浪浪爸比");
        userModel.setSite("夜潇潇");
        userModel.setSiteId("5062");
        userModel.setUidForQiyu("np_Iy1sKs5H2XQ");
        result.setUser(userModel);
        return result;
    }

    @RequestMapping(value = "user/baseinfo.json", method = RequestMethod.GET)
    @ResponseBody
    public BaseInfoResult baseInfo1() {
        BaseInfoResult result = new BaseInfoResult();
        UserModel userModel = new UserModel();
        userModel.setAgentId("0");
        userModel.setIp("122.238.121.65");
        userModel.setNickname("浪浪爸比");
        userModel.setSite("夜潇潇");
        userModel.setSiteId("5062");
        userModel.setUidForQiyu("np_Iy1sKs5H2XQ");
        result.setUser(userModel);
        return result;
    }

    @RequestMapping(value = "banner/cors/getCustomer.json", method = RequestMethod.GET)
    @ResponseBody
    public GetCustomerResult getCustomer(@RequestParam(value = "siteId", required = false) String siteId) {
        GetCustomerResult result = new GetCustomerResult();
        GetCustomerModel model = new GetCustomerModel();
        model.setContactName("");
        model.setQrCodeUrl("");
        model.setWeChat("");
        result.setData(model);
        return result;
    }

    @RequestMapping(value = "recharge/list.json", method = RequestMethod.GET)
    @ResponseBody
    public RechargeResult rechargeList() {
        RechargeResult result = new RechargeResult();
        result.setCode(200);
        RechargeModel model = new RechargeModel();
        model.setDefaultRechargeType("WX_JSAPI");
        model.setHongbaoBalance(0);
        model.setVmBalance(0);
        model.setSite("WX_JSAPI");
        model.setVipExpireTime(-1);

        List<RechargeListModel> rechargeProductMap = new ArrayList<>();
        for (int i = 0; i < 6; i++) {
            RechargeListModel model1 = new RechargeListModel();
            model1.setPrice(29);
            model1.setVm(2900);
            model1.setHongbao(0);
            model1.setHongbaoType(0);
            model1.setSelect(false);
            model1.setConfigId(2001);
            model1.setProductType(0);
            model1.setProductAmount(0);
            model1.setDefaultRecharge(1);
            model1.setDefaultActivity(0);
            model1.setCouponId("zl");
            model1.setDiscount(3);
            model1.setIconUrl("https://easyreadfs.nosdn.127.net/nfb.c439790b626440fc8a2d70bfdb28e065.png");
            model1.setExpiring(false);
            rechargeProductMap.add(model1);
        }
        model.setRechargeProductMap(rechargeProductMap);
        result.setData(model);
        return result;
    }

//    @RequestMapping(value = "getMessage.json", method = RequestMethod.POST)
//    @ResponseBody
//    public GetMessageResult getMessage(@RequestBody GetMessageModel model) {
//        GetMessageResult result = new GetMessageResult();
//        result.setMessages(new ArrayList());
//        return result;
//    }


    @RequestMapping(value = "getMessage.json", method = RequestMethod.POST)
    @ResponseBody
    public GetMessageResult getMessage(HttpServletRequest request) {
        GetMessageResult result = new GetMessageResult();
        result.setCode(200);
        result.setMessages(new ArrayList());
        return result;
    }

//    @RequestMapping(value = "recharge/confirm.json", method = RequestMethod.POST)
//    @ResponseBody
//    public RechargeConfirmResult confirm(@RequestBody ConfirmModel model) {
//        RechargeConfirmResult result = new RechargeConfirmResult();
//        result.setCode(200);
//        RechargeConfirmModel model1 = new RechargeConfirmModel();
//        model1.setTimeStamp("1539763348");
//        model1.setPackageX("1539763348");
//        model1.setAppId("1539763348");
//        model1.setSignType("1539763348");
//        model1.setNonceStr("1539763348");
//        model1.setRechargeUuid("1539763348");
//        result.setData(model1);
//        return result;
//    }

    // private long userId;
    //    private long time;
    //    private long agentId;
    //    private String key;
    //    private String sign;
    //    private long linkId;
    //    private long siteId;
    //    private int type;
    //    private int amount;
    //    private long configId;
    //    private long couponId;
    //    private int discount;
    //    private int hongbao;
    //    private int index;

//    @RequestMapping(value = "recharge/confirm.json", method = RequestMethod.POST)
//    @ResponseBody
//    public RechargeConfirmResult confirm(@RequestParam(value = "userId",required = false)long userId,
//                                         @RequestParam(value = "time",required = false)long time,
//                                         @RequestParam(value = "key",required = false)String key,
//                                         @RequestParam(value = "sign",required = false)String sign,
//                                         @RequestParam(value = "linkId",required = false)long linkId,
//                                         @RequestParam(value = "type",required = false)int type,
//                                         @RequestParam(value = "amount",required = false)int amount,
//                                         @RequestParam(value = "configId",required = false)long configId,
//                                         @RequestParam(value = "couponId",required = false)long couponId,
//                                         @RequestParam(value = "discount",required = false)int discount,
//                                         @RequestParam(value = "hongbao",required = false)int hongbao,
//                                         @RequestParam(value = "index",required = false)int index) {
//        RechargeConfirmResult result = new RechargeConfirmResult();
//        result.setCode(200);
//        RechargeConfirmModel model1 = new RechargeConfirmModel();
//        model1.setTimeStamp("1539763348");
//        model1.setPackageX("1539763348");
//        model1.setAppId("1539763348");
//        model1.setSignType("1539763348");
//        model1.setNonceStr("1539763348");
//        model1.setRechargeUuid("1539763348");
//        result.setData(model1);
//        return result;
//    }

    @RequestMapping(value = "recharge/confirm.json", method = RequestMethod.POST)
    @ResponseBody
    public RechargeConfirmResult confirm(HttpServletRequest request) {
        RechargeConfirmResult result = new RechargeConfirmResult();
        result.setCode(200);
        RechargeConfirmModel model1 = new RechargeConfirmModel();
        model1.setTimeStamp("1539763348");
        model1.setPackageX("1539763348");
        model1.setAppId("1539763348");
        model1.setSignType("1539763348");
        model1.setNonceStr("1539763348");
        model1.setRechargeUuid("1539763348");
        result.setData(model1);
        return result;
    }
}
