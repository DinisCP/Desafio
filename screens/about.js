import React from "react";
import { StyledContainer, HomeContainer, PageTitle, PageLogo, Colors } from "../components/style";
import { Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";

const {brand} = Colors;

const About = ({navigation }) => {

    return (
        <StyledContainer>
            <PageTitle>Who we are?</PageTitle>
            <ScrollView>
                <HomeContainer>
                    <PageLogo resizeMode="cover" source={ require('../assets/AMR.png') }/>
                    
                    <Text  style={styles.content}>
                        We are 3 computer engineering students from north of Portugal, devoloping an application to make the life of health professionals
                        more easy when it comes to register information, health information, like heart rate, respiratory rate, body temperature and other
                        specific measures. This app is beeing developed with one purpose, to optimize time and resources and make this kind of information
                        more available for the one who requests. 
                    </Text>
                    <TouchableOpacity style={styles.textLink} onPress={() => navigation.navigate('Home Page')}>
                        <Text style={styles.textContent}>Return to Home Page</Text>
                    </TouchableOpacity>
                </HomeContainer>
            </ScrollView>
        </StyledContainer>
    )
}

const styles = StyleSheet.create({
    content: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        marginBottom: 10,
        lineHeight: 30,
    },
    textLink: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        color: Colors.brand,
        fontSize: 15,
        marginTop: 15,
    }
})

export default About;