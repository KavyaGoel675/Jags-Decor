import * as React from 'react';

import { View, Text, TouchableOpacity , StyleSheet} from 'react-native';

import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

export default class UpdateScreen extends React.Component {
  

  render() {
    
    return (
      <View>
        <HeaderRNE
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Jags Decor',
            style: { color: '#fff', fontSize: 20 },
          }}

          rightComponent={
           <TouchableOpacity
              style={{ marginLeft: 10 }}
              onPress={()=> this.props.navigation.navigate("Home")}
            >
              <Icon type="antdesign" name="home" color="white" />
            </TouchableOpacity>
      }
        />

      </View>
    );
  }
}
