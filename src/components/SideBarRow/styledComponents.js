import styled from 'styled-components'

export const RowItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 12px;
  margin-left: 20px;
`
