import * as React from 'react';
import { Text, View, StyleSheet,FlatList } from 'react-native';
import { useState } from 'react';

export default function ListView({navigation}) {
 
const DATA = new Array(6).fill(null).map((v, i) => ({ key: i.toString(), title: `John Doe' ${i}` }));
 
const renderItem = ({ item }) => (
    <Text style={{marginTop:20}}>{item.title}</Text>
  );
  return (
    <View>
       <FlatList 
          data={DATA} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </View>
  )
}