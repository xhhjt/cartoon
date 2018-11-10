package com.zl.cartoon.entity.returnmodel;

public class GetCustomerModel {

    /**
     * contactName :
     * qrCodeUrl :
     * weChat :
     */

    private String contactName;
    private String qrCodeUrl;
    private String weChat;

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getQrCodeUrl() {
        return qrCodeUrl;
    }

    public void setQrCodeUrl(String qrCodeUrl) {
        this.qrCodeUrl = qrCodeUrl;
    }

    public String getWeChat() {
        return weChat;
    }

    public void setWeChat(String weChat) {
        this.weChat = weChat;
    }
}
