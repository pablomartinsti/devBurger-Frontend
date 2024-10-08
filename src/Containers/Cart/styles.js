import styled from 'styled-components'

export const Container = styled.div`
  background: #e5e5e5;
  min-height: calc(100vh -72px);
`

export const CartImg = styled.img`
  width: 100%;
  margin-top: 70px;
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  padding-bottom: 30px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`
