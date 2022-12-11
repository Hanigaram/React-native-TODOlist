import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Insert from './Insert';


const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = text => {

    setTodos([

      ...todos,
      {id : Math.random().toString(),
        textValue : text,
        checked: false}

    ]);

  };

  const onRemove = id => {

    setTodos(todos.filter(todo => todo.id !== id));

  };

  const onToggle = id => e => {

    setTodos(

      todos.map(todo =>

        todo.id == id ? {...todo, checked : !todo.checked} : todo

      ),

    );

  };

  return (

    <View
    style = {styles.container}>

      <Text
      style = {styles.appTitle}>ToDo</Text>
      
      <View
        style = {styles.card}>

        <Insert
        onAddTodo = {addTodo}
        onRemove = {onRemove}
        onToggle = {onToggle}></Insert>

      </View>
      
      </View>
    

  );

};


const styles = StyleSheet.create({

  container : {

    flex: 1,
    backgroundColor: '#C5E1DE'

  },

  appTitle : {

    color : '#0a0a0a',
    fontSize : 36,
    marginTop : 30,
    marginBottom : 30,
    fontWeight : '300',
    textAlign : 'center',
    backgroundColor : '#C5E1DE'

  },

  card : {

    backgroundColor : '#C5E1DE',
    flex : 1,
    marginLeft : 10,
    marginRight : 10

  }

});