import React from 'react';
import { View, Clipboard, Text, TouchableHighlight } from 'react-native';

import Toast from 'react-native-root-toast';

import ButtonBack from './ButtonBack';


export default class Clipboards extends React.PureComponent {
  clipboard = (email) => {
    Clipboard.setString(email);
    Clipboard.getString().then(res => {
      const toast = Toast.show(email, {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 0.7,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        },
      });
      setTimeout(() => {
        Toast.hide(toast);
      }, 4000);
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ButtonBack onPress={() => this.props.navigation.goBack()} />
        <TouchableHighlight
          style={{ padding: 15 }}
          onPress={() => this.clipboard('toringona@gmail.com')}
        >
          <Text>click Copy Email: toringona@gmail.com</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
