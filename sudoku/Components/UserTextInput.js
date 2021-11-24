import React from 'react';

import { Center, Input } from "native-base";
import { StyleSheet } from 'react-native';

const UserTextInput = ({row, col, value}) => {
  const isMiddle = row > 2 && row < 6 && col > 2 && col < 6;
  const isLeftOrRight = row < 3 || row > 5;
  const isTopOrBottom = col < 3 || col > 5;
  const isGrey = isMiddle || (isLeftOrRight && isTopOrBottom);

  let style = styles.standard;
  if (row === 3 || row == 6) {
    style = styles.vetricalThick;
  }
  if (col === 3 || col == 6) {
    style = styles.horizontalThick;
  }
  if ((col === 3 || col == 6) && (row === 3 || row == 6)) {
    style = styles.bothThick;
  }

  return (
    <>
      <Input
        w={{
          base: "100%",
          md: "25%",
        }}
        defaultValue={value}
        keyboardType = 'numeric'
        variant={isGrey ? "filled" : "outline"}
        style={style} 
      />
    </>
  );
}

const styles = StyleSheet.create({
  standard: {
    borderRadius: 0,
    borderColor: "black",
    textAlign: "center",
    fontSize: 14,
    borderWidth: 0.5
  },
  vetricalThick: {
    borderRadius: 0,
    borderColor: "black",
    textAlign: "center",
    fontSize: 14,
    borderWidth: 0.5,
    borderLeftWidth: 2
  }, 
  horizontalThick: {
    borderRadius: 0,
    borderColor: "black",
    textAlign: "center",
    fontSize: 14,
    borderWidth: 0.5,
    borderTopWidth: 2
  }, 
  bothThick: {
    borderRadius: 0,
    borderColor: "black",
    textAlign: "center",
    fontSize: 14,
    borderWidth: 0.5,
    borderLeftWidth: 2,
    borderTopWidth: 2
  }, 
});

export default UserTextInput;


