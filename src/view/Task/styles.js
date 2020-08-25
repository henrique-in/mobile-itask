import styled from 'styled-components/native';



export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background:#fff;
  align-items: center;
  justify-content: flex-start;
`;

export const Form = styled.ScrollView.attrs({
  
  showsVerticalScrollIndicator: false,
})`
  width:100%;
`;

export const ViewType = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  
})` `;

export const LoadIndicator = styled.ActivityIndicator`
  margin-top:50%;
`;

export const TypeButton = styled.TouchableOpacity`

`;

export const TypeIcon = styled.Image`
  width: 45px;
  height: 45px;
  margin: 10px 10px;


`;

export const Label = styled.Text`
  color: #707070;
  font-weight: bold;
  font-size: 18px;
  padding: 0 10px;
  margin: 20px 5px;
`;

export const Input = styled.TextInput`
  font-size: 16px;
  padding: 10px;
  width: 95%;
  border-bottom-width: 1px;
  border-bottom-color: #FF7811;
  margin: 0 10px;
`;

export const InputArea = styled.TextInput`
  font-size: 16px;
  padding: 10px;
  width: 95%;
  height: 100px;
  border-width: 1px;
  border-radius: 10px;
  border-color: #FF7811;
  margin: 0px 10px;

`;

export const inLine = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 60px;

`;

export const inputLine = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

export const Switch = styled.Switch``;

export const SwitchLabel = styled.Text`
  font-weight: bold;
  color:#FF7811;
  text-transform: uppercase;
  font-size: 16px;
  padding-left: 10px;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const RemoveLabel = styled.Text`
  font-weight: bold;
  color:#090909;
  text-transform: uppercase;
  font-size: 16px;
  
`;
