import styled from 'styled-components'

export const Container = styled.Pressable`
  box-sizing: border-box;
  width: 335px;
  height: 161px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  flex-direction: row;
  margin-bottom: 20px;
`

export const Left = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const Main = styled.View`
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  padding: 24px 0 10px 22px;
  margin-bottom: 10px;
`

export const TopText = styled.Text`
  margin-left: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`

export const Name = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #313234;
`

export const Weight = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #c4c4c4;
  margin-top: 5px;
`

export const Footer = styled.View`
  flex-direction: row;
`

export const Button = styled.Pressable`
  background-color: #f5ca48;
  width: 90px;
  height: 53px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const Star = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TextStar = styled.Text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  margin-left: 5px;
`
