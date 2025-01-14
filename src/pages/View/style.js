import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-columns: auto;
  grid-template-rows: auto 590px;
  grid-template-areas:
    "header"
    "content"
  ;
`

export const Content = styled.div `
  grid-area: content;

    overflow-y: auto;

    margin: 40px 120px;

    .stars {
      display: flex;
      align-items: center;
      margin: 24px 0;

     h1 {
      font-size: 36px;
      margin-right: 20px;
      }
      
      svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
        width: 24px;
        height: 24px;
      }

    }

    .user {
      display: flex;

      gap: 8px;

      img {
        width: 16px;
        height: 16px;

        border-radius: 50%;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }

    .tags {
      display: flex;

      gap: 8px;
      
      margin-top: 40px;

      div {
        background-color: ${({ theme }) => theme.COLORS.ROSE_100};
      }
    }
`

export const Synopsis = styled.p`
  width: 100%;

  text-align: start;

  margin-top: 40px;
`
