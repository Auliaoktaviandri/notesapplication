import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
        <Text style={styles.header}>{`Notes App`}</Text>
        <Text style={styles.title}>{`Login`}</Text>
            <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
                placeholder={"Username"}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={"Password"}
                secureTextEntry={true}
                style={styles.input}
            />
            <Button
                title={"Login"}
                style={styles.input}
                onPress={() => login(user, password)}
            />
            </View>
                
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D3C4BE",
    },
    header: {
      paddingLeft: 8,
      fontSize: 35,
      fontWeight: 'bold',
    },
    title: {
        fontSize: 17,
        marginBottom: 40
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        borderWidth: 2,
        borderColor: "grey",
        marginBottom: 10,
    },
});
