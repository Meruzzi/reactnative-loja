import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Platform, View, Card } from 'react-native';
import React, { useEffect, useState } from 'react'
import Eventos from './components/Eventos/Eventos'

export default function App() {

  return (
    <Eventos />
  );
}

const styles = StyleSheet.create({
  
});
