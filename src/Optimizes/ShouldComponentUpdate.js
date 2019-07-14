import React, { Component, PureComponent } from 'react';
import { View, InteractionManager, TouchableOpacity, Text, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// export default class ShouldPure extends Component {
export default class ShouldPure extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      a: '点我看看会不会re-render',
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.a !== this.state.a;
  // }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      // this.setState({ renderPlaceholderOnly: false });
    });
  }

  render() {
    console.log('重新渲染   re-render------------------', width);
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ backgroundColor: '#2090FF', padding: 8 }} onPress={() => this.setState({ a: this.state.a })}>
          <Text>{this.state.a}</Text>
        </TouchableOpacity>
        <Image style={{ width }} resizeMode="contain" source={require('../imgs/purecomponent.png')} />
      </View>
    );
  }
}
