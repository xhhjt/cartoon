package com.zl.cartoon.entity.returnmodel;

public class BaseInfoResult extends BaseResult {
    private UserModel user;

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }
}
