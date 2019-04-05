/*
 * @Author: toringo
 * @Date: 2019-04-05 10:59:10
 * @Last Modified by: tori
 * @Last Modified time: 2019-04-05 15:26:45
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ToastExample from './components/ToastExample';


export default class ModulesIos extends Component {
  handleShow = () => {
      ToastExample.show('Awesome', ToastExample.SHORT);
      // .then((res) => {
      //   console.log('show', res);
      // });
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
