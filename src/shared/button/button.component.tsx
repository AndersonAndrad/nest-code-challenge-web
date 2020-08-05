import React from 'react';

// styles
import { Container, Text, Button } from './button.styles';

// interfaces
import { IButton } from './button.interface';

export default function button(props: IButton) {
  return (
    <Container>
      <Button>
        <Text>{props.text}</Text>
      </Button>
    </Container>
  );
}
