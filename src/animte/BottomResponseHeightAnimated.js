import React, { PureComponent } from 'react';

import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import ButtonBack from '../ButtonBack';

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  bottom: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    // backgroundColor: '#E0ECFE',
    // transform: [{ translateY: -100 }],
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  scroll: {
    flex: 1,
    marginBottom: 70,
  },
  scrollText: {
    paddingVertical: 20,
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  sonview: {
		width: 60,
		height: 60,
		backgroundColor: '#33AECC',
		alignSelf: 'center',
		marginTop: 20,
	},
});

const { height } = Dimensions.get('window');

export default class BottomPanResponseHeightAnimated extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bg: '#E0ECFE',
      bg2: 'blue',
      height: new Animated.Value(100),
      scale: new Animated.Value(1),
    };

    this.arrow = true;

    // 手势响应系统
    this.gestureHandlers = {
			onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: () => true,
      // 手势开始移动
			onResponderStart: () => {
				console.log('onResponderStart');
      },
      // 点击响应
			onResponderGrant: (e) => {
        console.log('onResponderGrant', e.nativeEvent);
        // this.setState({ bg: '#527FF6' });
        // this.state.height.setOffset(this.state.height._value);
        this.prePageY = e.nativeEvent.pageY;
        this.state.height.setValue(this.state.height._value);
        Animated.spring(this.state.scale, {
            toValue: 1.1,
            friction: 3 }
        ).start();
      },
      // 手势移动
			onResponderMove: (e, gestureState) => {
        console.log('onResponderMove', e.nativeEvent, gestureState);
        // Animated.event(null, [{ nativeEvent: { pageY: this.state.height } }]);
        // this.state.height.setOffset(height - e.nativeEvent.pageY);
        
        if (e.nativeEvent.pageY > this.prePageY) {
          this.arrow = false;
        } else {
          this.arrow = true;
        }
        if (e.nativeEvent.pageY > 100) {
          this.state.height.setValue(height - e.nativeEvent.pageY);
        }
      },
      // 触摸移动结束
			onResponderEnd: () => {
				console.log('onResponderEnd');
      },
      // 手势结束
			onResponderRelease: (e) => {
        // 归正
        this.state.height.flattenOffset();
				console.log('onResponderRelease');
        this.setState({ bg: '#E0ECFE' });
        if (this.arrow) {
          this.state.height.setValue(height);
        } else {
          this.state.height.setValue(100);
        }
        Animated.spring(
          this.state.scale,
          { toValue: 1, friction: 3 }
        ).start();
			},
			onResponderTerminationRequest: () => {
				console.log('onResponderTerminationRequest');
				return true;
			},
			onResponderTerminate: (evt) => {
        console.log('onResponderTerminate');
        this.setState({ bg2: '#E0ECFE' });
      },
      /**
       * RN默认使用冒泡机制， 所以先从最深的子组件响应， RN提供劫持机制， 在触摸事件向下传递时， 先询问父组件， 不给子组件传递事件，
       * onStartShouldSetResponderCapture 在触摸事件开始（touchDown）的时候，RN 容器组件会回调此函数，询问组件是否要劫持事件响应者设置，自己接收事件处理，如果返回 true，表示需要劫持；
       * onMoveShouldSetResponderCapture 触摸移动事件（touchMove）询问容器组件是否劫持
       * 流程图参考 https://img.race604.com/7-3-touch-event-handle.jpg
       */
      onStartShouldSetResponderCapture: (evt) => true,
      onMoveShouldSetResponderCapture: (evt) => true,
      // 在组件成为事件响应者期间，其他组件也可能会申请触摸事件处理。此时 RN 会通过回调询问你是否可以释放响应者角色让给其他组件
    };

    this.gestureHandlers2 = {
			onStartShouldSetResponder: () => true,
			onMoveShouldSetResponder: () => true,
			onResponderStart: () => {
				console.log('onResponderStart---->2');
			},
			onResponderGrant: () => {
				console.log('onResponderGrant---->2');
				this.setState({ bg2: 'green' });
			},
			onResponderMove: () => {
				console.log('onResponderMove---->2');
			},
			onResponderEnd: () => {
				console.log('onResponderEnd---->2');
			},
			onResponderRelease: () => {
				console.log('onResponderRelease---->2');
				this.setState({ bg2: 'blue' });
      },
      // 在组件成为事件响应者期间，其他组件也可能会申请触摸事件处理。此时 RN 会通过回调询问你是否可以释放响应者角色让给其他组件
      onResponderTerminationRequest: () => {
        console.log('onResponderTerminationRequest -----> 2');
        return true;
      },
      // 如果上面回调函数返回为 true，则表示同意释放响应者角色，同时会回调如下函数，通知组件事件响应处理被终止了
      onResponderTerminate: (evt) => {
        console.log('onResponderTerminate -----> 2');
        // 冲断后恢复原状
        this.setState({ bg2: 'blue' });
      },
		};
  }

  render() {
    const { scale, bg } = this.state;
    const viewStyle = { transform: [{ scale }], height: this.state.height, backgroundColor: bg };
    return (
      <View style={styles.wrap}>
        <ButtonBack onPress={() => this.props.navigation.goBack()} />
        <ScrollView style={styles.scroll}>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>
          <Text style={styles.scrollText}>ScrollView</Text>

        </ScrollView>
        <Animated.View style={[styles.bottom, viewStyle]} {...this.gestureHandlers}>
          <Text>父组件</Text>
          <View
            style={[styles.sonview, { backgroundColor: this.state.bg2 }]}
            {...this.gestureHandlers2}
          >
            <Text style={styles.text}>子组件</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}
