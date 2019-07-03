import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

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
    ],
      { useNativeDriver: true }
    );
  }
  onHandlerStateChange = event => {
    if (event.nativeEvent.oldState == State.ACTIVE) {
      Animated.timing(this.translateX, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onHandlerStateChange}>
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
    alignItems: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
});
