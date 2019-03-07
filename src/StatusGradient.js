/* @flow */
import React, { Component } from 'react';

import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';
import {
  RectButton,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';

import {
  createAppContainer,
  SafeAreaView,
  createStackNavigator,
} from 'react-navigation';
import ButtonBack from './ButtonBack';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  description: {
    fontSize: 13,
    color: '#999',
  },
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    position: 'absolute',
    top: -100,
    height: 300,
    left: 0,
    right: 0,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 16,
  },
  bannerImage: {
    // width: 100,
    height: 100,
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    marginVertical: 8,
    marginRight: 5,
  },
});

type Props = {};

export default class Swiper extends Component<Props> {
  state = {
    scrollY: new Animated.Value(0),
  };

  componentDidMount() {
  }

  render() {
    const data = [
      { key: 1, id: 2343, title: '就是计算57机地方' },
      { key: 2, id: 33424, title: '九点四567十峰科技' },
      { key: 13, id: 2343, title: '就是计7算机地方' },
      { key: 245, id: 32344, title: '九点57四十峰科技' },
      { key: 165, id: 2343, title: '就是756计算机地方' },
      { key: 24, id: 33424, title: '九点四757十峰科技' },
      { key: 134, id: 2343, title: '就是计56756算机地方' },
      { key: 32, id: 32344, title: '九点5757四十峰科技' },
      { key: 541, id: 3423, title: '就是计756算机地方' },
      { key: 32345, id: 32344, title: '九点5四十峰科技' },
      { key: 61, id: 2334, title: '就是计算机地4方' },
      { key: 22, id: 32344, title: '九点四76十峰科技' },
      { key: 71, id: 233654, title: '就是计88算机地方' },
      { key: 892, id: 32344, title: '九点四67十峰67科技' },
      { key: 282, id: 323344, title: '九点四十76峰科技' },
      { key: 771, id: 233654, title: '就是计67算机地方' },
      { key: 89276, id: 32544, title: '九点四76十767峰科技' },
      ];
    const { navigation } = this.props;

    const scale = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [2, 1, 0.8],
      extrapolate: 'clamp',
    });

    const translateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [-150, 0, 40],
    });

    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, 80],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View style={{ flex: 1 }}>
        <Animated.ScrollView
          style={{ flex: 1, backgroundColor: '#eee' }}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          <Animated.View
            style={{ opacity, transform: [{ scale }, { translateY }] }}
          >
            <SafeAreaView
              style={styles.bannerContainer}
              forceInset={{ top: 'never', bottom: 'never' }}
            >
              <View style={styles.banner}>
                <Image
                  resizeMode="cover"
                  source={{ uri: 'http://b.hiphotos.baidu.com/image/pic/item/060828381f30e92409ccc9ce46086e061c95f7e1.jpg' }}
                  style={styles.bannerImage}
                />
              </View>
            </SafeAreaView>
          </Animated.View>

          <SafeAreaView
            forceInset={{ top: 'never', bottom: 'always' }}
            style={{ backgroundColor: '#eee' }}
          >
            <ButtonBack {...this.props} />
            <View style={{ backgroundColor: '#fff' }}>
              {data.map(item => (
                <View style={styles.item} key={item.key}>
                  <Text style={styles.title}>
                    {item.title}
                  </Text>
                  <Text style={styles.description}>
                    {item.title}
                  </Text>
                </View>
                ))}
            </View>
          </SafeAreaView>
        </Animated.ScrollView>
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}
