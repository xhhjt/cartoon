package com.zl.cartoon.entity.menu;

public enum SerialMenu {
    SERIAL_ALL(0,"所有"),
    SERIAL_ING(1,"连载中"),
    SERIAL_END(2,"已完成");

    private int type;
    private String des;

    SerialMenu(int type, String des) {
        this.type = type;
        this.des = des;
    }
}
