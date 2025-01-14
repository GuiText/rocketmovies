import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.BLACK};

  border-radius: 10px;
  border: none;

  font-size: 16px;
  font-weight: 500;

  text-align: center;

  svg {
    margin-right: 5px;
  }
`