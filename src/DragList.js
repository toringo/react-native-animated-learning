import React, { Component } from 'react';
import { Animated, FlatList, Text, Dimensions, Easing, PanResponder, StyleSheet, TouchableHighlight, View } from 'react-native';
import SortableListView from 'react-native-sortable-listview';

import ButtonBack from './ButtonBack';

const data = {
  hello: { text: 'world' },
  how: { text: 'are you' },
  test: { text: 123 },
  this: { text: 'is' },
  a: { text: 'a' },
  real: { text: 'real' },
  drag: { text: 'drag and drop' },
  bb: { text: 'bb' },
  cc: { text: 'cc' },
  dd: { text: 'dd' },
  ee: { text: 'ee' },
  ff: { text: 'ff' },
  gg: { text: 'gg' },
  hh: { text: 'hh' },
  ii: { text: 'ii' },
  jj: { text: 'jj' },
  kk: { text: 'kk' },
};

const order = Object.keys(data); // Array of keys

class RowComponent extends React.Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor="#eee"
        style={{
          padding: 25,
          backgroundColor: '#F8F8F8',
          borderBottomWidth: 1,
          borderColor: '#eee',
        }}
        {...this.props.sortHandlers}
      >
        <Text>{this.props.data.text}</Text>
      </TouchableHighlight>
    );
  }
}

// eslint-disable-next-line react/no-multi-comp
class MyComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ButtonBack onPress={() => this.props.navigation.goBack()} />
        <SortableListView
          style={{ flex: 1 }}
          data={data}
          order={order}
          onRowMoved={e => {
          order.splice(e.to, 0, order.splice(e.from, 1)[0]);
          this.forceUpdate();
        }}
          renderRow={row => <RowComponent data={row} />}
        />
      </View>
    );
  }
}

export default MyComponent;
