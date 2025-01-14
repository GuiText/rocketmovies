import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 227px;

  resize: none;
  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  color: ${({ theme }) => theme.COLORS.WHITE_200};

  padding: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }
`