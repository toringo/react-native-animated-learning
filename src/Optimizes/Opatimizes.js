import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

let VeryExpensive = null; // 定义变量

export default class Optimized extends Component {
  state = { needsExpensive: false }; // 定义内部状态来控制组件是否需要加载

  didPress = () => {
    // 在触发需要加载组件的事件时
    if (VeryExpensive == null) { // 不重复引用
      VeryExpensive = require('./setNativeProps').default; // 把组件的引用赋给定义好的变量
    }

    this.setState(() => ({
      needsExpensive: true, // 更改控制的状态，触发组件re-render
    }));
  };

  render() {
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <TouchableOpacity onPress={this.didPress}>
          <Text>Load</Text>
        </TouchableOpacity>
        {this.state.needsExpensive ? <VeryExpensive /> : null}
      </View>
    );
  }
}
