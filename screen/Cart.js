/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList, TouchableOpacity, Image, TextInput, StatusBar, ScrollView } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    Header,
    SearchBar
} from 'react-native-elements';

const primary = '#2e3190';
const secondary = '#fab917';

const CartScreen = props => {
     return (
        <View style={styles.container}>
            <Header backgroundColor={primary} />

        </View>
     );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderWidth: 0,
      },
});

export default CartScreen;