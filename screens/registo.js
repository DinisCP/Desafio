import React, {useState} from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { HomeContainer, Card, CardContent } from "../components/style";
import { StatusBar } from "expo-status-bar";

const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444", 
};


const Registo = ({navigation}) => {

    const [registos, setRegistos] = useState([
        { title: 'Cama 1', name: 'Francisco de Almeida', key: 'Cama 1' },
        { title: 'Cama 2', name: 'Ana Rodrigues', key: 'Cama 2' },
        { title: 'Cama 3', name: 'Marta Fernandes', key: 'Cama 3' },
        { title: 'Cama 4', name: 'Vitor Carvalho', key: 'Cama 4' },
        { title: 'Cama 5', name: 'Ismael Domingues', key: 'Cama 5' },
    ]);

    const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

    const updateDate = () => setCurrentDate(new Date().toLocaleString());


    return (
        <>
            <StatusBar style='dark'/>
            <View style={styles.InnerContent}>
                <HomeContainer>
                    <Text style={styles.PageTitle}>Registos Médicos</Text>
                    <View style={styles.StyledFormArea}>
                        <FlatList 
                            data={registos}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => {navigation.navigate(item.key)}}>
                                    <Card>
                                        <CardContent>
                                            <Text>{item.title}</Text>
                                            <Text>{item.name}</Text>
                                            <Text style={{textAlign: "right", fontSize: 10, color: Colors.green}}>{ currentDate }</Text>
                                        </CardContent>
                                    </Card>
                                </TouchableOpacity>
                                
                            )}
                        />
                    </View>
                </HomeContainer>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    InnerContent: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    PageTitle: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.brand,
        padding: 10,
        paddingBottom: 30,
    },
    StyledFormArea: {
        width: '90%',
    },
})

export default Registo;
