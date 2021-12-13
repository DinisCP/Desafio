import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function NotaItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginTop: 16,
    borderColor: '#6D28D9',
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderRadius: 2,
    borderRadius: 10,
  }
});