/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import BaseScene from './src/base.js';

import {
    AppRegistry,
    Navigator
} from 'react-native';

export default class ReactNativeMeituan extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: BaseScene}}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
            }} />
        );
    }
}

AppRegistry.registerComponent('ReactNativeMeituan', () => ReactNativeMeituan);
