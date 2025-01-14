import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  
  border-radius: 10px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  
  > input {
    width: 100%;
    height: 56px;

    background: transparent;
    padding: 16px;
    border: none;
    
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

  }

  > svg {
    margin-left: 16px;
  }
`