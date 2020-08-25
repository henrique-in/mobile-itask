import React, { useState } from "react";
import { format } from "date-fns";

import { StyleSheet } from "react-native";
import * as S from "./styles";

import TypeIcons from "../../utils/typeIcons";

const TaskCard = ({ done, title, when, type, onPress }) => {
  return (
    
    <S.BtnCard style={[styles.card, done && styles.done]} onPress={onPress} >
      <S.ContentLeft>
        <S.Image source={TypeIcons[type]} />
        <S.Title>{title}</S.Title>
      </S.ContentLeft>
      <S.ContentRight>
        <S.Date>{format(new Date(when), "dd/MM/yyyy")}</S.Date>
        <S.Time>{format(new Date(when), "HH:mm")}</S.Time>
      </S.ContentRight>
    </S.BtnCard>
    
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
  },
  done: {
    opacity: 0.5,
  },
});

export default TaskCard;
