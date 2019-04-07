package com.example.trackshare;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build.VERSION_CODES;
import com.umeng.commonsdk.UMConfigure;


public class TrackShare {
    /**
     * 注意: 即使您已经在AndroidManifest.xml中配置过appkey和channel值，
     * 也需要在App代码中调用初始化接口（如需要使用AndroidManifest.xml中配置好的appkey和channel值，UMConfigure
     * .init调用中appkey和channel参数请置为null）。
     *
     * @param context
     */
    public static void init(Context context, String appkey, String channel, int type, String secret){
        initRN("react-native","2.0");
        UMConfigure.init(context,appkey,channel,type,secret);
        //接口一共五个参数，其中第一个参数为Context，第二个参数为友盟Appkey，第三个参数为channel，第四个参数为应用类型（手机或平板），第五个参数为push的secret（如果没有使用push，可以为空）
//        UMConfigure.init(context, "5ca7525c3fc19598e1000960", "official", UMConfigure.DEVICE_TYPE_PHONE, null);
//        启用log
        UMConfigure.setLogEnabled(BuildConfig.DEBUG);

    }

    @TargetApi(VERSION_CODES.KITKAT)
    private static void initRN(String v, String t){
        Method method = null;
        try {
            Class<?> config = Class.forName("com.umeng.commonsdk.UMConfigure");
            method = config.getDeclaredMethod("setWraperType", String.class, String.class);
            method.setAccessible(true);
            method.invoke(null, v,t);
        } catch (NoSuchMethodException | InvocationTargetException | IllegalAccessException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
