// @flow

import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Dimensions,
  NativeModules,
  LayoutAnimation,
  TextInput,
} from 'react-native';
import ButtonBack from '../ButtonBack';


export default class Screen extends React.PureComponent {
  render() {
    const { children, navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ButtonBack onPress={() => navigation.goBack()} />
        <View>{children}</View>
      </View>
    );
  }
}
