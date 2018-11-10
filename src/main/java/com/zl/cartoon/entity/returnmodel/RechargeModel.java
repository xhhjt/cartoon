package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class RechargeModel {

    /**
     * site : 夜潇潇
     * vipExpireTime : -1
     * vmBalance : 0
     * hongbaoBalance : 0
     * defaultRechargeType : WX_JSAPI
     */

    private String site;
    private int vipExpireTime;
    private int vmBalance;
    private int hongbaoBalance;
    private String defaultRechargeType;
    private List<RechargeListModel> rechargeProductMap;

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public int getVipExpireTime() {
        return vipExpireTime;
    }

    public void setVipExpireTime(int vipExpireTime) {
        this.vipExpireTime = vipExpireTime;
    }

    public int getVmBalance() {
        return vmBalance;
    }

    public void setVmBalance(int vmBalance) {
        this.vmBalance = vmBalance;
    }

    public int getHongbaoBalance() {
        return hongbaoBalance;
    }

    public void setHongbaoBalance(int hongbaoBalance) {
        this.hongbaoBalance = hongbaoBalance;
    }

    public String getDefaultRechargeType() {
        return defaultRechargeType;
    }

    public void setDefaultRechargeType(String defaultRechargeType) {
        this.defaultRechargeType = defaultRechargeType;
    }

    public List<RechargeListModel> getRechargeProductMap() {
        return rechargeProductMap;
    }

    public void setRechargeProductMap(List<RechargeListModel> rechargeProductMap) {
        this.rechargeProductMap = rechargeProductMap;
    }
}
