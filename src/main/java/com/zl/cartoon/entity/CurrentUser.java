package com.zl.cartoon.entity;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
public class CurrentUser {
    private long RowId;
    private String Sex;
    private String UserName;

    public long getRowId() {
        return RowId;
    }

    public void setRowId(long rowId) {
        RowId = rowId;
    }

    public String getSex() {
        return Sex;
    }

    public void setSex(String sex) {
        Sex = sex;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }
}
