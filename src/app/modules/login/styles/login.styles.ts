import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 24px;
  padding-left: 24px;
`;

export const LoginTitle = styled.div`
  margin-bottom: 120px;

  label {
    font-size: 20px;
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;

  button {
    width: 80px;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
    border: 0px;
    font-weight: bold;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
  margin-bottom: 90px;

  button {
    background: #b8daf5;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  label {
    margin-bottom: 50px;
  }
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 0px;
  border-radius: 2px;
  background: #dff2bf;
  padding: 5px 10px 5px 10px;
  font-weight: bold;
`;

export const BarSeparetion = styled.div`
  height: 100%;
  min-height: 850px;
  border-left: 1px solid #000;
  margin: 0px 24px 0px 24px;
`;
