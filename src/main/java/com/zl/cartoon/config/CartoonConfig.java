package com.zl.cartoon.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "cartoonconfig")
@PropertySource("classpath:cartoonconfig.properties")
public class CartoonConfig {
    private String domain;

    private String commonIP;

    private String picPath;

    public String getCommonIP() {
        return commonIP;
    }

    public void setCommonIP(String commonIP) {
        this.commonIP = commonIP;
    }

    public String getPicPath() {
        return picPath;
    }

    public void setPicPath(String picPath) {
        this.picPath = picPath;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }
}
