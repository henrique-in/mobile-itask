import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

import add from '../../assets/icons/plus.png';
import save from '../../assets/icons/check.png';

const Footer = ({icon, onPress}) => {
  return(
    <S.Container>
        <S.Button onPress={onPress}>
          <S.Image source={icon == 'add' ? add : save}/>
        </S.Button>
        <S.Text>Organizando suas tarefas</S.Text>
    </S.Container>
  );
}

export default Footer;