import React, {
  Component,
} from 'react';

import {
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  Text,
} from 'react-native';
import ButtonBack from '../ButtonBack';

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 999,
      borderWidth: 1,
      width: 80,
      height: 80,
  },
});

class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
        pan: new Animated.ValueXY(),
        scale: new Animated.Value(1),
        rotate: new Animated.Value(0),
    };
    this.state.pan.setValue({ x: 0, y: 100 });
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      // 设置初始位置
      onPanResponderGrant: (e, gestureState) => {
          this.state.pan.setOffset({
              x: this.state.pan.x._value,
              y: this.state.pan.y._value,
          });
          this.state.pan.setValue({ x: 0, y: 100 });
          Animated.spring(this.state.scale, {
              toValue: 1.3,
              friction: 3 }
          ).start();
          Animated.timing(this.state.rotate, {
              toValue: 25,
              duration: 300,
          }).start();
      },

      // 使用拖拽的偏移量来定位
      onPanResponderMove: Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y },
      ]),

      onPanResponderRelease: (e, { vx, vy }) => {
          this.state.pan.flattenOffset();

          // Animated.spring(
          //     this.state.pan,
          //     {toValue: {x: 0, y: 0}}
          // ).start();

          Animated.spring(
              this.state.scale,
              { toValue: 1, friction: 3 }
          ).start();

          Animated.timing(this.state.rotate, {
              toValue: 0,
              duration: 300,
          }).start();
      },
    });
  }

  render() {
      // 从state中取出pan
      const { pan, scale } = this.state;

      // 从pan里计算出偏移量
      const [translateX, translateY] = [pan.x, pan.y];

      // 计算旋转
      const rotate = this.state.rotate.interpolate({
          inputRange: [0, 100],
          outputRange: ['0deg', '360deg'],
      });

      // 设置transform为偏移量
      const imageStyle = { transform: [{ translateX }, { translateY }, { scale }], height: translateY };


      return (
        <>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />
          <Text>拖动看效果</Text>
          <Animated.View style={[styles.container, imageStyle]} {...this.panResponder.panHandlers}>
            <Image style={{ width: 80, height: 80 }} resizeMode="cover" source={{ uri: 'https://img2.mukewang.com/5a28dde90001f75203120312-140-140.jpg' }} />
          </Animated.View>
        </>

      );
  }
}

export default Draggable;
