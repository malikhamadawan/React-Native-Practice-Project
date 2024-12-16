import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ContinueButton = ({Label, backgroundcolor, }) => {
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.container2,
          {backgroundColor: backgroundcolor},
        ]}
        activeOpacity={0.5}>
        <Text style={styles.text4}>{Label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container2: {
    height: 50,
    width: '100%',
    backgroundColor: '#093ccf',
    alignSelf: 'center',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 170,
  },
  text4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export {ContinueButton};
