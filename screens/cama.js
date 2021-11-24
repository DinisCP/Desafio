import React, {useState, useEffect} from "react";
import { TouchableWithoutFeedback, Keyboard, TextInput, Button, View, StyleSheet, Text} from 'react-native';
import { HomeContainer, InnerContainer, PageTitle, SubTitle, StyledPopUp, PopUpText, StyledFormArea } from "../components/style";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import Slider from '@react-native-community/slider';
import CircularSlider from 'rn-circular-slider';

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


const Cama = () => {

    const [isFirstModalVisible, setIsFirstModalVisible] = React.useState(false);
    const [isSecModalVisible, setIsSecModalVisible] = React.useState(false);
    const [isThirdModalVisible, setIsThirdtModalVisible] = React.useState(false);
    const [isFourthModalVisible, setIsFourthtModalVisible] = React.useState(false);
    const [isFifthModalVisible, setIsFifhtModalVisible] = React.useState(false);

    const handle1Modal = () => setIsFirstModalVisible(() => !isFirstModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle2Modal = () => setIsSecModalVisible(() => !isSecModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle3Modal = () => setIsThirdtModalVisible(() => !isThirdModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle4Modal = () => setIsFourthtModalVisible(() => !isFourthModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle5Modal = () => setIsFifhtModalVisible(() => !isFifthModalVisible); // Pressing the button will call handleModal and return the opposite state.

    const [range, setRange] = useState("50% ")
    const [circValue, setCircValue] = useState(20);
    const [estarValue, setEstarValue] = useState("50%");


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
                            <StyledPopUp onPress={handle1Modal}>
                                <PopUpText>Frequência Cardíaca</PopUpText>
                                <Modal isVisible={isFirstModalVisible} >
                                    <View style={{
                                                    flex: 1,
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'}}>
                                        <TextInput style={styles.TextBox} placeholder="BPM" textAlign="center"></TextInput>
                                        <Button title="Guardar" onPress={handle1Modal}/>
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle2Modal}>
                                <PopUpText>Tensão Arterial</PopUpText>
                                <Modal isVisible={isSecModalVisible}>
                                    <View style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'}}>
                                        <TextInput style={styles.TextBox2} placeholder="Máx" textAlign="center"></TextInput>
                                        <TextInput style={styles.TextBox2} placeholder="Min" textAlign="center"></TextInput>
                                        <Button title="Guardar" onPress={handle2Modal}/>
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle3Modal}>
                                <PopUpText>Temperatura</PopUpText>
                                <Modal isVisible={isThirdModalVisible}>
                                    <View style={{
                                                    flex: 1,
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', backgroundColor: 'white'}}>{range} ºC</Text>
                                        <Slider
                                            style={{width: 250, height: 40}}
                                            minimumValue={0}
                                            maximumValue={55}
                                            minimumTrackTintColor="#FFFFFF"
                                            maximumTrackTintColor= {Colors.primary}
                                            value={0.5}
                                            onValueChange={value => setRange(value)}
                                            step={0.1}
                                        />
                                        <Button title="Guardar" onPress={handle3Modal}/>
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle4Modal}>
                                <PopUpText>Saturação de Oxigénio</PopUpText>
                                <Modal isVisible={isFourthModalVisible}>
                                    <View style={{
                                                    flex: 1,
                                                    flexDirection: 'row',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'}}>
                                        <CircularSlider
                                            step={1}
                                            min={0}
                                            max={100}
                                            value={circValue}
                                            onChange={value => setCircValue(value)}
                                            duration={2000}
                                            strokeWidth={10}
                                            buttonBorderColor={Colors.brand}
                                            buttonFillColor="#fff"
                                            buttonStrokeWidth={10}
                                            buttonRadius={10}
                                            linearGradient={[{ stop: '0%', color: '#3FE3EB' }, { stop: '100%', color: '#7E84ED' }]}
                                        >
                                            <Text style={{fontWeight: '500', fontSize: 25, color: '#3FE3EB'}}>{circValue} %</Text>
                                        </CircularSlider>                                      
                                        <Button title="Guardar" onPress={handle4Modal}/>
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle5Modal}>
                                <PopUpText>Bem-Estar</PopUpText>
                                <Modal isVisible={isFifthModalVisible}>
                                    <View style={{
                                                    flex: 1,
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'}}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', backgroundColor: 'white'}}>{estarValue}</Text>
                                        <Slider
                                        style={{width: 250, height: 40}}
                                        minimumValue={1}
                                        maximumValue={5}
                                        minimumTrackTintColor="#FFFFFF"
                                        maximumTrackTintColor= {Colors.primary}
                                        value={0.5}
                                        onValueChange={value => setEstarValue(value)}
                                        step={1}
                                        />                                    
                                        <Button title="Guardar" onPress={handle5Modal}/>
                                    </View>
                                </Modal>
                            </StyledPopUp>
                        </StyledFormArea>
                    </HomeContainer>
                </InnerContainer>
            </>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    TextBox: {
        padding: 15,
        backgroundColor: Colors.primary,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.brand,
        marginVertical: 10,
        marginBottom: 30,
        height: 60,
        width: 200,
    },
    TextBox2: {
        padding: 15,
        backgroundColor: Colors.primary,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: Colors.brand,
        marginVertical: 10,
        height: 60,
        width: 100,
        marginRight: 10,
    },
})

export default Cama;