import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text1}>
          3Pluse.<Text style={styles.text2}>com</Text>
        </Text>
        <Text style={styles.text3}>
          3Pluse helps you save and{'\n'}share your travel memories
        </Text>
        <View style={styles.container2}>
          <View style={styles.container3}></View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  container1: {
    height: '90%',
    width: '82%',
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    borderRadius: 7,
    alignItems: 'center',
  },
  text1: {
    color: 'blue',
    paddingTop: 70,
  },
  text2: {
    color: 'skyblue',
  },
  text3: {
    paddingVertical: 30,
  },
  container2: {
    width: '105%',
    backgroundColor: 'white',
    height: 65,
    borderRadius: 8,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    height: 40,
    width: '72%',
    backgroundColor: '1877F2',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
export default App;
