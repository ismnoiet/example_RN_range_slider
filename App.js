/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import RangeSlider from 'react-native-range-slider'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Demo</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={require('./react.png')} style={styles.img}/>
        </View>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.title}>Simple example(Normal slider):</Text>
          <RangeSlider
            disableRange={true}
            lineHeight={2}
            handleDiameter={18}
            minValue={0}
            maxValue={100}
            selectedMaximum={50}
            style={{ flex: 1, height: 70, marginTop: 20, padding: 10 }}
            onChange={(data) => { console.log('normal slider data: ', data); }}
          />
        </View>
        <View style={{ flexDirection: 'column', marginTop: 10 }}>
          <Text style={styles.title}>Standard range:</Text>
          <RangeSlider
            lineHeight={2}
            handleDiameter={18}
            minValue={0}
            maxValue={100}
            selectedMinimum={20}
            selectedMaximum={60}
            style={{ flex: 1, height: 70, marginTop: 20, padding: 10 }}
            onChange={(data) => { console.log('standard range slider data: ', data); }}
          />
        </View>
        <View style={{ flexDirection: 'column', marginTop: 10 }}>
          <Text style={styles.title}>Currency range:</Text>
          <RangeSlider
            lineHeight={2}
            handleDiameter={18}
            preffix="$"
            tintColor="#cc3956"
            tintColorBetweenHandles="#cc3956"
            minValue={0}
            maxValue={100}
            selectedMinimum={30}
            selectedMaximum={70}
            style={{ flex: 1, height: 70, marginTop: 20, padding: 10 }}
            onChange={(data) => { console.log('currency range slider data: ', data); }}
          />
        </View>
        <View style={{ flexDirection: 'column', marginTop: 10 }}>
          <Text style={styles.title}>Custom range:</Text>
          <RangeSlider
            lineHeight={3}
            handleDiameter={20}
            suffix="B"
            tintColor="#4635aa"
            handleColor="#7fae09"
            tintColorBetweenHandles="##21c625"
            minLabelColour="#828282"
            maxLabelColour="#6edefb"
            minValue={0}
            maxValue={100}
            selectedMinimum={30}
            selectedMaximum={70}
            style={{ flex: 1, height: 70, marginTop: 20, padding: 10 }}
            onChange={(data) => { console.log('custom range slider data: ', data); }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f6f6f6',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  img: {
    height: 70,
    width: 70,
  },
  title: {
    fontWeight: 'bold',
    padding: 10,
  }
});
