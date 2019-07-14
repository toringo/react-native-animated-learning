

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
} from 'react-native';
import { data } from './MyFlatlist';


const { width } = Dimensions.get('window');

/**
 * 加载顺序:
 * 1.init
 * 2.next?
 * 3.load
 */


/**
 * attr item_img<string>    自动更换的图片值
 * props show<Bool> 是否初始化之后加载数据
 * extend minCount<int> 第一屏最小长度,继承之后可修改
 * extend header<function> 列表头部
 * extend footer<function> 列表底部
 * extend empty<function> 空列表渲染
 * extend renderItem<function> 渲染单个项
 * extend load<function> 加载数据的方法
 * extend imgKey<string> 自动替换图片的内容
 */
export default class List extends React.Component {
    static defaultProps = {
        show: false,
    }

    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            loadText: '',
            list: data.slice(0, 21),
        };
        this.pageIndex = -1;
        this.loading = false;
    }

    render() {
        return (
          <FlatList
            ref="flatlist"
            data={this.state.list}
            style={{ flex: 1, backgroundColor: '#f2f2f2' }}
            refreshing={this.state.refreshing}
            numColumns={1}
            onRefresh={() => this.refresh()}
            onEndReached={this.next}
            renderItem={({ item, index }) => (
              <View onLayout={e => this.setLayout(e, index)}>
                <Text>{index}</Text>
                {this.renderItem(item, index)}
              </View>
            )}
            extraData={this.state}
            keyExtractor={(item, index) => `${item.uri}-${index}`}
            onScroll={(e) => this._onScroll(e.nativeEvent)}
            scrollEventThrottle={100}
            initialNumToRender={2}
            ListHeaderComponent={this.header()}
            ListEmptyComponent={this.empty()}
            // removeClippedSubviews
            ListFooterComponent={this.footer()}
          />
);
    }

    componentWillMount() {
        if (this.props.show) this.next();
    }

    componentWillReceiveProps(pp) {
        if (pp.show != this.props.show && pp.show) this.next();
    }

    pageIndex = -1;

    loading = false;

    /**
     * 要替换的图片值:可继承
     */
    imgKey = 'image';

    /**
     * 可继承,最小长度,将显示底部信息
     */
    minCount = 10;

    /**
     * 记录所有项的高度
     */
    layout = [];

    /**
     * 刷新页面的定时器
     */
    timer = null;

    refresh() {
        this.pageIndex = -1;
        this.loading = false;
        this.setState({ list: [] });
        this.next();
    }

    next = () => {
      console.log('this.loading', this.loading, this.pageIndex);
        if (this.loading) return;
        this.loading = true;
        this.pageIndex++;
        this.setState({ loadText: '加载中...' });
        const datas = this.load(this.pageIndex);
        console.log('next', datas);
        if (!datas || datas.length === 0) {
            if (this.state.list.length > this.minCount) this.setState({ loadText: '已经到底了' });
            if (this.state.list.length <= this.minCount) this.setState({ loadText: '' });
            return;
        }
        datas.forEach((item, index) => {
            item.index = item.uri + this.pageIndex;
            item.show = false;
        });
        this.setState({ list: this.state.list.concat(datas) });
        this.loading = false;
        if (this.pageIndex == 0) this.showImage(0);
    }

    header() {
        return null;
    }

    footer() {
        return (
          <View style={listStyle.loading}>
            <Text>{this.state.loadText}</Text>
          </View>
);
    }

    empty() {
        return (
          <View style={listStyle.empty}>
            <Text style={listStyle.emptyTxt}>暂无该项</Text>
          </View>
);
    }

    setLayout(e, index) {
        this.layout[index] = e.nativeEvent.layout.height;
    }

    _onScroll(e) {
        const { y } = e.contentOffset;
        let index = 0;
        let curr = 0;
        // console.log('_onScroll', e.contentOffset);
        while (y > curr) {
            if (!this.layout[index]) break;
            curr += this.layout[index];
            index++;
        }
        console.log(`当前第${index}行`);
        this.showImage(index);
    }

    showImage(index) {
        if (this.timer) return;
        this.timer = setTimeout(() => {
            console.log(`延迟显示:当前第${index}行`);
            const list = this.state.list.filter((item, i) => {
                item.show = i >= index - 2 && i < index + 5;
                return item;
            });
            this.setState({ list });
            if (this.timer) clearTimeout(this.timer);
            this.timer = null;
        }, 200);
    }

    /**
     * 可继承,渲染子项目
     */
    renderItem(item, index) {
        // return <View onLayout={e => this.setLayout(e, index)} />;
      return (<Image style={{ width, height: 1080 / (1920 / width) }} source={{ uri: item.uri }} resizeMode="cover" />);
    }

    /**
     * 可继承,加载数据
     */
    load(pageIndex) {
      return data.slice(0, 20 + 10 * pageIndex);
    }
}

const listStyle = StyleSheet.create({
    empty: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyTxt: {
        color: '#ccc',
    },
    loading: {
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
