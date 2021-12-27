import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// View: div, footer, header, main, aside, section
// Text: p, span, strong, h1, h2, h3

// Todos os componentes possuem por padrao display flex
// elementos nao possuem significado

export default function App() {
    return (
    <>   
      <StatusBar barStyle="light-content" backgroundColor="#140CF1"/>
      <View style={styles.container}>
        <Text style={styles.title}>Treinamento</Text>
      </View>
    </>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#140CF1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: {
        color: #FFF,
        fontSize: 32,
        fontWeight: 'bold'
    },
});