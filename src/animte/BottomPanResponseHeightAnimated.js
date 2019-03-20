import React, { PureComponent } from 'react';

import { View, Text, Image, Animated, PanResponder, TouchableHighlight, StyleSheet, Dimensions, ScrollView, UIManager, Modal, findNodeHandle } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';

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
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 6,
    overflow: 'hidden',
  },
  sonview: {
		width: 50,
		height: 50,
		backgroundColor: '#33AECC',
		alignSelf: 'center',
		marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    padding: 15,
    lineHeight: 30,
  },
  modalScrollview: {
    // padding: 15,
  },
  popupLayer: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  closeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#666',
  },
  forkLine: {
    width: 10,
    height: 1,
    backgroundColor: '#FFF',
  },
});

const { height, width } = Dimensions.get('window');


export default class BottomPanResponseHeightAnimated extends PureComponent {
  static defaultProps = {
    data: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553096595396&di=4cd6468be5a74c9ad5973307d8ab7384&imgtype=0&src=http%3A%2F%2Fit.southcn.com%2F9%2Fimages%2Fattachement%2Fjpg%2Fsite4%2F20100201%2F00105cd47d460cd0db0d02.jpg',
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      bg: '#B0F566',
      bg2: '#FCB15F',
      height: new Animated.Value(100),
      scale: new Animated.Value(1),
      showPopupLayer: false,
      selectedIndex: 0,
    };
    this.cardRefs = [];
    this.popupAnimatedValue = new Animated.Value(0);
    this.closeAnimatedValue = new Animated.Value(0);
    this.bannerImageAnimatedValue = new Animated.Value(0);
    this.popupLayerStyle = {};
    this.bannerImageStyle = {};
  }

  // PanResponder提供的API和手势响应系统API一一对应
  panResponse = PanResponder.create({
    // 手指接触瞬间是否响应, touchDown
    onStartShouldSetPanResponder: (evt) => true,
    // 负责处理用户通过移动来激活一个 responser，如果返回值为 true，则表示这个 View 能够响应滑动手势被激活 touchMove
    onMoveShouldSetPanResponder: (evt) => true,

    // 响应系统在从最底层的组件开始冒泡之前，会首先执行一个“捕获期”，在此期间会触发on*ShouldSetResponderCapture系列事件
    // onMoveShouldSetPanResponderCapture: () => true,

    // 如果某个父 View 想要在触摸操作开始时阻止子组件成为响应者，那就应该处理onStartShouldSetResponderCapture事件并返回 true 值
    // onStartShouldSetPanResponderCapture: () => true,

    // 开始移动时
    onPanResponderGrant: (evt, gestureState) => {
      this.setState({ bg: '#4AF2A1' });
      Animated.spring(this.state.scale, {
        toValue: 1.1,
        friction: 3 }
      ).start();
      console.log('onPanResponderGrant', gestureState);
    },

    /**
     * 触摸滑动调用次方法
     * evt 获取触摸的位置在被响应的 View 中的相对坐标，evt.nativeEvent.locationX 和 evt.nativeEvent.locationY（这个方法很实用）
     * gestureState dx/dy：手势进行到现在的横向/纵向相对位移  vx/vy：此刻的横向/纵向速度  numberActiveTouches：responder上的触摸的个数
    */
    onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderMove', gestureState.dy);
        // this.state.height.setOffset(this.state.height._value);
        if (gestureState.dy < 0) {
          this.state.height.setValue(100 + Math.abs(gestureState.dy));
        }
        if (gestureState.dy > 0 && this.state.height._value > 100) {
          this.state.height.setValue(height - Math.abs(gestureState.dy));
        }
    },
    // 用户手指离开屏幕时，调用该方法
    onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease', gestureState.dy);
        this.setState({ bg: '#B0F566' });
        if (gestureState.dy < 0 && Math.abs(gestureState.dy) > 100) {
          this.state.height.setValue(height);
        } else {
          this.state.height.setValue(100);
        }
        Animated.spring(this.state.scale, {
          toValue: 1,
          friction: 3 }
        ).start();
    },

    // 有其他组件请求接替响应者，当前的 View 是否“放权”？返回 true 的话则释放响应者权力。
    onPanResponderTerminationRequest: () => true,

    // 响应者权力已经交出。这可能是由于其他 View 通过onResponderTerminationRequest请求的，也可能是由操作系统强制夺权（比如 电话、iOS 上的控制中心或是通知中心）
    onPanResponderTerminate: (evt) => {
      console.log('父组件交出响应');
    },

  });

  panResponse2 = PanResponder.create({
    // 手指接触瞬间是否响应, touchDown
    onStartShouldSetPanResponder: (evt) => true,
    // 负责处理用户通过移动来激活一个 responser，如果返回值为 true，则表示这个 View 能够响应滑动手势被激活 touchMove
    onMoveShouldSetPanResponder: (evt) => true,

    // 开始移动时
    onPanResponderGrant: (evt, gestureState) => {
      this.setState({ bg2: '#F45759' });
      console.log('onPanResponderGrant--->2', gestureState);
    },
    /**
     * 触摸滑动调用次方法
     * evt 获取触摸的位置在被响应的 View 中的相对坐标，evt.nativeEvent.locationX 和 evt.nativeEvent.locationY（这个方法很实用）
     * gestureState dx/dy：手势进行到现在的横向/纵向相对位移  vx/vy：此刻的横向/纵向速度  numberActiveTouches：responder上的触摸的个数
    */
    onPanResponderMove: (evt, gestureState) => {
        console.log('onPanResponderMove--->2', gestureState);
    },
    // 用户手指离开屏幕时，调用该方法
    onPanResponderRelease: (evt, gestureState) => {
        console.log('onPanResponderRelease--->2', gestureState);
        this.setState({ bg2: '#FCB15F' });
    },

    // 有其他组件请求接替响应者，当前的 View 是否“放权”？返回 true 的话则释放响应者权力。
    onPanResponderTerminationRequest: () => true,
    // onPanResponderTerminationRequest: () => false,  // onPanResponderTerminate 不执行


    // 响应者权力已经交出。这可能是由于其他 View 通过onResponderTerminationRequest请求的，也可能是由操作系统强制夺权（比如 电话、iOS 上的控制中心或是通知中心）
    onPanResponderTerminate: (evt) => {
      console.log('交出响应');
      this.setState({ bg2: '#FCB15F' });
    },
  });

  onPress = (index) => {
    console.log('onpress', index);
    UIManager.measure(findNodeHandle(this.cardRefs[index]), (x, y, width_, height_, pageX, pageY) => {
      console.log('UIManager.measure', x, y, width_, height_, pageX, pageY);
      // 生成浮层样式
      this.popupLayerStyle = {
        top: this.popupAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [pageY, 0],
        }),
        left: this.popupAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [pageX, 0],
        }),
        width: this.popupAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [width_, width],
        }),
        height: this.popupAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [height_, height],
        }),
      };
      this.closeStyle = {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 44,
        right: 20,
        opacity: this.closeAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      };
      this.bannerImageStyle = {
        width: this.bannerImageAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [width_, width],
        }),
        height: this.bannerImageAnimatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [height_, width * height_ / width_],
        }),
      };
      // 设置浮层可见，然后开启展开浮层动画
      this.setState({ selectedIndex: index, showPopupLayer: true }, () => {
        Animated.parallel([
          Animated.timing(this.closeAnimatedValue, { toValue: 1 }),
          Animated.spring(this.popupAnimatedValue, { toValue: 1, friction: 6 }).start(),
          Animated.spring(this.bannerImageAnimatedValue, { toValue: 1, friction: 6 }),
        ]).start();
      });
    });
  }

  onRequestClose = () => {

  }

  renderModal() {
    const { data } = this.props;
    const { selectedIndex, showPopupLayer } = this.state;
    return (
      <Modal
        transparent
        visible={showPopupLayer}
        onRequestClose={this.onRequestClose}
      >
        {/* <Text>就的刷卡缴费加快速度</Text> */}
        {showPopupLayer && (
          <Animated.View style={[styles.popupLayer, this.popupLayerStyle]}>
            {this.renderModalContent(data[selectedIndex], selectedIndex)}
          </Animated.View>
        )}
      </Modal>
    );
  }

  renderModalContent = (item, index) => (
    <ScrollView bounces={false} style={styles.modalScrollview}>
      <Animated.Image source={{ uri: item }} style={this.bannerImageStyle} />
      <Text style={styles.text}>海内存知己，天涯若比邻,海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻,海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻海内存知己，天涯若比邻</Text>
      {this.renderClose()}
    </ScrollView>
    )

  // 关闭按钮
  renderClose = () => (
    <Animated.View style={this.closeStyle}>
      <TouchableHighlight underlayColor="transparent" style={styles.closeContainer} onPress={this.onPressClose}>
        <View>
          <View style={[styles.forkLine, { top: +0.5, transform: [{ rotateZ: '45deg' }] }]} />
          <View style={[styles.forkLine, { top: -0.5, transform: [{ rotateZ: '-45deg' }] }]} />
        </View>
      </TouchableHighlight>
    </Animated.View>
    );

  onPressClose = () => {
    Animated.parallel([
      Animated.timing(this.closeAnimatedValue, { toValue: 0 }),
      Animated.timing(this.popupAnimatedValue, { toValue: 0 }),
      Animated.timing(this.bannerImageAnimatedValue, { toValue: 0 }),
    ]).start(() => {
      this.setState({ showPopupLayer: false });
    });
  };

  render() {
    const transform = [{ scale: this.state.scale }];
    const childrenHeight = this.state.height.interpolate({
      inputRange: [100, height],
      outputRange: [50, 0],
    });
    const opacity = this.state.height.interpolate({
      inputRange: [100, height],
      outputRange: [1, 0],
    });
    return (
      <View style={styles.wrap}>
        <ButtonBack onPress={() => this.props.navigation.goBack()} />
        {this.renderModal()}
        <ScrollView style={styles.scroll}>
          {
          this.props.data.map((item, index) => (
            <TouchableHighlight key={`${item}-${index}`} underlayColor="transparent" ref={component => { this.cardRefs[index] = component; }} onPress={() => this.onPress(index)}>
              <View style={styles.scrollText}>
                <Image style={{ height: 150 }} source={{ uri: item }} />
                <Text style={styles.text}>海内存知己，天涯若比邻</Text>
              </View>
            </TouchableHighlight>
        ))
        }
        </ScrollView>
        <Animated.View
          style={[styles.bottom, { height: this.state.height, backgroundColor: this.state.bg, transform }]}
          {...this.panResponse.panHandlers}
        >
          <Text>父组件</Text>
          <Animated.View
            style={[styles.sonview, { backgroundColor: this.state.bg2, height: childrenHeight, opacity }]}
            {...this.panResponse2.panHandlers}
          >
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => alert('子组件激活')}
            >
              <Text>子组件</Text>
            </TouchableHighlight>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}
