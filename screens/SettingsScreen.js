import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import MyHeader from '../components/MyHeader';
export default class SettingScreen extends Component{
    render(){
        return(
           <View style = {StyleSheet.container}>
               <MyHeader title = "Settigs" navigation = {this.props.navigation}/>
                   <View>
               <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
        />
        <TouchableOpacity onPress = {()=>{this.updateUserDetails()}}>
            <Text>
                Submit
            </Text>
        </TouchableOpacity>
        </View>
              
           </View>

        )
    }
}