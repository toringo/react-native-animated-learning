import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      enabled: true,
    };
  }

  render() {
  return (
    <ScrollView scrollEnabled={this.state.enabled}>
      <View style={{ height: 600, backgroundColor: '#527FF6' }} />
      <View style={{ height: 2000, backgroundColor: '#E0ECFE' }}>
        <ScrollView
          onTouchStart={(ev) => { this.setState({ enabled: false }); }}
          onMomentumScrollEnd={(e) => { this.setState({ enabled: true }); }}
          onScrollEndDrag={(e) => { this.setState({ enabled: true }); }}
          style={{ margin: 10, maxHeight: 200 }}
        >
          <View style={{ height: 200, backgroundColor: '#B0F566' }} />
          <View style={{ height: 200, backgroundColor: '#4AF2A1' }} />
          <View style={{ height: 200, backgroundColor: '#5CC9F5' }} />
          <View style={{ height: 200, backgroundColor: '#6638F0' }} />
          <View style={{ height: 200, backgroundColor: '#30C69D' }} />
          <View style={{ height: 200, backgroundColor: 'pink' }} />
          <View style={{ height: 200, backgroundColor: '#B0F566' }} />
          <View style={{ height: 200, backgroundColor: '#4AF2A1' }} />
          <View style={{ height: 200, backgroundColor: '#5CC9F5' }} />
          <View style={{ height: 200, backgroundColor: '#6638F0' }} />
          <View style={{ height: 200, backgroundColor: '#30C69D' }} />
          <View style={{ height: 200, backgroundColor: 'pink' }} />
        </ScrollView>
      </View>
    </ScrollView>
  );
}
}
