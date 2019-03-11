import React, { PureComponent } from 'react';
import { View, Button, Platform } from 'react-native';
import { createStackNavigator, createAppContainer, SafeAreaView } from 'react-navigation';

import Animated from './Animated';
import LayoutAnimation from './LayoutAnimated';
import LayoutAnimationRepeat from './LayoutAnimationRepeat';
import LayoutAnimationSpring from './LayoutAnimation.spring';
import AnimatedStagger from './Animated.stagger';
import AnimatedSequence from './Animated.sequence';

import AnimatedParallel from './Animated.parallel';
import AnimatedDecay from './Animated.decay';
import AnimatedSpring from './Animated.spring';
import MainAnimated from './Main';

const AppNavigators = createStackNavigator(
    {
      Animated,
      LayoutAnimation,
      LayoutAnimationRepeat,
      LayoutAnimationSpring,
      AnimatedStagger,
      AnimatedSequence,
      AnimatedParallel,
      AnimatedDecay,
      AnimatedSpring,
      MainAnimated,
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
    }
  );

export default AppNavigators;
