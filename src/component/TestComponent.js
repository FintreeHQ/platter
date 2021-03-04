import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../constants/colors';

const TestComponent = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary
  },
  text: {
    color: colors.white
  }
})

TestComponent.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
}

export default TestComponent;