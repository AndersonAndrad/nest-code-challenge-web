import React, { useState, useEffect } from 'react';

// component shared
import Button from '../../../../shared/button/button.component';

// interface
import { IMessage } from '../interfaces/message.interface';

// querys
import { GET_USERS_MESSAGES } from '../querys/message.query';

// apollo dependencies
import { useQuery } from '@apollo/client';

interface IUser {
  id: string;
  email: string;
}

export default function Home() {
  const [messages, setMessages] = useState([]);

  const { data } = useQuery(GET_USERS_MESSAGES);

  useEffect(() => {
    if (data !== undefined) setMessages(data.getMessages);
  }, [data]);

  return (
    <div>
      <ul>
        {messages.map((message: IMessage) => (
          <li key={message.id}>
            <label>{message.id}</label>
            <label>{message.user.email}</label>
            <label>{message.content}</label>
          </li>
        ))}
      </ul>
      <Button text="Send" />
    </div>
  );
}
