import React, {useState} from "react";
import { TouchableWithoutFeedback, Keyboard, TextInput, Button, View, StyleSheet, Text} from 'react-native';
import { HomeContainer, InnerContainer, PageTitle, SubTitle, StyledPopUp, PopUpText, StyledFormArea } from "../../components/style";
import { StatusBar } from "expo-status-bar";
import Modal from "react-native-modal";
import CircularSlider from 'rn-circular-slider';
import { AirbnbRating } from "react-native-ratings";

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


const Cama4 = ({navigation}) => {

    const [isFirstModalVisible, setIsFirstModalVisible] = React.useState(false);
    const [isSecModalVisible, setIsSecModalVisible] = React.useState(false);
    const [isThirdModalVisible, setIsThirdModalVisible] = React.useState(false);
    const [isFourthModalVisible, setIsFourthtModalVisible] = React.useState(false);

    const handle1Modal = () => setIsFirstModalVisible(() => !isFirstModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle2Modal = () => setIsSecModalVisible(() => !isSecModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle3Modal = () => setIsThirdModalVisible(() => !isThirdModalVisible); // Pressing the button will call handleModal and return the opposite state.
    const handle4Modal = () => setIsFourthtModalVisible(() => !isFourthModalVisible); // Pressing the button will call handleModal and return the opposite state.

    
    const [range, setRange] = useState("50% ")
    const [circValue, setCircValue] = useState(20);


    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            console.log('Keyboard Dismissed!')
        }}>
            <>
                <StatusBar style='dark'/>
                <InnerContainer>
                    <HomeContainer>
                        <PageTitle>Cama 4</PageTitle>
                        <SubTitle>Vitor Carvalho</SubTitle>
                        <StyledFormArea>
                            <StyledPopUp onPress={handle1Modal}>
                                <PopUpText>Frequência Cardíaca</PopUpText>
                                <Modal isVisible={isFirstModalVisible} onBackdropPress={() => setIsFirstModalVisible(false)}>
                                    <View style={{  
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '50%', 
                                                    backgroundColor: Colors.secondary}}>
                                        <TextInput style={styles.TextBox} placeholder="BPM" textAlign="center"></TextInput>
                                        <Button title="Guardar" onPress={handle1Modal} color={Colors.brand} />
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle2Modal}>
                                <PopUpText>Tensão Arterial</PopUpText>
                                <Modal isVisible={isSecModalVisible} onBackdropPress={() => setIsSecModalVisible(false)} >
                                    <View style={{  
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '50%', 
                                                    backgroundColor: Colors.secondary}}>
                                        <TextInput style={styles.TextBox2} placeholder="Máx" textAlign="center"></TextInput>
                                        <TextInput style={styles.TextBox2} placeholder="Min" textAlign="center"></TextInput>
                                        <Button title="Guardar" onPress={handle2Modal} color={Colors.brand} />
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle3Modal}>
                                <PopUpText>Saturação de Oxigénio</PopUpText>
                                <Modal isVisible={isThirdModalVisible} onBackdropPress={() => setIsThirdModalVisible(false)} >
                                    <View style={{
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '60%', 
                                                    backgroundColor: Colors.secondary}}>
                                        <CircularSlider
                                            step={2}
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
                                            contentContainerStyle={styles.contentContainerStyle}
                                        >
                                           <Text style={{fontWeight: '500', fontSize: 32, color: 'black', textAlign: 'center', borderRadius: 50, borderColor: Colors.green, backgroundColor: Colors.darkLight, height: '20%', width: '30%'}}>{circValue}</Text>    
                                        </CircularSlider>
                                                                              
                                        <Button title="Guardar" onPress={handle3Modal} color={Colors.brand} />
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={handle4Modal}>
                                <PopUpText>Bem-Estar</PopUpText>
                                <Modal isVisible={isFourthModalVisible} onBackdropPress={() => setIsFourthtModalVisible(false)} >
                                    <View style={{
                                                    borderRadius: 30,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: '50%', 
                                                    backgroundColor: Colors.secondary}}>
                                        <AirbnbRating
                                            count={5}
                                            reviews={["Horrível", "Mal", "OK", "Bom", "Fantástico"]}
                                            defaultRating={11}
                                            size={50}
                                            starContainerStyle={{justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}
                                        />    
                                                                        
                                        <Button title="Guardar" onPress={handle4Modal} color={Colors.brand} />
                                    </View>
                                </Modal>
                            </StyledPopUp>
                            <StyledPopUp onPress={() => navigation.navigate("Notas")}>
                                <PopUpText>Notas</PopUpText>
                            </StyledPopUp>
                        </StyledFormArea>
                    </HomeContainer>
                </InnerContainer>
            </>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
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

export default Cama4;