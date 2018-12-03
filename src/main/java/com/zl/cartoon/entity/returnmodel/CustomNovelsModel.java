package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class CustomNovelsModel {
    private List<NewBookModel> novels;
    private String name;
    private String description;
    private String type;

    public List<NewBookModel> getNovels() {
        return novels;
    }

    public void setNovels(List<NewBookModel> novels) {
        this.novels = novels;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
