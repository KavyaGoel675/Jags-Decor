import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../localdb';
import PhonicSoundButton from '../components/PhonicSoundButton';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      book:[],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <HeaderRNE
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Jags Decor',
            style: { color: '#fff', fontSize: 30 },
          }}
           rightComponent={
           <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={()=> this.props.navigation.navigate("Home")}
            >
              <Icon type="antdesign" name="home" color="white" size={35} />
            </TouchableOpacity>
      }
        />

     
                 <Image
        style={styles.Logo}
        source={require('../assets/logo.png')}
      />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
                        this.setState({ book: db[this.state.text].book });

            this.setState({ phonicSounds: db[this.state.text].phones });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
              <PhonicSoundButton
                wordChunk={this.state.chunks[index]}
                                bookChunk={this.state.book[index]}

                soundChunk={this.state.phonicSounds[index]}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
 Logo: {
       width:100,
       height:100,
       justifyContent:"center",
       alignSelf:"center"
      
    },
});
