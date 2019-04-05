// @flow
import React, { Component } from 'react';
import {
  Animated,
  View,
  Text,
  Image,
  StyleSheet,
  Easing,
  TouchableOpacity,
  Dimensions,
  NativeModules,
  LayoutAnimation,
  TextInput,
} from 'react-native';
import ButtonBack from '../ButtonBack';

// const styles = StyleSheet.create({

// });

const uri = 'http://pic17.nipic.com/20111021/8633866_210108284151_2.jpg';


type Props = {

};

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental
  && UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

// type Props = {};

type State = {
  w: number
};


export default class App extends React.Component<Props, State> {
  state: State;

  props: Props;

  state = {
    w: 100,
    h: 100,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    const { w } = this.state;
    this.setState({ w: w + 15, h: this.state.h + 15 });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
