import React, { useState } from 'react';
import TodoList from './List';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TodoInsert from './Insert';
import { Calendars } from './Calendar';



const App = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = text => {

    setTodos([

      ...todos,
      {id : Math.random().toString(), textValue : text, checked : false}

    ]);

  };

  const onRemove = id => () => {

    setTodos(todos.filter(todo => todo.id !== id));

  };

  const onToggle = id => () => {

    setTodos(

      todos.map(todo =>

        todo.id === id ? {...todo, checked: !todo.checked} : todo

      )

    );

  };

  return (

    <SafeAreaView
    style = {styles.container}>

      <Text
      style = {styles.appTitle}>TODO</Text>

      <View
      style = {styles.card}>

        <TodoInsert
        onAddTodo = {addTodo}></TodoInsert>

        <Text> </Text>

        <TodoList
        todos = {todos}
        onRemove = {onRemove}
        onToggle = {onToggle}></TodoList>

        <TouchableOpacity
        style = {styles.calendarButton}>

          <Text
          style = {styles.calenderTitle}
          onPress = {Calendars}>Calender</Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>

  );

};

const styles = StyleSheet.create({

  container : {

    flex : 1,
    backgroundColor : '#C5E1DE'

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
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    marginLeft : 10,
    marginRight : 10

  },

  calendarButton : {

    width : 100,
    borderRadius : 5,
    backgroundColor : '#F8FEB5',
    flex : 0.08,
    justifyContent : 'center',
    alignItems : 'center',
    marginLeft : 20,
    borderRadius : 5

  },

  calenderTitle : {

    fontSize : 15,
    color : '#0a0a0a'

  }

});

export default App;