package com.zl.cartoon.entity.menu;

public enum CateTypeMenu {
    SERIAL("serial", "连载"),
    WORDCOUNT("wordCount", "字数"),
    CATEGORY("category", "类型");

    private String type;
    private String des;

    CateTypeMenu(String type, String des) {
        this.type = type;
        this.des = des;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }

    public static CateTypeMenu getCateTypeMenuByType(String type) {
        CateTypeMenu[] list = CateTypeMenu.values();
        for (CateTypeMenu typeMenu : list) {
            if (typeMenu.type.equals(type))
                return typeMenu;
        }
        return CATEGORY;
    }
}
