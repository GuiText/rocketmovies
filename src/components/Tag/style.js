import styled from "styled-components"

export const Container = styled.div`
  padding: 8px 16px;

  color: ${({ theme }) => theme.COLORS.WHITE_300};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  margin-right: 8px;

  border-radius: 8px;

  width: fit-content;
`