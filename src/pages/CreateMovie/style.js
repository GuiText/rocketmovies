import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;  

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ;
  
  > main {
    grid-area: content;

    display: flex;
    flex-direction: column;

    max-height: 780px;

    margin: 30px 120px;

    h1 {
      margin: 24px 0 30px 0;
    }

     textarea {
      margin-bottom: 30px;
    }
  }
`

export const Section = styled.div` 


  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 100;

    margin-bottom: 24px;
  }
  
  > .tags {
    padding: 16px;
    display: flex;

    border-radius: 8px;

    flex-wrap: nowrap;

    margin-bottom: 30px;

    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.BLACK_500};
  }

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;


  .title {
    display: flex;
    align-items: center;

    justify-content: space-between;

    gap: 40px;

    margin-bottom: 30px;
    }

    .buttons {
      display: flex;
      gap: 40px;

      :first-child {
        background-color: ${({ theme }) => theme.COLORS.BLACK_500};
        color: ${({ theme }) => theme.COLORS.ROSE};
      }
    }
`