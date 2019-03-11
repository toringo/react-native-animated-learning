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

const anima = {
  duration: 1000, // 持续时间
  create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
      type: 'linear',
  },
};

export default class extends Component {
  constructor(props) {
      super(props);

      this.state = {
          width: 250,
          height: 125,
          show: false,
      };
  }

  _clickStartAnimation() {
      // LayoutAnimation.configureNext(anima, () => {});
      // LayoutAnimation.configureNext(LayoutAnimation.create(
      //   1000,
      //   LayoutAnimation.Types.linear,
      //   LayoutAnimation.Properties.scaleXY,
      // ));
      LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
      this.setState({
          show: true,
      });
  }

  render() {
      const secondMoney = this.state.show ? (
        <Image
          style={{ width: this.state.width, height: this.state.height }}
          source={{ uri }}
        />
      ) : null;

      return (
        <View style={styles.mainStyle}>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />
          <Image
            style={{ width: this.state.width, height: this.state.height }}
            source={{ uri }}
          />

          {secondMoney}

          <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: 'yellow', marginTop: 40 }} onPress={this._clickStartAnimation.bind(this)}>
            <Text style={{ width: 200, height: 50, textAlign: 'center', lineHeight: 50 }}>魔法现金</Text>
          </TouchableOpacity>
        </View>
      );
  }
}
