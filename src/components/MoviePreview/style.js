import styled from "styled-components";

export const Container = styled.div `
  grid-area: content;

  height: 220px;

  padding: 32px;

  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.COLORS.ROSE_100};

  margin: 0 126px 24px 120px;
  > strong {
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    font-size: 24px;
    margin-bottom: 8px;
  }

  > .star {
    svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
      margin-bottom: 8px;
    } 
  }

  > .description {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;

    p {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 16px;
    }
  }

  > .Tag {
    display: flex;
  }
`
