import React, { Component } from 'react';
import { View, StyleSheet, Animated, Image, Easing } from 'react-native';
import { Constants } from 'expo';

const AnimatedImage = Animated.createAnimatedComponent(Image);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: new Animated.Value(1)
    }
  }

  componentDidMount () {
    this._loopAnimationUp();
  }

  _loopAnimationUp() {
    this.state.size.setValue(1);
    Animated.timing(this.state.size, {
      toValue: 10,
      duration: 5000,
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationDown();
      }
    });
  }

  _loopAnimationDown() {
    this.state.size.setValue(10);
    Animated.timing(this.state.size, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear
    }).start((o) => {
      if (o.finished) {
        this._loopAnimationUp();
      }
    });
  }

  render() {
    const size = this.state.size.interpolate({
      inputRange: [1, 10],
      outputRange: [10, 50],
      extrapolate: 'clamp',
    });

    return (
      <View style={styles.container}>
     
        <AnimatedImage
          style={[styles.image, {
            width: size,
            height: size,
          }]}
          source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2oWgH9kOzuUwFy3QB4IRlbbuqN4L7Z-3F7S9mqlzN91Cmbb1H'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
  },
  image: {
    justifyContent:'center',
    backgroundColor:'transparent'
  },
});