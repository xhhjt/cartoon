package com.zl.cartoon.entity;

public class Result {
    private String msg;
    private int code;
    private Object data;

    public Result() {
        setCode(1);
        setMsg("");
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}
