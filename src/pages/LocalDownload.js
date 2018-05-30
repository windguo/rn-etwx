import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    Linking,
    View,
    Dimensions,
    Animated,
    Easing,
    PanResponder,
    Platform,
    ActivityIndicator,
    TouchableOpacity,
    StatusBar,
    InteractionManager,
    BackHandler,
    ScrollView,
    TouchableWithoutFeedback,
    RefreshControl,
    DeviceEventEmitter,
    LayoutAnimation,
    NativeModules,
    ImageBackground,
    FlatList
} from 'react-native';
import { ifIphoneX } from '../utils/iphoneX';
import HttpUtil from '../utils/HttpUtil';
import storageKeys from '../utils/storageKeyValue'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import * as WeChat from 'react-native-wechat';
import HTMLView from 'react-native-htmlview';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export default class LocalDownload extends Component {
    static navigationOptions = {
        tabBarLabel: '我的本地缓存',
        tabBarIcon: ({ tintColor, focused }) => (
            <IconSimple name="cloud-download" size={22} color={focused ? '#fe5f01' : 'black'} />
        ),
        header: ({ navigation }) => {
            return (
                <ImageBackground style={{ ...header }} source={require('../assets/backgroundImageHeader.png')} resizeMode='cover'>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                        navigation.goBack(null);
                    }}>
                        <View style={{ justifyContent: 'center', marginLeft: 10, alignItems: 'center', height: 43.7, width: 20 }}>
                            <IconSimple name="arrow-left" size={20} color={'#ffffff'} />
                        </View>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 17, textAlign: 'center', fontWeight: '300', lineHeight: 43.7, color: 'white' }}>我的本地缓存</Text>
                    <TouchableOpacity activeOpacity={1} onPress={() => {
                    }}>
                        <View style={{ justifyContent: 'center', marginRight: 10, alignItems: 'center', height: 43.7, backgroundColor: 'transparent', width: 20 }}>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            )
        }
    };
    render (){
        return (
            <View>
                <Text>localDownload</Text>
            </View>
        )
    }
}

const header = {
    backgroundColor: '#ff2953',
    ...ifIphoneX({
        paddingTop: 44,
        height: 88
    }, {
            paddingTop: Platform.OS === "ios" ? 20 : SCALE(StatusBarHeight()),
            height: 64,
        }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
}