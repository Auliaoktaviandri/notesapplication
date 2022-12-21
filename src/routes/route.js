import React from 'react'
import Home from '../pages/Home'
import Notes from '../pages/Notes'
import Colors from '../styles/color'
import { useAuth } from "../../contexts/AuthContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../pages/Login/LoginScreen";

const AppStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();

const Navigation = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const RootNavigator = () => {
    const { isAuthenticated } = useAuth();
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <RootStack.Screen name="App" component={AppNavigator} />
            ) : (
                <RootStack.Screen name="Auth" component={AuthNavigator} />
            )}
        </RootStack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <AppStack.Screen name="Notes" component={Notes} options={{
                title:'New Notes', 
                headerStyle: { backgroundColor:Colors.header, elevation: 0 },
                }}
            />
        </AppStack.Navigator>
    );
};

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={LoginScreen} />
        </AuthStack.Navigator>
    );
};

export default Navigation;
