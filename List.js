import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import ListItem from './ListItem';


const List = ({todos, onRemove, onToggle}) => {

    return (

      <ScrollView
      contentContainerStyle = {styles.listContainer}>

        {todos.map(todo => (

          <ListItem
            key = {todo.id}
            {...todo}
            onRemove = {onRemove}
            onToggle = {onToggle}></ListItem>

        ))}

      </ScrollView>

    );

  };

const styles = StyleSheet.create({

  listContainer : {

    alignItems : 'flex-start'

  },

});

export default List;