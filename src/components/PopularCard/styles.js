import styled from 'styled-components'

export const Container = styled.Pressable`
  width: 335px;
  height: 161px;
  background: #ffffff;
  box-shadow: 0px 4px 10px #000000;
  border-radius: 25px;
`

export const Main = styled.View``

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
