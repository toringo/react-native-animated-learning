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

// const styles = StyleSheet.create({

// });

const uri = 'http://pic17.nipic.com/20111021/8633866_210108284151_2.jpg';


type Props = {

};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default class Opacity extends Component {
  constructor(props) {
      super(props);

      this.state = {
        animatedValue: new Animated.Value(0),
      };

      this.rotateAnimated = Animated.timing(
          this.state.animatedValue,
          {
              toValue: 1,
              duration: 3000,
              easing: Easing.in,
          }
      );
  }

  _startAnimated() {
      // this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
      // this.rotateAnimated.start(() => this._startAnimated());
      this.state.animatedValue.setValue(0);
      this.rotateAnimated.start(() => this._startAnimated());
  }

  _stopAnimated() {
    this.fadeOutAnimated.stop(() => this.state.fadeOutOpacity.setValue(0));
  }

  render() {
    const rotateZ = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '360deg', '0deg'],
  });

  const opacity = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0],
  });

  const rotateX = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg'],
  });

  const textSize = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18],
  });

  const marginLeft = this.state.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 375, 0],
  });

  return (
    <View style={styles.mainStyle}>
      <ButtonBack onPress={() => this.props.navigation.goBack()} />

      <Animated.View
        style={{
                  marginTop: 10,
                  width: 100,
                  height: 100,
                  transform: [
                      { rotateZ },
                  ],
              }}
      >
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri }}
        />
      </Animated.View>

      <Animated.View
        style={{
                  marginTop: 10,
                  width: 100,
                  height: 100,
                  opacity,
                  backgroundColor: 'red',
              }}
      />

      <Animated.Text
        style={{
                  marginTop: 10,
                  width: 100,
                  fontSize: 18,
                  color: 'white',
                  backgroundColor: 'red',
                  transform: [
                      { rotateX },
                  ],
              }}
      >
              窗外风好大，我没有穿褂。
      </Animated.Text>

      <Animated.Text
        style={{
                  marginTop: 10,
                  height: 100,
                  lineHeight: 100,
                  fontSize: textSize,
                  color: 'red',
              }}
      >
              IAMCJ嘿嘿嘿
      </Animated.Text>

      <Animated.View
        style={{
                  marginTop: 10,
                  width: 100,
                  height: 100,
                  marginLeft,
                  backgroundColor: 'red',
              }}
      />

      <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
        <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
      </TouchableOpacity>
    </View>
  );
  }
}
