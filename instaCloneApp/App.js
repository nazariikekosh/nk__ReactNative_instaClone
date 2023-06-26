import React from 'react';
import { StyleSheet, Text, View } from  'react-native';
import Ionic from "react-native-vector-icons/Ionicons";


const App = () => {
    return (
        <View>
            <Text style={{fontFamily: "Lobster-Regular"}}>Hello world</Text>
            <Ionic name="play" style={{fontSize: 20}}/>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({});