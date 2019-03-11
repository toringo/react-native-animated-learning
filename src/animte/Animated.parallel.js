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
export default class AnimatedParallel extends Component {
  constructor(props) {
      super(props);

      this.state = {
          dogOpacityValue: new Animated.Value(1),
          dogACCValue: new Animated.Value(0),
      };

      this.parallelAnimated = Animated.parallel(
          [
              Animated.timing(
                  this.state.dogOpacityValue,
                  {
                      toValue: 1,
                      duration: 1000,
                  }
              ),
              Animated.timing(
                  this.state.dogACCValue,
                  {
                      toValue: 1,
                      duration: 2000,
                      easing: Easing.linear,
                  }
              ),
          ],
          {
              stopTogether: false,
          }
      );
  }

  _startAnimated() {
      this.state.dogOpacityValue.setValue(0);
      this.state.dogACCValue.setValue(0);
      this.parallelAnimated.start();
  }

  render() {
      // 透明度
      const dogOpacity = this.state.dogOpacityValue.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: [0, 1, 0, 1, 0, 1],
      });

      // 项链上面
      const neckTop = this.state.dogACCValue.interpolate({
          inputRange: [0, 1],
          outputRange: [350, 235],
      });

      // 眼镜左边
      const left = this.state.dogACCValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-120, 127],
      });

      // 眼镜旋转
      const rotateZ = this.state.dogACCValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
      });

      return (
        <View style={styles.mainStyle}>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />

          {/* // 狗头 */}
          <Animated.View
            style={{
                      width: 375,
                      height: 240,
                      opacity: dogOpacity,
                  }}
          >
            <Image
              ref="image"
              style={{ width: 375, height: 242 }}
              source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551015990449&di=54c2df378a86ceb3deb25b6a164290eb&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft1987%2F270%2F1588647149%2F348782%2Fb6652944%2F566c5dd9N3bf7f8ba.jpg%2521q70.jpg' }}
            />
          </Animated.View>

          {/* // 项链 */}
          <Animated.View
            style={{
                      width: 250,
                      height: 100,
                      position: 'absolute',
                      top: neckTop,
                      left: 93,
                  }}
          >
            <Image
              ref="image"
              style={{ width: 250, height: 100, resizeMode: 'stretch' }}
              source={{ uri: 'http://img2.3png.com/cda380ea2eb9ac3c0e7e4cca03d7ff385fb4.png' }}
            />
          </Animated.View>

          <View
            style={{
                      width: 375,
                      height: 200,
                      backgroundColor: 'white',
                  }}
          />

          {/* // 眼镜 */}
          <Animated.View
            style={{
                      width: 120,
                      height: 25,
                      position: 'absolute',
                      top: 160,
                      left,
                      transform: [
                          { rotateZ },
                      ],
                  }}
          >
            <Image
              ref="image"
              style={{ width: 120, height: 25, resizeMode: 'stretch' }}
              source={{ uri: 'https://img30.360buyimg.com/n7/jfs/t20146/318/2431974442/35307/68e26027/5b558c92N98678b52.jpg' }}
            />
          </Animated.View>

          <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
            <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
          </TouchableOpacity>
        </View>
      );
  }
}
