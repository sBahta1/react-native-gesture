import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const {
  set,
  cond,
  eq,
  add,
  spring,
  startClock,
  stopClock,
  cloclRunning,
  sub,
  defined,
  Value,
  Clock,
  event,
} = Animated;

export default class App extends React.Component {
  constructor() {
    super();
    this.translateX = new Value(0)
    const dragX = new Value(0)
    const state = new Value(-1)

    this.onGestureEvent = event([
      {
        nativeEvent: {
          translationX: dragX,
          state: state
        }
      }
    ]);

    const transX = new Value();
    this.translateX = cond(
      eq(state, State.ACTIVE),
      [
        //state active
        set(transX,dragX),
        transX
      ],
      [
        //state inactive
        set(transX,0),
        transX
      ])
  }

  render() {
    return (
      <View style={styles.container}>
        <PanGestureHandler onGestureEvent={this.onGestureEvent}
          onHandlerStateChange={this.onGestureEvent}>
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
