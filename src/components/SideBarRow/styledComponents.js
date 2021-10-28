import styled from 'styled-components'

export const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 15px;
  margin-top: 5px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  width: 20vw;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
`
