import React, {useState} from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { PageLogo } from './style';
import Modal from 'react-native-modal';

const ListItem = ({ data }) => {

  const [fModal, setFModal] = React.useState(false);
  const handleFModal = () => setFModal(() => !fModal);

  return (
    <TouchableOpacity onPress={handleFModal} style={styles.item}>
      <Modal isVisible={fModal}>
          <View style={{
                 flex: 1,
                 lexDirection: 'column',
                 justifyContent: 'center',
                 alignItems: 'center'}}>
            <PageLogo resizeMode="cover" source={ require('../assets/paracetamol.jpg')} />
            <Button title="Voltar" onPress={handleFModal}/>
          </View>
      </Modal>
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