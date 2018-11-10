package com.zl.cartoon.entity.returnmodel;

public class TradePendingResult extends BaseResult {
    /**
     * msg : 成功
     * hongbao : 0
     * balance : 0
     * autoPurchase : -1
     */

    private String hongbao;
    private String balance;
    private int autoPurchase;

    public TradePendingResult() {
    }

    public String getHongbao() {
        return hongbao;
    }

    public void setHongbao(String hongbao) {
        this.hongbao = hongbao;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public int getAutoPurchase() {
        return autoPurchase;
    }

    public void setAutoPurchase(int autoPurchase) {
        this.autoPurchase = autoPurchase;
    }
}
