/*
 * @Author: toringo
 * @Date: 2019-03-29 07:56:25
 * @Last Modified by: tori
 * @Last Modified time: 2019-03-29 08:06:30
 */


import React, { Component } from 'react';
import { View, Clipboard, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import B from './B';

const mockdata = [
  { name: '张三', isHide: true },
  { name: '王麻子', isHide: true },
  { name: '李思思', isHide: true },
  { name: '大佬', isHide: false },
  { name: '神算子', isHide: true },
  { name: '加入', isHide: false },
  { name: '张道人', isHide: true },
];

export default class C extends React.PureComponent {
    render() {
      return (
        <ScrollView>
          {
            mockdata.map(item => <B key={item.name} {...item} />)
          }
        </ScrollView>
      );
    }
}
