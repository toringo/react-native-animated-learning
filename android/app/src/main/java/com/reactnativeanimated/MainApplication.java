package com.reactnativeanimated;
import android.app.Application;

import com.example.trackshare.TrackShare;
import com.example.trackshare.TrackShareReactPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.soloader.SoLoader;
import com.reactnativeanimated.CustomToastPackage;
import com.umeng.commonsdk.UMConfigure;

import java.util.Arrays;
import java.util.List;
import org.devio.rn.splashscreen.SplashScreenReactPackage;



public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    protected String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(new MainReactPackage(),
          new CodePush("QA2P6ML888DCW4b01uZtDvqn0Lqkb721a94f-71a3-4b9e-89ab-eb937371a75c", getApplicationContext(), BuildConfig.DEBUG),
          new SplashScreenReactPackage(), new RNCWebViewPackage(), new VectorIconsPackage(),
          new RNGestureHandlerPackage(), new CustomToastPackage(), new TrackShareReactPackage());
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    TrackShare.init(this, "5ca7525c3fc19598e1000960", "official", UMConfigure.DEVICE_TYPE_PHONE, null);
  }
}
