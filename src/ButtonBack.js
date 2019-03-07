import React from 'react';
import { Button } from 'react-native';


export default class ButtonBack extends React.Component {
  render() {
    return (
      <Button
        title="GoBack"
        onPress={this.props.onPress || (() => this.props.navigation.goBack())}
      />
    );
  }
}
