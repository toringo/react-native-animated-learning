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

export default class AnimatedSequence extends Component {
  constructor(props) {
      super(props);

      this.state = {
          turnRotateValue: new Animated.Value(0),
          turnShakeValue: new Animated.Value(0),
          macValue: new Animated.Value(0),
      };

      this.sequenceAnimated = Animated.sequence(
          [
              Animated.timing(
                  this.state.turnRotateValue,
                  {
                      toValue: 1,
                      duration: 5000,
                      easing: Easing.in,
                      // useNativeDriver: true,
                  }
              ),
              Animated.timing(
                  this.state.turnShakeValue,
                  {
                      toValue: 1,
                      duration: 500,
                      easing: Easing.in,
                      delay: 300,
                      // useNativeDriver: true,
                  }
              ),
              Animated.spring(
                  this.state.macValue,
                  {
                      toValue: 1,
                      friction: 3,
                      tension: 10,
                  }
              ),
          ]
      );
  }

  _startAnimated() {
      this.sequenceAnimated.start();
  }

  render() {
      // 转盘旋转
      const turnRotateZ = this.state.turnRotateValue.interpolate({
          inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          outputRange: [
              '0deg',
              '180deg',
              '360deg',
              '720deg',
              '1080deg',
              '1800deg',
              '2520deg',
              '3060deg',
              '3420deg',
              '3600deg',
              '3690deg',
          ],
      });

      // 转盘震动
      const marginLeft = this.state.turnShakeValue.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: [0, -40, 40, -40, 40, 0],
      });

      // MacTop
      const macTop = this.state.macValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-200, 150],
      });

      return (
        <View style={styles.mainStyle}>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />

          {/* // 转盘 */}
          <Animated.View
            style={{
                      width: 300,
                      height: 300,
                      marginLeft,
                      transform: [
                          { rotateZ: turnRotateZ },
                      ],
                  }}
          >
            <Image
              ref="image"
              style={{ width: 300, height: 300 }}
              source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551017189681&di=67c7bbe2f56b6b7c8dea0fedb043df83&imgtype=0&src=http%3A%2F%2Fpic57.nipic.com%2Ffile%2F20141230%2F20170631_135104414000_2.jpg' }}
            />
          </Animated.View>

          {/* // mac */}
          <Animated.View
            style={{
                      width: 300,
                      height: 204,
                      position: 'absolute',
                      top: macTop,
                      left: width / 2 - 150,
                  }}
          >
            <Image
              ref="image"
              resizeMode="cover"
              style={{ width: 300, height: 204 }}
              source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551016981336&di=8b7bd9bf943826f5f30b204bfe856263&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017034554b7cd2000001bf7286bbe1.jpg%401280w_1l_2o_100sh.jpg' }}
            />
          </Animated.View>

          <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
            <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
          </TouchableOpacity>
        </View>
      );
  }
}
