import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;

export const Time = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  margin-top: 4px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
