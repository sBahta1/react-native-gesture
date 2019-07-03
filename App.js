import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, state } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor() {
    super();
    this.translateX = new Animated.Value(0)
    this.onGestureEvent = Animated.event([
      {
        nativeEvent: {
          translationX: this.translateX
        }
      }
    ])
  }
  render() {
    return (
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={this.onGestureEvent}>
          <Animated.View
            style={[
              styles.box,
              {
                transform: [{ translateX: this.translateX }]
              }
            ]}
          />
        </PanGestureHandler>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
});
