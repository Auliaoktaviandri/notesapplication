import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { Alert } from "react-native";
import { authenticatedKey } from "../common/common";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

const AuthContext = createContext(undefined);
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [isPreparingApp, setPreparingApp] = useState(true);
    const [isLoading, setLoading] = useState(false);

    async function loadResourcesAndDataAsync() {
        try {
            SplashScreen.preventAutoHideAsync();
            await checkAuthenticated();
        } catch (e) {
            console.warn(e);
        } finally {
            setPreparingApp(false);
            SplashScreen.hideAsync();
        }
    }

    useEffect(() => {
        loadResourcesAndDataAsync();
    }, []);

    const login = useCallback(async (user, password) => {
        setLoading(true);
        try {
            if (user === "aulia" && password === "123") {
                await AsyncStorage.setItem(authenticatedKey, "true");
                setAuthenticated(true);
            } else {
                Alert.alert("Peringatan", `salah`);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async () => {
        setLoading(true);
        try {
            await AsyncStorage.removeItem(authenticatedKey);
            setAuthenticated(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, []);

    const checkAuthenticated = useCallback(async () => {
        try {
            const dataAuthenticated = await AsyncStorage.getItem(authenticatedKey);
            if (dataAuthenticated === "true") {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        } catch (error) {
            setAuthenticated(false);
        }
    }, []);

    const value = useMemo(
        () => ({
            isAuthenticated,
            isLoading,
            login,
            logout,
        }),
        [isAuthenticated, isLoading, login, logout]
    );

    if (isPreparingApp) return null;

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
};

export { AuthContext, AuthProvider, useAuth };
