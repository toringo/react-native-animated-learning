import React, { PureComponent } from 'react';
import { View, Easing, Platform, Animated, AppState } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import {
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import Animate from './animte';
import Swiper from './Swiperflatlist';
import Main from './Main';
import StatusGradient from './StatusGradient';
import BottomPanResponseHeightAnimated from './animte/BottomPanResponseHeightAnimated';
import BottomResponseHeightAnimated from './animte/BottomResponseHeightAnimated';

import MultipleScrollView from './MultipleScrollView';
import DragBlockSort from './animte/DragBlockSort';
import DragList from './DragList';

import WebViewPage from './WebViewPage';
import Linking from './Linking';
import Clipboard from './Clipboard';
import CextendsB from './aExtendsB/C';
import ModulesIos from './ModulesAndroid';
import Tongji from './Tongji';
import Share from './Share';
import flatlist from './MyFlatlist';
import flatlist2 from './MyFlatlist2';

import optimize from './Optimizes';


const AppNavigators = createAppContainer(
  createStackNavigator(
    {
      Animate: {
        screen: Animate,
      },
      Swiper: {
        screen: Swiper,
      },
      Main: {
        screen: Main,
      },
      StatusGradient,
      BottomPanResponseHeightAnimated,
      BottomResponseHeightAnimated,
      MultipleScrollView,
      DragBlockSort,
      DragList,
      WebViewPage,
      Linking,
      Clipboard,
      CextendsB,
      ModulesIos,
      Tongji,
      Share,
      flatlist,
      flatlist2,
      optimize,
    },
    {
      initialRouteName: 'Main',
      headerMode: 'none',
      /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
      mode: Platform.OS === 'ios' ? 'modal' : 'card',
      navigationOptions: () => ({
        header: null,
        // gesturesEnabled: true,
        gesturesEnabled: Platform.OS === 'ios',
      }),
      transitionConfig: () => ({
        transitionSpec: {
          duration: 210,
          easing: Easing.out(Easing.poly(4)),
          timing: Animated.timing,
        },
        screenInterpolator: (sceneProps) => StackViewStyleInterpolator.forHorizontal(sceneProps),
      }),
    }
  )
);

class App extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
    // 如果更新是强制性的，更新文件下载好之后会立即进行更新。
    // 如果你期望更及时的获得更新，可以在每次APP从后台进入前台的时候去主动的检查更新
    AppState.addEventListener('change', (newState) => {
      if (newState === 'active') codePush.sync();
    });
    // 如果可以进行更新，CodePush会在后台静默地将更新下载到本地，等待APP下一次启动的时候应用更新，以确保用户看到的是最新版本。
    codePush.sync();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NativeViewGestureHandler>
          {/* 可以通过向 SafeAreaView 传递 forceInset 来删除 底部的 padding。 */}
          <SafeAreaView
            forceInset={{ top: 'always', bottom: 'always' }}
            style={{ backgroundColor: 'red', flex: 1 }}
          >
            <AppNavigators />
          </SafeAreaView>
        </NativeViewGestureHandler>
      </View>
    );
  }
}

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.ON_NEXT_RESTART,
};

export default codePush(codePushOptions)(App);
