import React from "react";
import Home from './../screens/home';
import About from "../screens/about";
import Registo from "../screens/registo";
import Cama from "../screens/Cama/cama";
import Cama2 from "../screens/Cama/cama2";
import Cama3 from "../screens/Cama/cama3";
import Cama4 from "../screens/Cama/cama4";
import Cama5 from "../screens/Cama/cama5";
import Notas from "../screens/notas";
import Medicação from "../screens/medicação";
import Maps from "../screens/maps";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/Ionicons';

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

const DrawerNavigator = createDrawerNavigator();


const RootStack = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator initialRouteName="MRS"
            screenOptions={({ route }) => ({
              drawerLabel: [
                "Cama 1",
                "Cama 2",
                "Cama 3",
                "Cama 4",
                "Cama 5",
                "Notas",
              ].includes(route.name)
                ? () => {
                    return null;
                  }
                : undefined,
            })}
            >
                <DrawerNavigator.Screen name="Home Page" component={Home} 
                    options={{drawerIcon: ({size}) => (
                    <Icon
                    name="home" size={size} color={Colors.brand}
                    />
                    ),}}
                />
                <DrawerNavigator.Screen name="Registos" component={Registo}
                    options={{drawerIcon: ({size}) => (
                        <Icon
                        name="file-tray-full" size={size} color={Colors.brand}
                        />
                        ),}}    
                />
                <DrawerNavigator.Screen name="Medicação" component={Medicação} 
                    options={{drawerIcon: ({size}) => (
                        <Icon
                        name="bandage" size={size} color={Colors.brand}
                        />
                        ),}}
                />
                <DrawerNavigator.Screen name="Maps" component={Maps} 
                    options={{drawerIcon: ({size}) => (
                        <Icon
                        name="location" size={size} color={Colors.brand}
                        />
                        ),}}
                /> 
                <DrawerNavigator.Screen name="About" component={About} 
                    options={{drawerIcon: ({size}) => (
                        <Icon
                        name="information-circle" size={size} color={Colors.brand}
                        />
                        ),}}
                />
                <DrawerNavigator.Screen name="Cama 1" component={Cama}/>
                <DrawerNavigator.Screen name="Cama 2" component={Cama2}/>
                <DrawerNavigator.Screen name="Cama 3" component={Cama3}/>
                <DrawerNavigator.Screen name="Cama 4" component={Cama4}/>
                <DrawerNavigator.Screen name="Cama 5" component={Cama5}/>
                <DrawerNavigator.Screen name="Notas" component={Notas}  />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
