package com.zl.cartoon.entity.returnmodel;

public class BaseResult {
    private int code;
    private String msg;

    public BaseResult() {
        setCode(0);
        setMsg("success");
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
}
