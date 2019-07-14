/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { View, FlatList, Dimensions, Image, Text } from 'react-native';
import ButtonBack from './ButtonBack';

const { width, height } = Dimensions.get('window');

class Photo extends Component {
  // 核心代码
  shouldUpdate = true;

  // shouldComponentUpdate(nextProps, nextState) {
  //     // action所传入的在屏幕上显示的图片的数组
  //     // 判断如果这个元素显示在屏幕上就返回true否则返回false
  //     // console.log('nextProps.isViewable', nextProps);
  //     if (nextProps.uri === this.props.uri) {
  //       return false;
  //     }
  //     return true;
  // }
  componentWillReceiveProps(pp) {
    if (pp.show != this.props.show) this.shouldUpdate = true;
  }

  shouldComponentUpdate() {
    if (!this.shouldUpdate) return false;
    return !(this.shouldUpdate = false);
  }

  render() {
    const { uri, index, show } = this.props;
    // return (<Image style={{ width, height: 1080 / (1920 / width) }} source={{ uri }} resizeMode="cover" />);
    return (
      <View style={{ width, height: 1080 / (1920 / width) }}>
        {show ? <Image style={{ width, height: 1080 / (1920 / width) }} source={{ uri }} resizeMode="cover" /> : <View />}
      </View>
);
  }
}
export const data = [
  { uri: 'http://www.deskcar.com/desktop/fengjing/2013312114415/1.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg', show: true },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
  { uri: 'http://uploads.5068.com/allimg/1801/79-1P111163537.jpg' },
];

let index = 1;
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: data.slice(0, 20),
    };
  }

  layout = [];

  onload = () => {
    if (this.isloading) {
      this.isloading = false;
    } else {
      new Promise((resolve, reject) => {
        this.isloading = true;
        setTimeout(() => {
          ++index;
          resolve(data.slice(0, 20 + 10 * index));
        }, 2000);
      }).then(dataSource => {
        this.setState(() => ({ dataSource }));
        this.isloading = false;
      });
    }
  }

  handleViewableItems = (items) => {
    const { dataSource } = this.state;
    // 会分别传入被加入进来的item和移除的item,在这里设定一个flag
    // 需要更新的数组
    const newdataSource = dataSource.slice(0);
    const min = items.viewableItems[0].index - 4;
    const max = items.viewableItems[items.viewableItems.length - 1].index + 4;
    // items.viewableItems.forEach((value) => {
    //   newdataSource[value.index] = { isViewable: value.isViewable, ...value.item };
    //   newdataSource[value.index] = { isViewable: value.isViewable, ...value.item };
    // });
    for (let i = 0; i < newdataSource.length; i++) {
      if ((min <= i) && (i <= max)) {
        newdataSource[index] = { isViewable: true, ...newdataSource[index] };
      } else {
        newdataSource[index] = { isViewable: false, ...newdataSource[index] };
      }
    }
    console.log('handleViewableItems', items, newdataSource);

    setTimeout(() => {
      this.setState({ dataSource: newdataSource });
    }, 200);
  }

  _onScroll = (e) => {
    const { y } = e.contentOffset;
    let index = 0;
    let curr = 0;
    while (y > curr) {
        if (!this.layout[index]) break;
        curr += this.layout[index];
        index++;
    }
    // console.log("当前第" + index + "行");
    this.showImage(index);
  }

  showImage = (index) => {
    if (this.timer) return;
    this.timer = setTimeout(() => {
        console.log(`延迟显示:当前第${index}行`);
        const dataSource = this.state.dataSource.filter((item, i) => {
            item.show = i >= index - 8 && i < index + 8;
            return item;
        });
        this.setState({ dataSource });
        if (this.timer) clearTimeout(this.timer);
        this.timer = null;
    }, 200);
  }

  setLayout = (e, index) => {
    this.layout[index] = e.nativeEvent.layout.height;
  }

  render() {
    // http://qiniu.toringo.cn/wushili.013.jpeg
    return (
      <View style={{ flex: 1 }}>
        <ButtonBack onPress={() => this.props.navigation.goBack()} />
        {/* <Photo uri="http://qiniu.toringo.cn/wushili.013.jpeg" /> */}
        <FlatList
          style={{ flex: 1, backgroundColor: '#f2f2f2' }}
          keyExtractor={(item, index) => `${item.uri}-${index}`}
          data={this.state.dataSource}
          numColumns={1}
          windowSize={Math.floor(height / (1080 / (1920 / width))) * 2}
          initialNumToRender={10}
          renderItem={({ item, index }) => (
            <View onLayout={e => this.setLayout(e, index)} style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
              <Photo uri={item.uri} index={index} show={item.show || false} />
            </View>
          )}
          // getItemLayout={(data, index) => (
          //   { length: 100, offset: 1080 / (1920 / width) * index, index }
          // )}
          scrollEventThrottle={1000}
          // onViewableItemsChanged={this.handleViewableItems}
          onEndReached={this.onload}
          onScroll={(e) => this._onScroll(e.nativeEvent)}
          onEndReachedThreshold={0.3}
          ListEmptyComponent={<View />}
          // removeClippedSubviews
          updateCellsBatchingPeriod={200}
          maxToRenderPerBatch={Math.floor(height / (1080 / (1920 / width))) * 2}
        />
      </View>
    );
  }
}
