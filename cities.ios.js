/**
 * Created by ncyang on 26/02/2017.
 */
import React, { Component } from 'react';
import {getMoviesFromApiAsync} from './src/fetchCities.js';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class CityListScene extends Component {
    render() {
        getMoviesFromApiAsync();
        return (
            <View>
                <Text>haha</Text>
            </View>
        );
    }
}

AppRegistry.registerComponent('ReactNativeMeituan', () => CityListScene);