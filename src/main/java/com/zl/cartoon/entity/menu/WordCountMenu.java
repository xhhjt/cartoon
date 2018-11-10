package com.zl.cartoon.entity.menu;

public enum WordCountMenu {
    ALL(0, "全部"),
    SANSHI(1, "30w以下"),
    SANWUSHI(2, "30w-50w"),
    WUYIBAI(3, "50w-100w"),
    YIBAILIANGBAI(3, "100w-200w"),
    LIANGBAI(5, "200w以上");
    private int type;
    private String desc;

    WordCountMenu(int type, String desc) {
        this.type = type;
        this.desc = desc;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }
}
