import React, { PureComponent } from 'react';
import { View, Easing, Platform, Animated } from 'react-native';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';

import Animateds from './Animated';
import LayoutAnimation from './LayoutAnimated';
import LayoutAnimationRepeat from './LayoutAnimationRepeat';
import LayoutAnimationSpring from './LayoutAnimation.spring';
import AnimatedStagger from './Animated.stagger';
import AnimatedSequence from './Animated.sequence';

import AnimatedParallel from './Animated.parallel';
import AnimatedDecay from './Animated.decay';
import AnimatedSpring from './Animated.spring';
import MainAnimated from './Main';
import PanResponderAnimated from './BottomResponseHeightAnimated';
import BottomPanResponseHeightAnimated from './BottomPanResponseHeightAnimated';

const AppNavigators = createStackNavigator(
    {
      Animated: Animateds,
      LayoutAnimation,
      LayoutAnimationRepeat,
      LayoutAnimationSpring,
      AnimatedStagger,
      AnimatedSequence,
      AnimatedParallel,
      AnimatedDecay,
      AnimatedSpring,
      MainAnimated,
      PanResponderAnimated,
      BottomPanResponseHeightAnimated,
    },
    {
      initialRouteName: 'MainAnimated',
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
