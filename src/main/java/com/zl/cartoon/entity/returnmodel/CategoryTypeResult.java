package com.zl.cartoon.entity.returnmodel;

import java.util.List;

public class CategoryTypeResult extends BaseResult {
    private List<CategoryTypeModel> params;

    public List<CategoryTypeModel> getParams() {
        return params;
    }

    public void setParams(List<CategoryTypeModel> params) {
        this.params = params;
    }
}
