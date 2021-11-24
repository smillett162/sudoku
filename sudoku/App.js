import React from 'react';
import { StyleSheet } from 'react-native';

import { NativeBaseProvider , Center, Heading} from "native-base"


import BoardComponents from './Components/BoardComponents';

export default function App() {
  return (
    <>
      <NativeBaseProvider>
        <Center flex={1} px="3" style={{marginBottom: 160}}>
          <Heading style={{marginBottom: 20}}>Sudoku</Heading>
          <BoardComponents />
        </Center>
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
