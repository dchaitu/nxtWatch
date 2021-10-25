import styled from 'styled-components'

export const Rules = styled.button`
  align-self: flex-end;
  color: #223a5f;
  background-color: #fff;
  padding: 5px;
  margin: 5px;
`

export const Background = styled.div`
  background-color: #223a5f;
  height: 100vh;
`

export const ModalContainer = styled.div`
  //   flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 458px;
  margin: 10px;
  width: 300px;
  height: 150px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  //   max-width: 458px;
  margin: 10px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`

// export const CloseButton = styled.button`
//   align-self: flex-end;
//   background-color: grey;
//   width: 30px;
//   height: 30px;
//   border: none;
//   margin-top: 32px;
//   outline: none;
//   cursor: pointer;
// `
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
