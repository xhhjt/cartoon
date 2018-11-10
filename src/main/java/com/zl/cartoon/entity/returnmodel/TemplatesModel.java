package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class TemplatesModel {
    private List<BookModel> sources;
    private String title;
    private String templateId;
    private int type;

    public List<BookModel> getSources() {
        return sources;
    }

    public void setSources(List<BookModel> sources) {
        this.sources = sources;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTemplateId() {
        return templateId;
    }

    public void setTemplateId(String templateId) {
        this.templateId = templateId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }
}
