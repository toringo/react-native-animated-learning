import React, { PureComponent } from 'react';
import { View, Easing, Platform, Animated } from 'react-native';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import ShouldPure from './ShouldComponentUpdate';
import Main from './Main';
import Interaction from './Interaction';
import setNativeProps from './setNativeProps';
import Opatimizes from './Opatimizes';


const AppNavigators = createStackNavigator(
    {
      ShouldPure,
      Main,
      Interaction,
      setNativeProps,
      Opatimizes,
    },
    {
      initialRouteName: 'Opatimizes',
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
        screenInterpolator: (sceneProps) => StackViewStyleInterpolator.forFade(sceneProps),
      }),
    }
  );

export default AppNavigators;
