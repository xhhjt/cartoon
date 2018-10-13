package com.zl.cartoon.util;

import org.apache.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.annotate.JsonSerialize;
import org.codehaus.jackson.map.introspect.JacksonAnnotationIntrospector;
import org.codehaus.jackson.type.TypeReference;

import java.io.IOException;
import java.text.SimpleDateFormat;

public class JsonHelper {

    private static Logger logger = Logger.getLogger(JsonHelper.class);

    public static String writeValueAsString(Object o) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
//        mapper.setAnnotationIntrospector(new JacksonAnnotationIntrospector());
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        mapper.setDateFormat(formatter);
        try {
            return mapper.writeValueAsString(o);
        } catch (IOException e) {
            logger.error("json api序列化错误", e);
        }
        return null;
    }

    public static <T> T readObject(String json, Class<T> clazz) {
        ObjectMapper mapper = new ObjectMapper();
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        mapper.setDateFormat(formatter);
        mapper.disable(org.codehaus.jackson.map.DeserializationConfig.Feature.FAIL_ON_UNKNOWN_PROPERTIES);
        try {
            return mapper.readValue(json, clazz);
        } catch (IOException e) {
            logger.error("json api反序列化错误" + json, e);
        }
        return null;
    }


    //判断对象是否值相同
    public static <T> Boolean equals(Object src, Object desc) {
        try
        {
            return writeValueAsString(src).equals(writeValueAsString(desc));
        }
        catch (Exception ex)
        {return false;}
    }
}
