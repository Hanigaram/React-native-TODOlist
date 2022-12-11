import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


const Insert = ({onAddTodo}) => {

    const [newTodoItem, setNewTodoItem] = useState('');
  
    const todoInputHandler = newTodo => {

      setNewTodoItem(newTodo);

    };
  
    const addTodoHandler = () => {

      onAddTodo(newTodoItem);

      setNewTodoItem('');

    };

  return (

    <View
    style = {styles.inputContainer}>

      <TextInput
        style = {styles.input}
        placeholder = "+ 할일 추가"
        placeholderTextColor = {'#999'}
        onChangeText = {todoInputHandler}
        value = {newTodoItem}
        maxLength = {100}
      ></TextInput>

      <View
      style = {styles.addButton}>

        <Button
        title = {'추가하기'}
        onPress = {addTodoHandler}
        value = {newTodoItem}></Button>

      </View>

    </View>

  );

};

const styles = StyleSheet.create({

  inputContainer : {

    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center'

  },

  input : {

    padding : 12,
    fontSize : 24,
    width : 300,
    borderWidth : 1,
    borderRadius : 5,
    alignItems : 'center',
    backgroundColor : '#B6C3A2'

  },

  addButton : {

    marginRight : 10,
    marginLeft : 10,
    borderRadius : 10

  }

});

export default Insert;