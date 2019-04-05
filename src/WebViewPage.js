import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import ButtonBack from './ButtonBack';

import BackhanderAndroid from './components/BackhanderAndroid';

export default class WebViewPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false,
    };
    this.handleBack = new BackhanderAndroid({ handleBack: this.goback });
  }

  navigations = 0;

  componentDidMount() {
    this.handleBack.componentDidMount();
  }

  componentWillUnmount() {
    this.handleBack.componentWillUnmount();
  }

  onNavigationStateChange = (e) => {
    console.log('onNavigationStateChange', e);
    this.setState({
      canGoBack: e.canGoBack,
      // url: e.url,
    });
  }

  apage = () => '<div><h1>hello webview!</h1><a href="https://www.baidu.com/" target="_blank">baidu</a></div>'

  goback = () => {
    if (this.state.canGoBack) {
      this.webview.goBack();
    } else {
      this.props.navigation.goBack();
    }
    return true;
  }

  onLoad=() => {
    const runFirst = `
      document.body.style.backgroundColor = 'grey';
      true; // note: this is required, or you'll sometimes get silent failures
    `;
    this.webview.injectJavaScript(runFirst);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ButtonBack onPress={this.goback} />
        <WebView
          style={{ flex: 1 }}
          ref={ref => { this.webview = ref; }}
          startInLoadingState
          automaticallyAdjustContentInsets
          // scalesPageToFit
          // originWhitelist={['*']}
          onNavigationStateChange={this.onNavigationStateChange}
          // source={{ uri: 'https://www.baidu.com' }}
          source={{ html: this.apage() }}
          onLoadEnd={this.onLoad}
        />
      </View>
    );
  }
}
