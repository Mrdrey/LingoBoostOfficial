import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,style } from 'react-native';
import Card from './components/Card';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Card title={'Beginner'}
      description={'This is a beginner course'}
      style={[styles.cardbtn,{Colors:'red'}]}
      />
      <Card title={'Intermediate'}
      description={'More complex course'}
      style={styles.cardbtn}
      />
      <Card title={'Advance'}
      description={'This is a beginner course'}
      style={styles.cardbtn}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:20,

  },
  cardbtn:{
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    width:250,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },  
});
