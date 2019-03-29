import React, { PureComponent } from 'react';
import { View, Easing, Platform, Animated } from 'react-native';
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
import WebViewPage from './WebViewPage';
import Linking from './Linking';
import Clipboard from './Clipboard';
import CextendsB from './aExtendsB/C';


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
      WebViewPage,
      Linking,
      Clipboard,
      CextendsB,
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

export default class App extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NativeViewGestureHandler>
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
