package com.zl.cartoon.entity.returnmodel;

public class PopupActivityResult extends BaseResult {
    public PopupActivityResult() {
        super();
    }

    private ActivityModel activity;

    public ActivityModel getActivity() {
        return activity;
    }

    public void setActivity(ActivityModel activity) {
        this.activity = activity;
    }
}
