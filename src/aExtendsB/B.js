/*
 * @Author: toringo
 * @Date: 2019-03-28 22:14:10
 * @Last Modified by: tori
 * @Last Modified time: 2019-03-29 08:11:22
 */

import React, { Component } from 'react';
import { View, Clipboard, Text } from 'react-native';
import A from './A';

export default class B extends A {
    render() {
      return (
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          {this.renderIcon()}
          {this.renderName()}
          {this.renderClose()}
        </View>
      );
    }
}
