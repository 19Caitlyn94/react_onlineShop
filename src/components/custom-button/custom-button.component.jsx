import React from 'react';
import { ButtonContainer } from './custom-button.styles';

export default function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}
