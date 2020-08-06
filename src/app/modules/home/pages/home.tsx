import React, { useState, useEffect } from 'react';

// component shared
import Button from '../../../../shared/button/button.component';
import Title from '../../../../shared/title/title.component';

// components
import Card from '../components/message/message.component';

// interface
import { IMessage } from '../interfaces/message.interface';

// querys
import { GET_USERS_MESSAGES } from '../querys/message.query';

// apollo dependencies
import { useQuery } from '@apollo/client';

// styles
import {
  Container,
  MessageContainer,
  ButtonContainer,
} from '../styles/home.styles';

export default function Home() {
  const [messages, setMessages] = useState([]);

  const { data } = useQuery(GET_USERS_MESSAGES);

  useEffect(() => {
    if (data !== undefined) setMessages(data.getMessages);
  }, [data, setMessages]);

  return (
    <Container>
      <Title email="people@outlook.com" />
      <MessageContainer>
        {messages.map((message: IMessage) => (
          <li key={message.id}>
            <Card
              email={message.user.email}
              idMessage={message.id}
              text={message.content}
            />
          </li>
        ))}
      </MessageContainer>
      <ButtonContainer>
        <input type="" />
        <Button text="Send" />
      </ButtonContainer>
    </Container>
  );
}
