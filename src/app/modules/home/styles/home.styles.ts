import styled from 'styled-components';

export const Container = styled.div``;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    list-style: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 340px;
    height: 25px;
    margin-right: 20px;
    border: 0px;
    border-radius: 2px;
    background: #cfecfa;
    padding: 10px;
    font-weight: bold;
  }
`;
