import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.backgroundImage}>
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
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("View")
                    }>
                        <Text style={styles.routeText}>View</Text>
                          <Image source={require("../assets/61088.png")} style={styles.iconImage}></Image>
                       
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Update")
                    }>
                        <Text style={styles.routeText}>Update</Text>
<Image source={require("../assets/61444.png")} style={styles.iconImage}></Image>
                                              
                    </TouchableOpacity>

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.4,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'rgba(2,2,2,0.3)'
    },
    Logo: {
      bottom:-10,
       width:100,
       height:100,
       justifyContent:"center",
      alignSelf:"center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "600",
        fontFamily:'serif',
        backgroundColor:"white",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "white",
        marginTop: 25,
        paddingLeft: 10
    },
       iconImage: {
        position: "absolute",
        height: 80,
        width: 100,
        resizeMode: "contain",
        right: 1,
        bottom: 20
        
    }
});