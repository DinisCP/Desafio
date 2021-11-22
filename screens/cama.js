import React, {useState} from "react";
import { TouchableWithoutFeedback, Keyboard} from 'react-native';
import { HomeContainer, TouchableOpacity, Card, CardContent, StyledContainer, InnerContainer, PageTitle, SubTitle, StyledPopUp, PopUpText, StyledFormArea } from "../components/style";
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

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

const Cama = ({navigation}) => {

    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('Keyboard Dismissed!')
        }}>
            <>
                <StatusBar style='dark'/>
                <InnerContainer>
                    <HomeContainer>
                        <PageTitle>Cama 1</PageTitle>
                        <SubTitle>Francisco de Almeida</SubTitle>
                        <StyledFormArea>

                            <StyledPopUp>
                                <PopUpText>Frequência Cardíaca</PopUpText>
                            </StyledPopUp>

                            <StyledPopUp>
                                <PopUpText>Tensão</PopUpText>
                            </StyledPopUp>

                            <StyledPopUp>
                                <PopUpText>Temperatura</PopUpText>
                            </StyledPopUp>

                            <StyledPopUp>
                                <PopUpText>Saturação de Oxigénio</PopUpText>
                            </StyledPopUp>

                            <StyledPopUp>                                
                                <PopUpText>Bem-Estar</PopUpText>
                            </StyledPopUp>  

                            <StyledPopUp onPress={() => navigation.navigate('Notas')}> 
                            <PopUpText>Notas</PopUpText>                          
                            </StyledPopUp>

                        </StyledFormArea>
                    </HomeContainer>
                </InnerContainer>
            </>
        </TouchableWithoutFeedback>
        
    );
}   

export default Cama;