'use client';

import styled from 'styled-components';
import { InputProps } from '../types';

const Wrapper = styled.div<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: ${({ $width }) => $width || '100%'};
  row-gap: 2rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  padding-left: 0.5rem;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.7rem 0.25rem;
  text-transform: capitalize;
  font-size: 1.4rem;

  &::placeholder {
    font-size: 1.2rem;
    padding-left: 0.5rem;
    text-transform: capitalize;
  }
`;

export default function Input({ label, placeholder, width, name }: InputProps) {
  return (
    <Wrapper $width={width}>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput type='text' placeholder={placeholder} width={width} name={name} />
    </Wrapper>
  );
}
