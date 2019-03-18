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
    console.log('this.props', this.props);
    return (
      <View style={styles.container}>
        {/* <ButtonBack {...this.props} /> */}
        <Button
          onPress={() => this.props.navigation.navigate('Animate')}
          title="Animate"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Swiper')}
          title="SwiperFlatlist"
        />
        <Button
          onPress={() => this.props.navigation.navigate('StatusGradient')}
          title="StatusGradient"
        />


      </View>
    );
  }
}