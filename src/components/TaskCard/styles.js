import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const{width, height} = Dimensions.get('window');

export const ContentLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentRight = styled.View`
  align-items: flex-end;
  justify-content: space-between;
`;



export const BtnCard = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: ${width * 0.95}px ;
  height: 80px;
  background: #fff;
  margin: 10px 0px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  margin-left: 10px;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: #ff7811;
  font-weight: bold;
`;
export const Time = styled.Text`
  color: #707070;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;
