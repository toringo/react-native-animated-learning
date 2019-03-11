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

export default class AnimatedStagger extends Component {
  constructor(props) {
      super(props);

      this.state = {
          redValue: new Animated.Value(0),
          blueValue: new Animated.Value(0),
      };

      this.staggerAnimated = Animated.stagger(2000,
          [
              Animated.timing(
                  this.state.redValue,
                  {
                      toValue: 1,
                      duration: 5000,
                      easing: Easing.in,
                  }
              ),
              Animated.timing(
                  this.state.blueValue,
                  {
                      toValue: 1,
                      duration: 5000,
                      easing: Easing.in,
                  }
              ),
          ]
      );
  }

  _startAnimated() {
      this.staggerAnimated.start();
  }

  render() {
      const redMarginLeft = this.state.redValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200],
      });

      const blueMarginLeft = this.state.blueValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200],
      });

      return (
        <View style={styles.mainStyle}>
          <ButtonBack onPress={() => this.props.navigation.goBack()} />

          {/* // 红色 */}
          <Animated.View
            style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'red',
                      marginLeft: redMarginLeft,
                  }}
          >
          </Animated.View>


          {/* // 蓝色 */}
          <Animated.View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'blue',
              marginLeft: blueMarginLeft,
            }}
          >
          </Animated.View>

          <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
            <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
          </TouchableOpacity>
        </View>
      );
  }
}
