/*
 * @Author: toringo
 * @Date: 2019-04-05 18:18:10
 * @Last Modified by: tori
 * @Last Modified time: 2019-04-05 18:18:31
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import ToastExample from './components/Share';


export default class ModulesIos extends Component {
  handleShow = () => {

  }

    render() {
      return (
        <View>
          <TouchableOpacity style={{ padding: 15, backgroundColor: '#527FF6' }} onPress={this.handleShow}>
            <Text>点击分享</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
