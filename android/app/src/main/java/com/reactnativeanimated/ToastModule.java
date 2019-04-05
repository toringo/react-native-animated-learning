// ToastModule.java

package com.reactnativeanimated;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;

import java.util.HashMap;

public class ToastModule extends ReactContextBaseJavaModule {

  private static final String DURATION_SHORT_KEY = "SHORT";
  private static final String DURATION_LONG_KEY = "LONG";

  @Override
  public String getName() {
    return "ToastExample";
  }

  @Override
  public Map<String, Object> getConstants() {
    final Map<String, Object> constants = new HashMap<>();
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
    return constants;
  }

  private static final String E_FUNCTION_ERROR = "E_FUNCTION_ERROR";

  @ReactMethod
  public void show(String message, int duration) {
    // try {
    Toast.makeText(getReactApplicationContext(), message, duration).show();
    String parma1 = message;
    String parma2 = "收到回调信息";
    // successCallback.invoke(parma1, parma2);
    // return promise.resolve(parma2);
    // } catch (IllegalViewOperationException e) { // 回调失败，返回错误信息
    // errorCallback.invoke(e.getMessage());
    // return promise.reject(E_FUNCTION_ERROR, e);
    // }
  }

  public ToastModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }
}