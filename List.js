import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import TodoListItem from './ListItem';


const TodoList = ({todos, onRemove, onToggle}) => {

  return (

    <ScrollView
    contentContainerStyle = {styles.listContainer}>

      {todos.map(todo => (

        <TodoListItem
          key = {todo.id}
          {...todo}
          onRemove = {onRemove}
          onToggle = {onToggle}></TodoListItem>

      ))}

    </ScrollView>

  );

};

const styles = StyleSheet.create({

  listContainer : {

    alignItems : 'center'

  }

});

export default TodoList;