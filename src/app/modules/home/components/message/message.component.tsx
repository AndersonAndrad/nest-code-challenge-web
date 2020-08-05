import React from 'react';

// styles
import {
  Card,
  Container,
  TitleContainer,
  TextContainer,
} from './message.styles';

// interface
import { IMessage } from './message.interface';

export default function Message(props: IMessage) {
  return (
    <Container>
      <Card>
        <TitleContainer>
          <label>{props.email}</label>
          <label>{props.idMessage}</label>
        </TitleContainer>
        <TextContainer>
          <label>{props.text}</label>
        </TextContainer>
      </Card>
    </Container>
  );
}
