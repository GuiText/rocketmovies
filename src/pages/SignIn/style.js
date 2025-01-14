import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* text-align: center; */

  padding: 0 136px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ROSE};
    font-size: 48px;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 14px;
    margin-bottom: 48px;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 24px;
    margin-bottom: 48px;
  }

  > button {
    margin-top: 24px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
    margin-top: 42px;
    text-align: center;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 0.5;
  background-attachment: scroll;
`