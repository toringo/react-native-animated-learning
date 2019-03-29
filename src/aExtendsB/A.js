/*
 * @Author: toringo
 * @Date: 2019-03-28 22:14:10
 * @Last Modified by: tori
 * @Last Modified time: 2019-03-29 08:10:51
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types';

export default class A extends Component {
    static propTypes = {
        isHide: PropTypes.bool,
    };

    constructor(props) {
        super(props);
        console.log('aaa', this.props);
        this.state = {
            isHide: this.props.isHide,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { isHide } = nextProps;
        if (prevState.isHide !== isHide) {
            return {
                isHide,
            };
        }
        return null;
    }

    renderIcon = () => (
      <FontAwesome
        name={this.state.isHide ? 'star' : 'star-o'}
        size={26}
        style={{ color: '#4E7CFE' }}
      />
    )

    renderClose = () => (
      <FontAwesome
        name="close"
        size={26}
        style={{ color: '#4E7CFE' }}
      />
    )

    renderName = () => (
      <Text>{this.props.name}</Text>
    )
}
