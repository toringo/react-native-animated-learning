/* @flow */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src';

console.disableYellowBox = true; // eslint-disable-line


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
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

export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator />
    );
  }
}
