import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  height: 100px;
  background: #2e5e96;
  justify-content: center;
`;

export const Typography = styled.Text`
  font-size: ${props => props.fontSize};
  color: ${props => props.color || '#000'};
  font-weight: ${props => props.fontWeight || 'normal'};
  text-transform: ${props => (props.uppercase && 'uppercase') || 'none'};
  text-align: ${props => props.align};
  margin-bottom: ${props => props.mb || 0};
  margin-right: ${props => props.mr || 0};
  margin-top: ${props => props.mt || 0};
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  padding-right: 20px;
  padding-left: 20px;
  align-content: center;
  align-items: center;
`;

export const Container = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
`;

export const Navbar = styled.View`
  height: 8%;
  /* border-bottom: 1px solid #ccc; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
