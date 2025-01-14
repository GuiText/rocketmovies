import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.ROSE_100};

    padding: 56px 144px;

    div {
      margin: 0;
    }
  }

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 340px;

  margin: 0 auto;

  margin-bottom: 200px;

  :nth-child(3) {
    margin-bottom: 24px;
  }

  > button {
    margin-top: 24px;
  }

`

export const Avatar = styled.div`
    position: relative;
    top: -90px;

  > img {  
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BLACK_500};
    }
  }
`
