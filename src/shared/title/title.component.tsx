import React from 'react';

// interface
import { ITitle } from './title.interface';

// Styles
import { Continer, TextContainer, CardContainer } from './title.styles';

// components shared
import Button from '../button/button.component';

export default function Title(props: ITitle) {
  return (
    <Continer>
      <CardContainer>
        <TextContainer>
          <label>{props.email}</label>
        </TextContainer>
        <Button text="Log out" />
      </CardContainer>
    </Continer>
  );
}
