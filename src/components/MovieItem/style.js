import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 56px;

  display: flex;
  align-items: center;

  border-radius: 10px;
  padding-right: 10px;

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_300};
  
  
  > input {
    font-size: 16px;
    
    border-radius: 10px;
    border: none;
    padding: 16px;
    
    height: 56px;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    background-color: transparent;
    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
  }
  
  > button {
    background: none;
    border: none;
    
    svg {
      text-anchor: start;
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: 24px;
    }
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.ROSE}
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ROSE}
  }
`