import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, state } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <PanGestureHandler>
        <Animated.View style={styles.box} />
      </PanGestureHandler>
    </View>
  );
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
