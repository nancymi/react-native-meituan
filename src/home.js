/**
 * Created by ncyang on 26/02/2017.
 */
import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import CityListScene from './cities.js';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableHighlight
} from 'react-native';

export default class HomeScene extends Component {
    render() {
        return (
            <View style={{
                width: Dimensions.get('window').width,
                height: 80,
                flexDirection: 'column',
                backgroundColor: '#2EBBB7'
            }}>
                <View style={{flex: 1}}/>
                <View style={{flex: 2, flexDirection: 'row'}}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{color: '#ffffff'}}>西安  </Text>
                        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                            <Image source={require('./../assets/images/magnifying_glass_16dp.png')} />
                        </TouchableHighlight>
                    </View>
                    <View style={{
                        flex: 3,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image style={{
                            flex: 1,
                            resizeMode: Image.resizeMode.contain
                        }} source={require('./../assets/images/search_screenshot.png')} />
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={require('./../assets/images/qr-code-scan.png')} />
                        <Text style={{color: '#ffffff'}}>  </Text>
                        <Image source={require('./../assets/images/ring.png')} />
                    </View>
                </View>
            </View>
        );
    }

    _onPressButton() {
        this.props.navigator.push({
            component: CityListScene
        });
    }
}

AppRegistry.registerComponent('ReactNativeMeituan', () => HomeScene);