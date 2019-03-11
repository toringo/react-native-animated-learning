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
export default class AnimatedSpring extends Component {
  constructor(props) {
      super(props);

      this.state = {
          springValue: new Animated.Value(1),
      };

      this.springAnimated = Animated.spring(
          this.state.springValue,
          {
              toValue: 1,
              friction: 2, // 弹跳系数
              tension: 10, // 控制速度
              // speed: 12,
              // bounciness: 8,
          }
      );
  }

  _startAnimated() {
      this.state.springValue.setValue(0.1);
      this.springAnimated.start();
  }

  render() {
      return (
        <View style={styles.mainStyle}>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />

          <Animated.View
            style={{
                      width: 282,
                      height: 51,
                      transform: [
                          { scale: this.state.springValue },
                      ],
                  }}
          >
            <Image
              ref="image"
              style={{ width: 282, height: 51 }}
              source={{ uri }}
            />
          </Animated.View>

          <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
            <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
          </TouchableOpacity>
        </View>
      );
  }
}
