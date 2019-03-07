import React, { PureComponent } from 'react';
import { View, Button, Platform, Animated } from 'react-native';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import Opacity from './Opacity';
// import LayoutAnimation from './LayoutAnimation';
// import LayoutAnimationRepeat from './LayoutAnimationRepeat';


const AppNavigators = createStackNavigator(
    {
      Opacity,
      // LayoutAnimation,
      // LayoutAnimationRepeat,
    },
    {
      initialRouteName: 'Opacity',
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
    }
  );

export default AppNavigators;
