import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  /* background: #f14; */
  width: 100%;
  height: 100%;
  min-width: 500px;
`;

export const Card = styled.div`
  background: #dff2bf;
  width: 100%;
  max-width: 420px;
  border-radius: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000;
  height: 100%;
  min-height: 35px;
  padding: 0px 20px 0px 20px;
  color: #9dd83d;
  border-radius: 5px;
`;

export const TextContainer = styled.div`
  padding: 10px 0px 10px 0px;
  height: 100%;

  label {
    width: 100%;
    height: 100%;
    margin: 0px 20px 0px 20px;
  }
`;
