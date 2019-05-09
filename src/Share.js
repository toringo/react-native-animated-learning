/*
 * @Author: toringo
 * @Date: 2019-04-05 18:18:10
 * @Last Modified by: tori
 * @Last Modified time: 2019-04-28 20:40:50
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ButtonBack from './ButtonBack';
import ShareUtil from './components/Share';


export default class ModulesIos extends Component {
  handleShow = () => {
    ShareUtil.shareboard('分享的内容', 'https://pic1.zhimg.com/v2-3b4fc7e3a1195a081d0259246c38debc_1200x500.jpg', 'https://zhuanlan.zhihu.com/p/24053826', '微信公众号图片总是被压缩得不清楚怎么办？', [0, 1, 2, 3, 4, 5, 6], (code, message) => {
      console.log(`result:${code}${message}`);
    });
  }

    render() {
      return (
        <View>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />
          <TouchableOpacity style={{ padding: 15, backgroundColor: '#527FF6' }} onPress={this.handleShow}>
            <Text>分享沟沟壑壑好久好久 codepush-----和健身房和水电费环境</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
