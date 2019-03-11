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
export default class AnimatedDecay extends Component {
  constructor(props) {
      super(props);

      this.state = {
          decayValue: new Animated.ValueXY({ x: 0, y: 0 }),
      };

      this.decayAnimated = Animated.decay(
          this.state.decayValue,
          {
              velocity: 50, // 起始速度，必填
              deceleration: 0.1, // 速度衰减比例，默认为0.997
          }
      );
  }

  _startAnimated() {
      this.decayAnimated.start();
  }

  render() {
      return (
        <View style={styles.mainStyle}>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />

          <Animated.View
            style={{
                      width: 100,
                      height: 150,
                      transform: [
                          { translateX: this.state.decayValue.x }, // x轴移动
                          { translateY: this.state.decayValue.y }, // y轴移动
                      ],
                  }}
          >
            <Image
              ref="image"
              style={{ width: 100, height: 150 }}
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
