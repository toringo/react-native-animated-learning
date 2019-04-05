/*
 * @Author: toringo
 * @Date: 2019-04-05 10:59:10
 * @Last Modified by: tori
 * @Last Modified time: 2019-04-05 20:51:23
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ToastExample from './components/ToastExample';


export default class ModulesIos extends Component {
  handleShow = () => {
      ToastExample.show('Awesome', ToastExample.SHORT
      // , (res) => {
      //   console.log('res', res);
      //   alert('回调');
      // }, (err) => {
      //   console.log('res', err);
      //   alert('回调error');
      // }
      )
      .then((res) => {
        console.log('then', res);
      });
  }

    render() {
      return (
        <View>
          <TouchableOpacity style={{ padding: 15, backgroundColor: '#527FF6' }} onPress={this.handleShow}>
            <Text>点击调用原生模块toast</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
