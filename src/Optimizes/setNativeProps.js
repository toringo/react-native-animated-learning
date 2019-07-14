// import React from 'react';
// import { Text, TouchableOpacity, View } from 'react-native';

// class MyButton extends React.Component {
//   setNativeProps = (nativeProps) => {
//     this._root.setNativeProps(nativeProps);
//   }

//   render() {
//     return (
//       <View ref={component => this._root = component} {...this.props}>
//         <Text>{this.props.label}</Text>
//       </View>
//     );
//   }
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <TouchableOpacity>
//         <MyButton label="Press me!" />
//       </TouchableOpacity>
//     );
//   }
// }

import React from 'react';
import { TextInput, Text, TouchableOpacity, View } from 'react-native';
import Screen from '../components/Screen';

// import

export default class App extends React.Component {
  clearText = (text) => {
    this._textInput.setNativeProps({ text });
  }

  render() {
    return (
      <Screen {...this.props}>
        <View style={{ }}>
          <TextInput
            onChange={e => this.clearText(e.nativeEvent.text)}
            ref={component => this._textInput = component}
            style={{ width: 200, height: 30, paddingVertical: 0, margin: 20, borderWidth: 1, borderColor: '#ccc', color: '#000' }}
          />
          <TouchableOpacity onPress={() => this.clearText('')}>
            <Text>Clear text</Text>
          </TouchableOpacity>
        </View>
      </Screen>

    );
  }
}
