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

const { width } = Dimensions.get('window');

// export default class Opacity extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//         animatedValue: new Animated.Value(0),
//       };

//       this.rotateAnimated = Animated.timing(
//           this.state.animatedValue,
//           {
//               toValue: 1,
//               duration: 3000,
//               easing: Easing.in,
//           }
//       );
//   }

//   _startAnimated() {
//       // this.fadeOutAnimated.start(() => this.state.fadeOutOpacity.setValue(1));
//       // this.rotateAnimated.start(() => this._startAnimated());
//       this.state.animatedValue.setValue(0);
//       this.rotateAnimated.start(() => this._startAnimated());
//   }

//   _stopAnimated() {
//     this.fadeOutAnimated.stop(() => this.state.fadeOutOpacity.setValue(0));
//   }

//   render() {
//     const rotateZ = this.state.animatedValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: ['0deg', '360deg', '0deg'],
//   });

//   const opacity = this.state.animatedValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: [0, 1, 0],
//   });

//   const rotateX = this.state.animatedValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: ['0deg', '180deg', '0deg'],
//   });

//   const textSize = this.state.animatedValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: [18, 32, 18],
//   });

//   const marginLeft = this.state.animatedValue.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: [0, 375, 0],
//   });

//   return (
//     <View style={styles.mainStyle}>

//       <Animated.View
//         style={{
//                   marginTop: 10,
//                   width: 100,
//                   height: 100,
//                   transform: [
//                       { rotateZ },
//                   ],
//               }}
//       >
//         <Image
//           style={{ width: 100, height: 100 }}
//           source={{ uri }}
//         />
//       </Animated.View>

//       <Animated.View
//         style={{
//                   marginTop: 10,
//                   width: 100,
//                   height: 100,
//                   opacity,
//                   backgroundColor: 'red',
//               }}
//       />

//       <Animated.Text
//         style={{
//                   marginTop: 10,
//                   width: 100,
//                   fontSize: 18,
//                   color: 'white',
//                   backgroundColor: 'red',
//                   transform: [
//                       { rotateX },
//                   ],
//               }}
//       >
//               窗外风好大，我没有穿褂。
//       </Animated.Text>

//       <Animated.Text
//         style={{
//                   marginTop: 10,
//                   height: 100,
//                   lineHeight: 100,
//                   fontSize: textSize,
//                   color: 'red',
//               }}
//       >
//               IAMCJ嘿嘿嘿
//       </Animated.Text>

//       <Animated.View
//         style={{
//                   marginTop: 10,
//                   width: 100,
//                   height: 100,
//                   marginLeft,
//                   backgroundColor: 'red',
//               }}
//       />

//       <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
//         <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
//       </TouchableOpacity>
//     </View>
//   );
//   }
// }

// export default class AnimatedSpring extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           springValue: new Animated.Value(1),
//       };

//       this.springAnimated = Animated.spring(
//           this.state.springValue,
//           {
//               toValue: 1,
//               friction: 2, // 弹跳系数
//               tension: 10, // 控制速度
//               // speed: 12,
//               // bounciness: 8,
//           }
//       );
//   }

//   _startAnimated() {
//       this.state.springValue.setValue(0.1);
//       this.springAnimated.start();
//   }

//   render() {
//       return (
//         <View style={styles.mainStyle}>

//           <Animated.View
//             style={{
//                       width: 282,
//                       height: 51,
//                       transform: [
//                           { scale: this.state.springValue },
//                       ],
//                   }}
//           >
//             <Image
//               ref="image"
//               style={{ width: 282, height: 51 }}
//               source={{ uri }}
//             />
//           </Animated.View>

//           <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
//             <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
//           </TouchableOpacity>
//         </View>
//       );
//   }
// }


// export default class AnimatedDecay extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           decayValue: new Animated.ValueXY({ x: 0, y: 0 }),
//       };

//       this.decayAnimated = Animated.decay(
//           this.state.decayValue,
//           {
//               velocity: 10, // 起始速度，必填
//               deceleration: 0.1, // 速度衰减比例，默认为0.997
//           }
//       );
//   }

//   _startAnimated() {
//       this.decayAnimated.start();
//   }

//   render() {
//       return (
//         <View style={styles.mainStyle}>

//           <Animated.View
//             style={{
//                       width: 100,
//                       height: 150,
//                       transform: [
//                           { translateX: this.state.decayValue.x }, // x轴移动
//                           { translateY: this.state.decayValue.y }, // y轴移动
//                       ],
//                   }}
//           >
//             <Image
//               ref="image"
//               style={{ width: 100, height: 150 }}
//               source={{ uri }}
//             />
//           </Animated.View>

//           <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
//             <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
//           </TouchableOpacity>
//         </View>
//       );
//   }
// }


// export default class AnimatedParallel extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           dogOpacityValue: new Animated.Value(1),
//           dogACCValue: new Animated.Value(0),
//       };

//       this.parallelAnimated = Animated.parallel(
//           [
//               Animated.timing(
//                   this.state.dogOpacityValue,
//                   {
//                       toValue: 1,
//                       duration: 1000,
//                   }
//               ),
//               Animated.timing(
//                   this.state.dogACCValue,
//                   {
//                       toValue: 1,
//                       duration: 2000,
//                       easing: Easing.linear,
//                   }
//               ),
//           ],
//           {
//               stopTogether: false,
//           }
//       );
//   }

//   _startAnimated() {
//       this.state.dogOpacityValue.setValue(0);
//       this.state.dogACCValue.setValue(0);
//       this.parallelAnimated.start();
//   }

//   render() {
//       // 透明度
//       const dogOpacity = this.state.dogOpacityValue.interpolate({
//           inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
//           outputRange: [0, 1, 0, 1, 0, 1],
//       });

//       // 项链上面
//       const neckTop = this.state.dogACCValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [350, 235],
//       });

//       // 眼镜左边
//       const left = this.state.dogACCValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [-120, 127],
//       });

//       // 眼镜旋转
//       const rotateZ = this.state.dogACCValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: ['0deg', '360deg'],
//       });

//       return (
//         <View style={styles.mainStyle}>

//           {/* // 狗头 */}
//           <Animated.View
//             style={{
//                       width: 375,
//                       height: 240,
//                       opacity: dogOpacity,
//                   }}
//           >
//             <Image
//               ref="image"
//               style={{ width: 375, height: 242 }}
//               source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551015990449&di=54c2df378a86ceb3deb25b6a164290eb&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fn12%2Fjfs%2Ft1987%2F270%2F1588647149%2F348782%2Fb6652944%2F566c5dd9N3bf7f8ba.jpg%2521q70.jpg' }}
//             />
//           </Animated.View>

//           {/* // 项链 */}
//           <Animated.View
//             style={{
//                       width: 250,
//                       height: 100,
//                       position: 'absolute',
//                       top: neckTop,
//                       left: 93,
//                   }}
//           >
//             <Image
//               ref="image"
//               style={{ width: 250, height: 100, resizeMode: 'stretch' }}
//               source={{ uri: 'http://img2.3png.com/cda380ea2eb9ac3c0e7e4cca03d7ff385fb4.png' }}
//             />
//           </Animated.View>

//           <View
//             style={{
//                       width: 375,
//                       height: 200,
//                       backgroundColor: 'white',
//                   }}
//           />

//           {/* // 眼镜 */}
//           <Animated.View
//             style={{
//                       width: 120,
//                       height: 25,
//                       position: 'absolute',
//                       top: 160,
//                       left,
//                       transform: [
//                           { rotateZ },
//                       ],
//                   }}
//           >
//             <Image
//               ref="image"
//               style={{ width: 120, height: 25, resizeMode: 'stretch' }}
//               source={{ uri: 'https://img30.360buyimg.com/n7/jfs/t20146/318/2431974442/35307/68e26027/5b558c92N98678b52.jpg' }}
//             />
//           </Animated.View>

//           <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
//             <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
//           </TouchableOpacity>
//         </View>
//       );
//   }
// }


// export default class AnimatedSequence extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           turnRotateValue: new Animated.Value(0),
//           turnShakeValue: new Animated.Value(0),
//           macValue: new Animated.Value(0),
//       };

//       this.sequenceAnimated = Animated.sequence(
//           [
//               Animated.timing(
//                   this.state.turnRotateValue,
//                   {
//                       toValue: 1,
//                       duration: 5000,
//                       easing: Easing.in,
//                       // useNativeDriver: true,
//                   }
//               ),
//               Animated.timing(
//                   this.state.turnShakeValue,
//                   {
//                       toValue: 1,
//                       duration: 500,
//                       easing: Easing.in,
//                       delay: 300,
//                       // useNativeDriver: true,
//                   }
//               ),
//               Animated.spring(
//                   this.state.macValue,
//                   {
//                       toValue: 1,
//                       friction: 3,
//                       tension: 10,
//                   }
//               ),
//           ]
//       );
//   }

//   _startAnimated() {
//       this.sequenceAnimated.start();
//   }

//   render() {
//       // 转盘旋转
//       const turnRotateZ = this.state.turnRotateValue.interpolate({
//           inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
//           outputRange: [
//               '0deg',
//               '180deg',
//               '360deg',
//               '720deg',
//               '1080deg',
//               '1800deg',
//               '2520deg',
//               '3060deg',
//               '3420deg',
//               '3600deg',
//               '3690deg',
//           ],
//       });

//       // 转盘震动
//       const marginLeft = this.state.turnShakeValue.interpolate({
//           inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
//           outputRange: [0, -40, 40, -40, 40, 0],
//       });

//       // MacTop
//       const macTop = this.state.macValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [-200, 150],
//       });

//       return (
//         <View style={styles.mainStyle}>

//           {/* // 转盘 */}
//           <Animated.View
//             style={{
//                       width: 300,
//                       height: 300,
//                       marginLeft,
//                       transform: [
//                           { rotateZ: turnRotateZ },
//                       ],
//                   }}
//           >
//             <Image
//               ref="image"
//               style={{ width: 300, height: 300 }}
//               source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551017189681&di=67c7bbe2f56b6b7c8dea0fedb043df83&imgtype=0&src=http%3A%2F%2Fpic57.nipic.com%2Ffile%2F20141230%2F20170631_135104414000_2.jpg' }}
//             />
//           </Animated.View>

//           {/* // mac */}
//           <Animated.View
//             style={{
//                       width: 300,
//                       height: 204,
//                       position: 'absolute',
//                       top: macTop,
//                       left: width / 2 - 150,
//                   }}
//           >
//             <Image
//               ref="image"
//               resizeMode="cover"
//               style={{ width: 300, height: 204 }}
//               source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551016981336&di=8b7bd9bf943826f5f30b204bfe856263&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F017034554b7cd2000001bf7286bbe1.jpg%401280w_1l_2o_100sh.jpg' }}
//             />
//           </Animated.View>

//           <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
//             <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
//           </TouchableOpacity>
//         </View>
//       );
//   }
// }

// export default class AnimatedStagger extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           redValue: new Animated.Value(0),
//           blueValue: new Animated.Value(0),
//       };

//       this.staggerAnimated = Animated.stagger(2000,
//           [
//               Animated.timing(
//                   this.state.redValue,
//                   {
//                       toValue: 1,
//                       duration: 5000,
//                       easing: Easing.in,
//                   }
//               ),
//               Animated.timing(
//                   this.state.blueValue,
//                   {
//                       toValue: 1,
//                       duration: 5000,
//                       easing: Easing.in,
//                   }
//               ),
//           ]
//       );
//   }

//   _startAnimated() {
//       this.staggerAnimated.start();
//   }

//   render() {
//       const redMarginLeft = this.state.redValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 200],
//       });

//       const blueMarginLeft = this.state.blueValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0, 200],
//       });

//       return (
//         <View style={styles.mainStyle}>

//           {/* // 红色 */}
//           <Animated.View
//             style={{
//                       width: 100,
//                       height: 100,
//                       backgroundColor: 'red',
//                       marginLeft: redMarginLeft,
//                   }}
//           >
//           </Animated.View>


//           {/* // 蓝色 */}
//           <Animated.View
//             style={{
//               width: 100,
//               height: 100,
//               backgroundColor: 'blue',
//               marginLeft: blueMarginLeft,
//             }}
//           >
//           </Animated.View>

//           <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
//             <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
//           </TouchableOpacity>
//         </View>
//       );
//   }
// }

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


// export default class App extends React.Component<Props, State> {
//   state: State;

//   props: Props;

//   state = {
//     w: 100,
//     h: 100,
//   };

//   _onPress = () => {
//     // Animate the update
//     LayoutAnimation.spring();
//     const { w } = this.state;
//     this.setState({ w: w + 15, h: this.state.h + 15 });
//   }

//   render() {
//     console.log('this.', this.state.w);
//     return (
//       <View style={styles.container}>
//         <View style={[styles.box, { width: this.state.w, height: this.state.h }]} />
//         <TouchableOpacity onPress={this._onPress}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Press me!</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// export default class App extends React.Component {
//   clearText = () => {
//     this._textInput.setNativeProps({ text: '' });
//   }

//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <TextInput
//           ref={component => this._textInput = component}
//           style={{ height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: '#ccc' }}
//         />
//         <TouchableOpacity onPress={this.clearText}>
//           <Text>Clear text</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const anima = {
//   duration: 1000, // 持续时间
//   create: {
//       type: LayoutAnimation.Types.spring,
//       property: LayoutAnimation.Properties.scaleXY,
//   },
//   update: {
//       type: 'easeOut',
//   },
// };

// export default class extends Component {
//   constructor(props) {
//       super(props);

//       this.state = {
//           width: 200,
//           height: 100,
//           left: 100,
//           top: 20,
//       };
//   }

//   _clickStartAnimation() {
//       LayoutAnimation.configureNext(anima, () => {
//           this.setState({
//               top: 20,
//           });
//       });
//       this.setState({
//           top: this.state.top + 200,
//       });
//   }

//   _setTimer() {
//       // 先开始一次动画
//       this._clickStartAnimation();
//       // 创建定时器
//       this.timer = setInterval(this._clickStartAnimation.bind(this), 1200);
//   }

//   render() {
//       return (
//         <View style={styles.mainStyle}>

//           <Image
//             style={{ width: this.state.width, height: this.state.height, position: 'absolute', left: this.state.left, top: this.state.top }}
//             source={{ uri }}
//           />

//           <View style={{
//                   width: 240,
//                   height: 120,
//                   position: 'absolute',
//                   left: 80,
//                   top: 200,
//                   backgroundColor: 'red',
//               }}
//           >
//             <Text style={{ color: '#FFD700', fontSize: 90, lineHeight: 104, width: 240, textAlign: 'center' }}>红包</Text>
//           </View>

//           <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: 'yellow', marginTop: 40 }} onPress={this._setTimer.bind(this)}>
//             <Text style={{ width: 200, height: 50, textAlign: 'center', lineHeight: 50 }}>点击开始动画</Text>
//           </TouchableOpacity>
//         </View>
//       );
//   }
// }

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
          <ButtonBack onPress={() => this.props.navigation.navigate('Main')} />
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
