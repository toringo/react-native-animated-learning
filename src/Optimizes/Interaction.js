import React, { Component, PureComponent } from 'react';
import { View, InteractionManager, NativeModules, LayoutAnimation, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

import Screen from '../components/Screen';

const { width } = Dimensions.get('window');

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

// export default class ShouldPure extends Component {
export default class Interaction extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      interactionsComplete: false,
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.a !== this.state.a;
  // }

  componentDidMount() {
    // this._clickStartAnimation();
    // 需要注意的是 InteractionManager  是监听所有的动画/交互
    // 完成之后才会触发 runAfterInteractions中的回调，
    // 如果项目中有一些长时间动画或者交互，可能会出现长时间等待。
    // 所以 由于 InteractionManager  的不可控性，
    // 使用的时候要根据实际情况调整。

    // InteractionManager.runAfterInteractions(() => {
    //   console.log('InteractionManager ====>');
    //   this.setState({ interactionsComplete: true });
    // });
    requestAnimationFrame(() => {
      console.log('requestAnimationFrame');
      // this.setState({ interactionsComplete: true });
    });
  }

  _clickStartAnimation = () => {
    // LayoutAnimation.configureNext(anima, () => {});
    // LayoutAnimation.configureNext(LayoutAnimation.create(
    //   1000,
    //   LayoutAnimation.Types.linear,
    //   LayoutAnimation.Properties.scaleXY,
    // ));
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const secondMoney = this.state.show ? (
      <View style={{ padding: 10, backgroundColor: 'pink' }}><Text style={{ fontSize: 20 }}>大家觉得记得记得</Text></View>
    ) : null;
    return (
      <Screen {...this.props}>
        <TouchableOpacity style={{ backgroundColor: '#2090FF', padding: 8, width: 120 }} onPress={this._clickStartAnimation}>
          <Text style={{ fontSize: 20 }}>点击</Text>
        </TouchableOpacity>
        {
          !this.state.interactionsComplete && <Text>loading...</Text>
        }
        <Image style={{ width }} resizeMode="contain" source={require('../imgs/purecomponent.png')} />
        {secondMoney}
      </Screen>
    );
  }
}
