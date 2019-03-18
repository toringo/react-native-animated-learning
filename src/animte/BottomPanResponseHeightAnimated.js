import React, { PureComponent } from 'react';

import { View, Text, Animated, PanResponder, StyleSheet } from 'react-native';
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
		width: 100,
		height: 100,
		backgroundColor: '#33AECC',
		alignSelf: 'center',
		marginTop: 20,
	},
});

export default class BottomPanResponseHeightAnimated extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bg: '#E0ECFE',
      bg2: 'blue',
    };

    // 手势响应系统
    this.gestureHandlers = {
			onStartShouldSetResponder: () => true,
      onMoveShouldSetResponder: () => true,
      // 手势开始移动
			onResponderStart: () => {
				console.log('onResponderStart');
      },
      // 点击响应
			onResponderGrant: () => {
        console.log('onResponderGrant');
				this.setState({ bg: '#527FF6' });
      },
      // 手势移动
			onResponderMove: () => {
				console.log('onResponderMove');
      },
      // 触摸移动结束
			onResponderEnd: () => {
				console.log('onResponderEnd');
      },
      // 手势结束
			onResponderRelease: () => {
				console.log('onResponderRelease');
				this.setState({ bg: '#E0ECFE' });
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
      // onStartShouldSetResponderCapture: (evt) => true,
      // onMoveShouldSetResponderCapture: (evt) => true,
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

  // PanResponder提供的API和手势响应系统API一一对应
  panResponse = PanResponder.create({
    // 手指接触瞬间是否响应, touchDown
    onStartShouldSetResponder: (evt) => true,
    // 负责处理用户通过移动来激活一个 responser，如果返回值为 true，则表示这个 View 能够响应滑动手势被激活 touchMove
    onMoveShouldSetResponder: (evt) => true,


    // 开始移动时
    onPanResponderGrant: (evt, gestureState) => {
      this.setState({ bg: '#527FF6' });
      console.log('onPanResponderGrant', evt, gestureState);
    },

    // 响应系统在从最底层的组件开始冒泡之前，会首先执行一个“捕获期”，在此期间会触发on*ShouldSetResponderCapture系列事件
    onMoveShouldSetResponderCapture: () => false,

    // 如果某个父 View 想要在触摸操作开始时阻止子组件成为响应者，那就应该处理onStartShouldSetResponderCapture事件并返回 true 值
    onMoveShouldSetPanResponderCapture: () => true,

    /**
     * 触摸滑动调用次方法
     * evt 获取触摸的位置在被响应的 View 中的相对坐标，evt.nativeEvent.locationX 和 evt.nativeEvent.locationY（这个方法很实用）
     * gestureState dx/dy：手势进行到现在的横向/纵向相对位移  vx/vy：此刻的横向/纵向速度  numberActiveTouches：responder上的触摸的个数
    */
    onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderMove', evt, gestureState);
    },
    // 用户手指离开屏幕时，调用该方法
    onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease', evt, gestureState);
        this.setState({ bg: '#E0ECFE' });
    },

    // 有其他组件请求接替响应者，当前的 View 是否“放权”？返回 true 的话则释放响应者权力。
    onResponderTerminationRequest: () => true,

    // 响应者权力已经交出。这可能是由于其他 View 通过onResponderTerminationRequest请求的，也可能是由操作系统强制夺权（比如 电话、iOS 上的控制中心或是通知中心）
    onResponderTerminate: (evt) => {},

  });

  render() {
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
        <View style={[styles.bottom, { backgroundColor: this.state.bg }]} {...this.gestureHandlers}>
          <Text>父组件</Text>
          <View
            style={[styles.sonview, { backgroundColor: this.state.bg2 }]}
            {...this.gestureHandlers2}
          >
            <Text style={styles.text}>子组件</Text>
          </View>
        </View>
      </View>
    );
  }
}
