import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 60px 0 30px;
`;

export const DateButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 46px;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  margin: 0 30px;
  border-radius: 4px;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-left: 15px;
`;

export const Picker = styled.View`
  background-color: #fff;
  padding: 15px 30px;
  margin-top: 30px;
`;
