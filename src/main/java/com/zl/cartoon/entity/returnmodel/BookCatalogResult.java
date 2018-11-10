package com.zl.cartoon.entity.returnmodel;

public class BookCatalogResult extends BaseResult {
    private CategorysModel categorys;

    public CategorysModel getCategorys() {
        return categorys;
    }

    public void setCategorys(CategorysModel categorys) {
        this.categorys = categorys;
    }
}
