import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const ListItem = ({textValue, id, checked, onRemove, onToggle}) => {

    return (

        <View
        style = {styles.container}>

          <TouchableOpacity
          onPressOut = {onToggle(id)}>

            {checked ? (

              <View
              style = {styles.completeCircle}>

                <Icon
                name = "circledowno"
                size = {30}
                color = "#3143e8"></Icon>

              </View>

            ) : (

              <View
              style = {styles.circle}></View>

            )}

          </TouchableOpacity>

          <Text
            style = {[

              styles.text,
              checked ? styles.strikeText : styles.unstrikeText,

            ]}>{textValue}</Text>

          <View>

            <TouchableOpacity
            style = {styles.buttonContainer}>

              <Text
              style = {styles.buttonText}
              onPress = {onRemove(id)}>

                <Icon
                name = "delete"
                size = {30}
                color = "#e33057"></Icon>

              </Text>

            </TouchableOpacity>

          </View>

        </View>

      );
      
    };

const styles = StyleSheet.create({

  container : {

    flex : 1,
    borderBottomColor : '#0a0a0a',
    borderBottomWidth : 1,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent: 'space-between'

  },

  text : {

    flex : 5,
    fontWeight : '500',
    fontSize : 18,
    marginVertical : 20,
    width : 1740

  },

  circle : {

    width : 30,
    height : 30,
    borderRadius : 15,
    borderColor : 'blue',
    borderWidth : 2,
    marginRight : 20,
    marginLeft : 20

  },

  completeCircle : {

    marginRight : 20,
    marginLeft : 20

  },

  strikeText : {

    color : '#bbb',
    textDecorationLine : 'line-through'

  },

  unstrikeText : {

    color : '#29323c'

  },

  buttonContainer : {

    marginVertical : 10,
    marginHorizontal : 10

  }

});


export default ListItem;