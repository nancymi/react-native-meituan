/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import TitleBar from './home.ios.js';
import CityListScene from './cities.ios.js';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ReactNativeMeituan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (
            <TabNavigator>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'home'}
                  title="首页"
                  renderIcon={() => <Image source={require('./assets/images/ic_home_black_24dp.png')}/>}
                  renderSelectedIcon={() => <Image source={require('./assets/images/ic_home_pressed_24dp.png')}/>}
                  onPress={() => this.setState({selectedTab: 'home'})}>
                  <TitleBar></TitleBar>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'nearby'}
                  title="附近"
                  renderIcon={() => <Image source={require('./assets/images/ic_pin_drop_black_24dp.png')}/>}
                  renderSelectedIcon={() => <Image source={require('./assets/images/ic_pin_drop_pressed_24dp.png')}/>}
                  onPress={() => this.setState({selectedTab: 'nearby'})}>
                <View>
                  <Text>Nearby</Text>
                </View>
              </TabNavigator.Item>
              <TabNavigator.Item
                  selected={this.state.selectedTab === 'profile'}
                  title="我的"
                  renderIcon={() => <Image source={require('./assets/images/ic_account_circle_24dp.png')}/>}
                  renderSelectedIcon={() => <Image source={require('./assets/images/ic_account_circle_pressed_24dp.png')}/>}
                  onPress={() => this.setState({selectedTab: 'profile'})}>
                <View>
                  <Text>Profile</Text>
                </View>
              </TabNavigator.Item>
            </TabNavigator>
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

AppRegistry.registerComponent('ReactNativeMeituan', () => CityListScene);
