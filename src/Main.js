/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SwipeableFlatList, TouchableHighlight, Button } from 'react-native';
import ButtonBack from './ButtonBack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
  },
  rowData: {
    flex: 1,
  },
  rowDataText: {
    fontSize: 24,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  actionButton: {
    padding: 10,
    width: 80,
    backgroundColor: '#999999',
  },
  actionButtonDestructive: {
    backgroundColor: '#FF0000',
  },
  actionButtonText: {
    textAlign: 'center',
  },
});

type Props = {};

export default class Main extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <ButtonBack {...this.props} /> */}
        <Button
          onPress={() => this.props.navigation.navigate('Animate')}
          title="Animate 动画"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Swiper')}
          title="SwiperFlatlist 左滑列表"
        />
        <Button
          onPress={() => this.props.navigation.navigate('StatusGradient')}
          title="StatusGradient 状态栏滚动渐变"
        />

        <Button
          onPress={() => this.props.navigation.navigate('MultipleScrollView')}
          title="MultipleScrollView 多个scroll滚动优化"
        />
        <Button
          onPress={() => this.props.navigation.navigate('WebViewPage')}
          title="Webview page webview 用法"
        />
        <Button
          onPress={() => this.props.navigation.navigate('DragBlockSort')}
          title="DragBlockSort view拖拽排序"
        />

        <Button
          onPress={() => this.props.navigation.navigate('DragList')}
          title="DragList 列表拖拽排序"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Linking')}
          title="Linking 打开邮箱等"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Clipboard')}
          title="Clipboard 剪贴板"
        />
        <Button
          onPress={() => this.props.navigation.navigate('CextendsB')}
          title="CextendsB 组件继承"
        />
        <Button
          onPress={() => this.props.navigation.navigate('ModulesIos')}
          title="ModulesAndroid 原生模块调用"
        />

        <Button
          onPress={() => this.props.navigation.navigate('Tongji')}
          title="Tongji 友盟统计"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Share')}
          title="Share 友盟分享"
        />

        <Button
          onPress={() => this.props.navigation.navigate('flatlist')}
          title="MyFlatlist 长列表优化"
        />

        <Button
          onPress={() => this.props.navigation.navigate('flatlist2')}
          title="MyFlatlist 长列表优化2"
        />
        <Button
          onPress={() => this.props.navigation.navigate('optimize')}
          title="optimize 性能优化"
        />

      </View>
    );
  }
}
