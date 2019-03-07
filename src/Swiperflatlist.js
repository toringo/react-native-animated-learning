/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SwipeableFlatList, TouchableHighlight, Alert,
} from 'react-native';
import ButtonBack from './ButtonBack';

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

export default class Swiper extends Component<Props> {
  handlechange = (date: string): string => date

  keyExtractor = (item, index) => item.title;

  renderItem = ({ item }) => (
    <View style={{ height: 50, backgroundColor: '#1F2431', flex: 1 }}>
      <Text style={{ color: '#fff' }}>{item.title}</Text>
    </View>
  );

  renderQuickActions = ({ item }) => (
    <View style={styles.actionsContainer}>
      <TouchableHighlight
        style={styles.actionButton}
        onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this edit action!',
            );
          }}
      >
        <Text style={styles.actionButtonText}>Edit</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.actionButton, styles.actionButtonDestructive]}
        onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this remove action!',
            );
          }}
      >
        <Text style={styles.actionButtonText}>Remove</Text>
      </TouchableHighlight>
    </View>
    )

  render() {
    const data = [
      { key: 61, id: 256343, title: '就是计2fs算机地方' },
      { key: 26, id: 33534546424, title: '九点四十54fsdf峰科技' },
      { key: 163, id: 2654343, title: '就是计fs算65机地方' },
      { key: 245, id: 5332344, title: '九点fsd4四十峰科技' },
      { key: 1665, id: 25334343, title: '就是计hvx65c56算机地方' },
      { key: 246, id: 33424, title: '九点四vxv十534峰dsd科技' },
      { key: 134, id: 53423443, title: '就是计vxcv56算机地方' },
      { key: 32, id: 32344, title: '九点四dd十峰科432技' },
      { key: 5545641, id: 3423, title: '就是计23xcvvcvx算机地方' },
      { key: 3432, id: 323353444, title: '九点四十峰543科技' },
      { key: 651, id: 2334, title: '就是计xcv算2332机地方' },
      { key: 2432, id: 3236544, title: '九点v3232四十峰科技' },
      { key: 72341, id: 2336544, title: '就是vxv计算机5454地方' },
      { key: 892, id: 534324, title: '九点四十323vxcv峰科技' },
      ];
    return (
      <View style={styles.container}>
        <ButtonBack {...this.props} />

        <SwipeableFlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          bounceFirstRowOnMount
          maxSwipeDistance={160}
          renderQuickActions={this.renderQuickActions}
        />

      </View>
    );
  }
}
