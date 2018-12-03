package com.zl.cartoon.util;

import java.text.DecimalFormat;

/**
 * @author HP
 * @date yyyy/MM/dd
 */
public class NumberUtils {
    private static final DecimalFormat dec = new DecimalFormat("#.00");

    public static String getWanZi(int count) {
        return dec.format((count / 1000))+"万";
    }
}
