import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ButtonBack from './ButtonBack';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      enabled: true,
    };
  }

  render() {
  return (
    <ScrollView scrollEnabled={this.state.enabled}>
      <ButtonBack onPress={() => this.props.navigation.goBack()} />
      <View style={{ height: 300, backgroundColor: '#527FF6' }} />
      <View style={{ height: 2000, backgroundColor: '#E0ECFE' }}>
        <ScrollView
          // 按下屏幕时触发
          onTouchStart={(ev) => { this.setState({ enabled: false }); }}
          // 滚动动画结束调用
          onMomentumScrollEnd={(e) => { this.setState({ enabled: true }); }}
          // 当用户停止拖动此视图时调用此函数。
          onScrollEndDrag={(e) => { this.setState({ enabled: true }); }}
          style={{ margin: 10, maxHeight: 200 }}
        >
          <View style={{ height: 200, backgroundColor: '#B0F566' }} />
          <View style={{ height: 200, backgroundColor: '#4AF2A1' }} />
          <View style={{ height: 200, backgroundColor: '#5CC9F5' }} />
          <View style={{ height: 200, backgroundColor: '#6638F0' }} />
          <View style={{ height: 200, backgroundColor: '#30C69D' }} />
          <View style={{ height: 200, backgroundColor: 'pink' }} />
          <View style={{ height: 200, backgroundColor: '#B0F566' }} />
          <View style={{ height: 200, backgroundColor: '#4AF2A1' }} />
          <View style={{ height: 200, backgroundColor: '#5CC9F5' }} />
          <View style={{ height: 200, backgroundColor: '#6638F0' }} />
          <View style={{ height: 200, backgroundColor: '#30C69D' }} />
          <View style={{ height: 200, backgroundColor: 'pink' }} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
}
