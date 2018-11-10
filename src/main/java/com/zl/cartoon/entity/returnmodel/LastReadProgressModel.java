package com.zl.cartoon.entity.returnmodel;

public class LastReadProgressModel {

    /**
     * info : 上次看到《至尊帝君》，点击继续
     * articleUuid : np_JS1jf58TiHP_-DMgK2t4xEjac6mpPncnYynFRdl3qvlVJQ
     * sourceUuid : np_c3sELplIjSOoqTogJm0vyUOIc6CpOCUmYnnJRYgiq649cy4EKQ
     */

    private String info;
    private String articleUuid;
    private String sourceUuid;

    public String getInfo() {
        return info;
    }

    public void setInfo(String info) {
        this.info = info;
    }

    public String getArticleUuid() {
        return articleUuid;
    }

    public void setArticleUuid(String articleUuid) {
        this.articleUuid = articleUuid;
    }

    public String getSourceUuid() {
        return sourceUuid;
    }

    public void setSourceUuid(String sourceUuid) {
        this.sourceUuid = sourceUuid;
    }
}
