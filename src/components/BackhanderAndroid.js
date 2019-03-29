import { BackHandler } from 'react-native';

export default class BackHandlerAndroid {
  constructor(props) {
    this.props = props;
  }

  componentDidMount() {
    if (this.props.handleBack) BackHandler.addEventListener('hardwareBackPress', this.props.handleBack);
  }

  componentWillUnmount() {
    if (this.props.backPress) BackHandler.removeEventListener('hardwareBackPress', this.props.handleBack);
  }
}
