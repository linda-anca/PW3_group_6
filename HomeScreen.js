import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import styles from '../styles';
import { useState } from 'react';



  const renderItem = ({ item }) => (
    <Text style={{marginTop:20}}>{item.title}</Text>
  );
function Box({name, color, cssclass}) {
  return (
    <View>

     
      :
        <View style={styles.box}>
          <View style={{backgroundColor: color}}>
            <Text style={styles.paragraph}>
              {name}
            </Text>
          </View>
        </View>
      }
    </View>
  );
}

export default function HomeScreen({navigation}) {
  const [number, setCount] = useState(0);
  return (
    <View style={styles.container}>
        <Button title="Go to List View" onPress={() => {
          navigation.navigate("List View");
        }}/>
        <Text>Current count {number}</Text>
      <Button title="Increase count" onPress={() => {
          setCount(number + 1);
        }}/>
        <Button title="Decrease count" onPress={() => {
          setCount(number - 1);
        }}/>
       

    </View>
  
  );
}