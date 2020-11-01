import React from 'react';
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import * Permissions from 'expo-permissions';
import {BarCodeScanner } from 'expo-barcode-scanner'


export default class ScanScreen extends React.Component {
constructor(){
    super();
    this.state= {
        hasCameraPermissions: null,
        scanned : false,
        scannedData: '',
        buttonState: 'normal'
    }
}

getCameraPermissions = async ()=> {
    const{status} = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
        hasCameraPermissions:status=== "granted"
    });
}

handleBarCodeScanner = async({type,data})=>{
    this.setState({
        scanned: true,
        scannedDatae: data,
        buttonState: 'normal'
    });
}

render(){
    const hasCameraPermissions = this.state.hasCameraPermissions;
    const scanned = this.state.scanned;
    const buttonState= this.state.buttonState;

    if{buttonState === "clicked" && hasCameraPermissions}{
        return(
            <BarCodeScanner
            onBarCodeScanned= {scanned ? undefined : this.handleBarCodeScanned}

            />
        );
    }
}

}


render (){
    return{
        <View style ={styles.container}>
        <TouchableOpacity
        onPress = {this.getCamerPermissions}
        style = {styles.scanButton}
        title = "Bar Code Scanner">
        <Text style= {styles.buttonText}> Scan QR Code </Text>
        </TouchableOpacity>
        </View>
    }
}

}

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
},

buttonText: {
    fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
}

scanButton:{
    backgroundColor:'red',
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
}
});