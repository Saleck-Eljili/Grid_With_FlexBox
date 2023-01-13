import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

export default Square = ({text}) => {
  return (
    <View style={styles.square}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    square: {
        borderWidth: 1,
        borderColor: "#fff",
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        color:"#fff",
        fontSize: 18,
        fontWeight: 'bold',
    }
  });