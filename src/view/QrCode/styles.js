import styled from 'styled-components/native';
import { Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex:1;
  background: #FFFF;
`;

export const Header = styled.View`
  background:#000;
  width:100%;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 5px;
  border-bottom-color:#FF7811;
`;

export const BtnView = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction:row;
  position: absolute;
  bottom: 70px;
`;


export const Title = styled.Text`
  color:#FF7811;
  font-weight: bold;
  font-size: ${height * 0.03}px;
`;

export const ButtonBack = styled.TouchableOpacity`
  background-color:#FF7811;
  width: 45%;
  padding: 10px;
  align-items:center;
  border-bottom-left-radius:50px;
  border-top-left-radius:50px;
`;

export const ButtonScanActive = styled.TouchableOpacity`
  background-color:#000;
  width: 45%;
  padding: 10px;
  align-items:center;
  border-bottom-right-radius:50px;
  border-top-right-radius:50px;
  
`;

export const ButtonScanInactive = styled.TouchableOpacity`
  background-color: #cccc;
  width: 45%;
  padding: 10px;
  align-items: center;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
`;

export const LabelButton = styled.Text`
  color:#ffff;
  font-weight:bold;
`;