import styled from 'styled-components'

export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  width: 105px;
  height: 177px;
  background-color: ${props => (props.isSelected ? '#F5CA48' : '#FFFFFF')};
  border-radius: 20px;
  margin-left: 20px;
`

export const Title = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #313234;
  margin-top: 10px;
`

export const StyledImage = styled.Image`
  width: 60px;
  height: 60px;
`

export const Button = styled.View`
  width: 26px;
  height: 26px;
  background-color: ${props => (props.isSelected ? '#FFFFFF' : '#f26c68')};
  border-radius: 999;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const IconButton = styled.Image`
  width: 5.04px;
  height: 8px;
`
