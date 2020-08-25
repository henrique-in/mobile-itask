import styled from 'styled-components/native';



export const Container = styled.View`
  width: 100%;
  height: 70px;
  background:#000;
  border-bottom-width: 5px;
  border-bottom-color: #FF7811;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 150px;
  height: 30px;
`;

export const NotifyBtn = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;

export const NotifyIcon = styled.Image`
  width: 30px;
  height: 35px;
`;

export const NotifyView = styled.View`
  width: 25px;
  height: 25px;
  background: #FFF;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 16px;
  bottom: 16px;

`;

export const NotifyText = styled.Text`
 font-weight: bold;
 color:#FF7811;
`;



export const LeftIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const LeftBtn = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;