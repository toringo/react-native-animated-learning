import React from 'react';
import { View, Linking, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonBack from './ButtonBack';


export default class WebViewPage extends React.PureComponent {
  linking = () => {
    const url = 'mailto://toringona@gmail.com';
    Linking.canOpenURL(url).then((isOpen) => {
      if (isOpen) {
        Linking.openURL(url);
      } else {
        console.log('open url fail');
      }
    })
    .catch((err) => {
      console.log('open url error');
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ButtonBack onPress={() => this.props.navigation.goBack()} />
        <TouchableOpacity
          onPress={this.linking}
        >
          <Text>Linking Email</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
