package com.zl.cartoon.util;

import java.util.HashMap;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
public class RequestParam {
    public static HashMap getParam(int page, int pageSize) {
        HashMap map = new HashMap();
        if (page > 0 && pageSize > 0) {
            int start=(page-1)*pageSize+1;
            int end=page*pageSize;
            map.put("start",start);
            map.put("end",end);
        }
        return map;
    }
}
