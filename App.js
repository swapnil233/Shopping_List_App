import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Header from './components/Header';
import ListItem from './components/ListItem';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), Text: 'Milk'},
    {id: uuidv4(), Text: 'Eggs'},
    {id: uuidv4(), Text: 'Bread'},
    {id: uuidv4(), Text: 'Juice'},
  ]);

  return(
    <View style={styles.container}>
      <Header/>
      <FlatList 
        data={items} 
        renderItem={({item}) => <ListItem item={item} />} 
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  }
});

export default App;