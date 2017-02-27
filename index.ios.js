/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import BaseScene from './src/base.js';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
} from 'react-native';

const defaultRoute = {
    component: BaseScene
};

export default class ReactNativeMeituan extends Component {
    _renderScene(route, navigator) {
        let Component = route.component;
        return (
            <Component {...route.params} navigator={navigator} />
        );
    }

    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                renderScene={this._renderScene} >
            </Navigator>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeMeituan', () => ReactNativeMeituan);
