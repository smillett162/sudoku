import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Input, Center, NativeBaseProvider } from "native-base"

const UserTextInput = () => {
  return (
    <>
      <NativeBaseProvider>
        <Center flex={1} px="3">
        <Input
          mx="3"
          placeholder="Input"
          w={{
            base: "75%",
            md: "25%",
          }}
        />
        </Center>
      </NativeBaseProvider>
    </>
  );
}

export default UserTextInput;


