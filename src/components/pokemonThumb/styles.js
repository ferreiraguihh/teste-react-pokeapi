import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 0;
  margin: 0.3rem;
  border: 1px solid #c5c7c4;
  border-radius: 0.3rem;
  min-width: 160px;
  text-align: center;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);


  cursor: pointer;

  .number {
    border-radius: 1rem;
    padding: 0.2rem 0.4rem;
    background-color: rgba(255, 255, 255, 0.3);
  }

  img {
    width: 120px;
    height: 120px;
  }

  small {
    text-transform: capitalize;
  }
`;

export const ButtonHeart = styled.button`
  border: none;
  background-color: transparent;
  padding: 4px;
  align-items: center;
  font-size: 16px;
  margin-bottom: 8px;
`

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white !important;
  margin-top: 5px
`;
