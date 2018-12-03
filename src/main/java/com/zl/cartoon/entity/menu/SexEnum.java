package com.zl.cartoon.entity.menu;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
public enum SexEnum {

    MALE(1, "male", "男"),
    FEMALE(2, "female", "女"),
    PUBLISH(3, "publish", "出版，其他");

    private int sex;
    private String code;
    private String des;

    SexEnum(int sex, String code, String des) {
        this.sex = sex;
        this.code = code;
        this.des = des;
    }

    public static SexEnum getSexMeunByCode(String code) {
        SexEnum[] sexMeuns = SexEnum.values();
        for (SexEnum meun : sexMeuns) {
            if (meun.getCode().equals(code)) {
                return meun;
            }
        }
        return null;
    }

    public static int getSex(String code) {
        SexEnum meun = getSexMeunByCode(code);
        if (meun != null) {
            return meun.getSex();
        }
        return PUBLISH.getSex();
    }

    public int getSex() {
        return sex;
    }

    public void setSex(int sex) {
        this.sex = sex;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getDes() {
        return des;
    }

    public void setDes(String des) {
        this.des = des;
    }
}
