package com.zl.cartoon.entity.returnmodel;

public class LastReadResult extends BaseResult{
    public LastReadResult() {
    }

    private LastReadProgressModel progress;

    public LastReadProgressModel getProgress() {
        return progress;
    }

    public void setProgress(LastReadProgressModel progress) {
        this.progress = progress;
    }
}
