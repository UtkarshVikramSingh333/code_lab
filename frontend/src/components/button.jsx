import React from 'react';
import styled from 'styled-components';

export default function Button({ content, onClick }) {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
  position: relative;
  z-index: 10; /* Ensure it is on top */
`;
