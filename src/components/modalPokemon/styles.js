import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  text-align: center;
  background-color:rgba(2,0,36,1);
  color: white;

  .number {
    border-radius: 1rem;
    padding: 0.2rem 0.4rem;
    background-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 240px;
    height: 240px;
  }

  small {
    text-transform: capitalize;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  margin-top: 5px;

  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;

    p{
      text-align: center;
      width: 100%
    }
    span{
      color: #5eff69;
    }
  }
`;
