import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  padding: 0 20px;
  margin-top: 60px;
`;

export const Provider = styled(RectButton)`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  margin: 0 10px 20px;
  border-radius: 4px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-top: 15px;
`;
