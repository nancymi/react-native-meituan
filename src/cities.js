/**
 * Created by ncyang on 26/02/2017.
 */
import React, {Component} from 'react';
import _ from 'lodash';
import X2JS from 'x2js';

import {
    AppRegistry,
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    Platform,
    Dimensions,
    StyleSheet,
    Alert
} from 'react-native';

const {width, height} = Dimensions.get('window')
const SECTIONHEIGHT = 30, ROWHEIGHT = 40
const letters = _
    .range('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1)
    .map(n => String.fromCharCode(n).substr(0))
_.pull(letters, 'O', 'V')
let city = []
var totalheight = [];
var that = null
export default class List extends Component {
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };
        this.state = {
            dataSource: new ListView.DataSource({
                getRowData: getRowData,
                getSectionHeaderData: getSectionData,
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
        }
        that = this
    }

    async _getCityList() {
        let x2js = new X2JS();
        let url = 'http://www.meituan.com/api/v1/divisions/';
        try{
            let response = await fetch(url);
            let data = await response.text();
            let nameList = Array.from(x2js.xml2js(data).response.divisions.division);
            nameList.sort((a, b) => (a.id.localeCompare(b.id)));
            let c = _.groupBy(nameList, x => x.id[0]);
            return c;
            console.log(nameList);
        } catch(error){
            console.log(error);
        }
    }

    componentWillMount() {
        let data = this._getCityList();
        for (let j = 0; j < letters.length; j++) {
            let each = []
            for (let i = 0; i < data.length; i++) {
                if (letters[j] == data[i].id.substr(0, 1)) {
                    each.push(data[i].name);
                }
            }
            let _city = {}
            _city.index = letters[j]
            _city.name = each
            city.push(_city)
        }
    }

    componentDidMount() {
        var dataBlob = {};
        var sectionIDs = [];
        var rowIDs = [];

        for(let ii = 0;ii<city.length;ii++){
            var sectionName = 'Section ' + ii;
            sectionIDs.push(sectionName)
            dataBlob[sectionName] = letters[ii]
            rowIDs[ii] = [];

            for(let j = 0;j<city[ii].name.length;j++){
                var rowName = ii + '-' + j;
                rowIDs[ii].push(rowName)
                dataBlob[rowName] = city[ii].name[j]
            }
            var eachheight = SECTIONHEIGHT+ROWHEIGHT*city[ii].name.length
            totalheight.push(eachheight)
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        })
    }

    renderRow(rowData, rowId) {
        return (
            <TouchableOpacity
                key={rowId}
                style={{height:ROWHEIGHT,justifyContent:'center',paddingLeft:20,paddingRight:30}}
                onPress={()=>{that.changedata(rowData)}}>
                <View style={styles.rowdata}><Text style={styles.rowdatatext}>{rowData}</Text></View>

            </TouchableOpacity>
        )
    }

    renderSectionHeader = (sectionData, sectionID) => {
        return (
            <View style={{height:SECTIONHEIGHT,justifyContent:'center',paddingLeft:5}}>
                <Text style={{color:'rgb(40,169,185)',fontWeight:'bold'}}>
                    {sectionData}
                </Text>
            </View>
        )
    }

    renderLetters(letter, index) {
        return (
            <TouchableOpacity key={index} activeOpacity={0.6} onPress={()=>{this.scrollTo(index)}}>
                <View style={styles.letter}>
                    <Text style={styles.letterText}>{letter}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    changedata = (cityname) => {
        this.props.changeCity(cityname)
    }

    scrollTo = (index) => {
        let position = 0;
        for (let i = 0; i < index; i++) {
            position += totalheight[i]
        }
        this._listView.scrollTo({
            y: position
        })
    }

    render() {
        return (
            <View style={{height: Dimensions.get('window').height,marginBottom:10}}>
                <View style={{height: 50, width: 200}} >

                </View>
                <ListView
                    contentContainerStyle={styles.contentContainer}
                    ref={listView => this._listView = listView}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    enableEmptySections={true}
                    initialListSize={500}

                />
                <View style={styles.letters}>
                    {letters.map((letter, index) => this.renderLetters(letter, index))}
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    contentContainer: {
        width: width,
        backgroundColor: 'white',
    },
    letters: {
        position: 'absolute',
        height: height,
        top: 0,
        bottom: 0,
        right: 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    letter: {
        height: height * 3.3 / 100,
        width: width * 3 / 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    letterText: {
        textAlign: 'center',
        fontSize: height * 1.1 / 50,
        color: 'rgb(40,169,185)'
    },
    rowdata: {
        borderBottomColor: '#faf0e6',
        borderBottomWidth: 0.5
    },
    rowdatatext: {
        color: 'gray',
    }
})

AppRegistry.registerComponent('ReactNativeMeituan', () => CityListScene);