import React from "react";
import { InnerContainer, PageTitle, StyledFormArea, StyledButton, ButtonText, Line, HomeContainer, Avatar, LeftIcon, Colors } from "../components/style";
import { StatusBar } from "expo-status-bar";


const Home = ({navigation}) => {

    return ( // <> </> means that all components should be wrapped in a parent element. Its a first-class component
        <> 
            <StatusBar style="dark" />
            <InnerContainer>
                <HomeContainer>
                    <PageTitle home={true}>Medical Registration System</PageTitle>
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={ require('../assets/Logoapp.png') } />
                        <StyledButton onPress={() => navigation.navigate('Registos')}>
                            <ButtonText>
                                Registos
                            </ButtonText>
                        </StyledButton>
                    <Line />
                    <StyledButton onPress={() => navigation.navigate('Medicação')}>
                            <ButtonText>
                                Medicação
                            </ButtonText>
                        </StyledButton>
                    <Line />
                        <StyledButton onPress={() => navigation.navigate('Maps')}>
                            <ButtonText>
                                Maps
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>
                </HomeContainer>
            </InnerContainer>
        </>
    );
}

export default Home;
