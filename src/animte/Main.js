/* @flow */

import React, { Component } from 'react';
import { StyleSheet, Text, View, SwipeableFlatList, TouchableHighlight, Button } from 'react-native';
import ButtonBack from '../ButtonBack';

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
    // console.log('this.props', this.props);
    return (
      <View style={styles.container}>
        <ButtonBack onPress={() => this.props.navigation.navigate('Main')} />
        <Button
          onPress={() => this.props.navigation.navigate('Animated')}
          title="Animated"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AnimatedSpring')}
          title="Animated.spring"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AnimatedDecay')}
          title="Animated.decay"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AnimatedParallel')}
          title="Animated.parallel"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AnimatedStagger')}
          title="Animated.stagger"
        />
        <Button
          onPress={() => this.props.navigation.navigate('AnimatedSequence')}
          title="Animated.sequence"
        />


        <Button
          onPress={() => this.props.navigation.navigate('LayoutAnimationSpring')}
          title="LayoutAnimationSpring"
        />
        <Button
          onPress={() => this.props.navigation.navigate('LayoutAnimationRepeat')}
          title="LayoutAnimationRepeat"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Swiper')}
          title="SwiperFlatlist"
        />
        <Button
          onPress={() => this.props.navigation.navigate('StatusGradient')}
          title="StatusGradient"
        />


        <Button
          onPress={() => this.props.navigation.navigate('PanResponderAnimated')}
          title="PanResponderAnimated"
        />

        <Button
          onPress={() => this.props.navigation.navigate('BottomPanResponseHeightAnimated')}
          title="BottomPanResponseHeightAnimated"
        />

        <Button
          onPress={() => this.props.navigation.navigate('BottomResponseHeightAnimated')}
          title="BottomResponseHeightAnimated"
        />


      </View>
    );
  }
}
