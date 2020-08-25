import styled from "styled-components/native";
import { FlatList, Dimensions } from "react-native";


const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  flex: 1;
  background: #ffffff;
  align-items: center;
  justify-content: flex-start;
`;

export const Scroll = styled.View`
  width: 100%;
  height: 66%;
  align-items: center;
  margin-top: ${height * 0.04}px;
`;

export const LoadIndicator = styled.ActivityIndicator`
  margin-top:50%;
`;

export const ViewTitle = styled.View`
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #000;
`;

export const Title = styled.Text`
  color: #000;
  font-size: 18px;
  position: relative;
  top: 11px;
  background-color: #fff;
  padding: 0 10px;
`;

export const Filter = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  height: 60px;
  align-items: center;
`;

export const FilterBtn = styled.TouchableOpacity``;

export const FilterTextActive = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => (props.actived ? "#FF7811" : "#090909  ")};
  opacity: ${(props) => (props.actived ? 1 : 0.5)};
`;

export const FilterTextInative = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #090909;
  opacity: 0.5;
`;

export const List = styled(FlatList).attrs({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
`;
