import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

export default class PhonicSoundButton extends React.Component {
 
  render() {
    return (
      <TouchableOpacity
        style={styles.chunkButton}
        onPress={() => {
        }}>
        <Text style={styles.displayText}>{this.props.wordChunk}</Text>
                <Text style={styles.displayText}>{this.props.bookChunk}</Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  chunkButton:{
    width: '60%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'red'
  }
});