package com.zl.cartoon.entity.returnmodel;

public class BookModel {

    /**
     * category : 官场
     * serial : true
     * description : 这是一个部队转业军官的官场人生，有刀光剑影，也有旖旎柔情，看似平坦的官路实则步步杀机，陷阱遍布，一不小心就会陷入万劫不复的境地。
     * totalCount : 413.6万
     * author : 御史大夫
     * sourceUuid : np_dC0_fpkQiyKvqmgjKz8pmUjaIa78ayMua3_JRd0lr_xVJQ
     * title : 特种官路
     * cover : https://easyreadfs.nosdn.127.net/wifqb3FYqDtDHwm9DsFS0g==/8796093022735942106
     */

    private String category;
    private boolean serial;
    private String description;
    private String totalCount;
    private String author;
    private String sourceUuid;
    private String title;
    private String cover;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public boolean isSerial() {
        return serial;
    }

    public void setSerial(boolean serial) {
        this.serial = serial;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(String totalCount) {
        this.totalCount = totalCount;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSourceUuid() {
        return sourceUuid;
    }

    public void setSourceUuid(String sourceUuid) {
        this.sourceUuid = sourceUuid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }
}
