import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  
  height: 116px; 
  
  display: flex;
  justify-content: space-between;

  border-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

  padding: 30px 120px;

  > h1 {
    color: ${({  theme }) => theme.COLORS.ROSE};
  }

  > input {
    height: 56px;
    width: 630px;

    padding: 20px 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    border: none;
    border-radius: 10px;
  }
`

export const Profile =  styled.div`
  display: flex;

  margin-left: 16px;
  line-height: 24px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;

    margin-right: 9px;

    strong {
      grid-area: text;
      font-size: 14px;
      color: ${({theme }) => theme.COLORS.WHITE_200};
    }
  
    a {
      grid-area: link;
      color: ${({theme }) => theme.COLORS.GRAY_200};
    }
  }


  > img {
    width: 64px;
    height: 64px;
  
    border-radius: 50%;
  }
`