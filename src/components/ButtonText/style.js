import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  
  
  > a {
    align-items: center;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.ROSE};

    svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
      margin-right: 5px;
      position: relative;
      top: 5px;
    }
  }
`