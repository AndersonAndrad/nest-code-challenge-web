import React, { useState, useEffect } from 'react';

// interface
import { IMessage } from '../interfaces/message.interface';

// querys
import { GET_MESSAGES } from '../querys/message.query';

// apollo dependencies
import { useQuery } from '@apollo/client';

export default function Home() {
  const [messages, setMessages] = useState([]);

  const { data } = useQuery(GET_MESSAGES);

  useEffect(() => {
    if (data !== undefined) setMessages(data.getMessages);
  }, [data]);

  return (
    <div>
      <ul>
        {messages.map((message: IMessage) => (
          <li key={message.id}>
            <label>{message.id}</label>
            <label>{message.content}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
