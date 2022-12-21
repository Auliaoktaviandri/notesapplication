import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./src/routes/route";

export default function App(){
  return (
    <AuthProvider>
        <Navigation />
    </AuthProvider>
  );
}