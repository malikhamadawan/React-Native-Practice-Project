import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const PrimaryButton = ({Log, backgroundcolor}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundcolor}]}
      activeOpacity={0.5}>
      <Text style={styles.buttontext}>{Log}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '78%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b83f2',
    marginTop: 40,
    borderRadius: 6,
  },
  buttontext: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
});

export {PrimaryButton};
