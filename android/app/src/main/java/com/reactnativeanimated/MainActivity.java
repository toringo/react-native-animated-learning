package com.reactnativeanimated;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.umeng.analytics.MobclickAgent;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "reactNativeAnimated";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // SplashScreen.show(this); // here
    super.onCreate(savedInstanceState);
    // 以及发送间隔
    MobclickAgent.setSessionContinueMillis(1000);
    // 统计的场景
    // MobclickAgent.setScenarioType(this,
    // MobclickAgent.EScenarioType.E_DUM_NORMAL);
    // ShareModule.initSocialSDK(this);
  }

  public void onResume() {
    super.onResume();
    MobclickAgent.onResume(this);
  }

  public void onPause() {
    super.onPause();
    MobclickAgent.onPause(this);
  }
}
