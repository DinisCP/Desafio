import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListItem = ({ data }) => {
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemP1}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#6D28D9',
    paddingTop: 11,
    paddingBottom: 11,
  },
  itemInfo: {
    marginLeft: 20,
  },
  itemP1: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5
  },
  itemP2: {
    fontSize: 18,
    color: '#6D28D9',
  },
});

export default ListItem;