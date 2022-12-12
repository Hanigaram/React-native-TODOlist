import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';


const TodoInsert = ({onAddTodo}) => {

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
        value = {newTodoItem}
        onChangeText = {todoInputHandler}
        placeholderTextColor = {'#999'}
        autoCorrect = {false}></TextInput>

      <View
      style = {styles.button}>

        <Button
        title = {'추가하기'}
        onPress = {addTodoHandler}></Button>

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
    borderBottomColor : '0a0a0a',
    borderBottomWidth : 1,
    fontSize : 24,
    marginLeft : 20,
    width : 270,
    //borderWidth : 1,
    borderRadius : 5,
    //alignItems : 'center',
    backgroundColor : '#B6C3A2'

  },

  button : {

    marginRight : 10,
    marginLeft : 10,
    borderRadius : 5,
    backgroundColor : '#C8C47E'

  },

});

export default TodoInsert;