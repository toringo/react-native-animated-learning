# react-native 动画详解

> ### 文章大多为参考前辈， 自己书写一边职位熟悉。

### Animated简介

#### Animated 的两种类型值
- Animated.Value(), 可绑定到样式或其他属性上， 也可进行差值运算。
- Animated.ValueXY(), 可用在人一多个属性上。

#### Animated用于创建动画的发放
- Animated.timing(animateValue, conf<Object>); 按照曲线随时间变化的动画类型.  
```
  <!-- conf的参数 -->
  {
    toValue: number;  到达目标值；
    duration: number; 动画持续时长， 单位毫秒， 默认500；
    easing: string; 定义曲线的渐变函数， 有linear、ease、elastic、bezier等，iOS默认为Easing.inOut(Easing.ease)
    delay: 开始动画前的延迟时间, 单位毫秒，默认为0。
  }
```
- Animated.spring(animateValue, conf<Object>); 弹簧效果  
```
  toValue: number;  到达目标值；
  friction: number; 控制弹跳系数，夸张系数， 默认7.
  tension: number;  控制速度， 默认40.
  speed: number;  动画速度，默认12.
  bounciness: number; 反弹系数， 默认为8.
```
> *注意:* 后面两个属性和前面的冲突， 所以为两种使用方式。
- Animated.decay(animateValue, conf<Object>); 衰变现象， 以一个初始的速度和一个衰减系数逐渐减慢变为0  
```
{
  toValue: number;  到达目标值；
  velocity: number;  起始速度，必填参数。
  deceleration: number;  速度衰减比例，默认为0.997。
}
```

#### Animated 实现组合动画的主要方式
- Animated.parallel(); 同时开始动画数组里的所有动画， 其中一个停止都停止，可用stopTogether选项设置false来取消。  
```
{
  stopTogether: boolean; false取消动画之间的关联
}
```
- Animated.sequence(Animates<Array>); 一个接一个动画执行， 当当前停止，后面不在继续。  

- Animated.stagger(delayTime<Number>, Animates<Array>); delayTime 为指定的延迟时间（毫秒）,传入时间参数来延迟每个动画之间的时间，当第一个开始后每隔时长执行下一个动画， 不依赖洗衣歌是否完成。  
```

```

#### Animated 封装的四个动画组件
- Animated.View
- Animated.Text
- Animated.ScrollView
- Animated.Image
#### 插值函数
- interpolate()：将输入值范围转换为输出值范围。
```
  const redMarginLeft = this.state.redValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const blueMarginLeft = this.state.blueValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });
```
### 动画的原理
![783c88241cd94ba1f0bcce85e440d661.jpeg](evernotecid://3AE7395A-18B2-48BD-BCF0-347135689B72/appyinxiangcom/6630522/ENResource/p3201)

- 遍历传入的props，查找是否有Animated.Value的实例，并绑定相应的DOM操作。
- 每次props变更或者组件unmount的时候，停止监听数据绑定事件，避免了条件竞争和内存泄露问题。
- 将初始传入的Animated.Value值逐个转化为普通数值，再交给原生的React组件进行渲染。  

综上，通过封装一个Animated的元素，内部通过数据绑定和DOM操作变更元素，结合React的生命周期完善内存管理，解决条件竞争问题，对外表现则与原生组件相同，实现了高效流畅的动画效果。


> *参考文章*
-  [动画API详解](https://www.jianshu.com/p/7fd37d8ed138)  
-  [动画原理](http://www.alloyteam.com/2016/01/reactnative-animated/)