'use client';

import styled from 'styled-components';
import { InputProps } from '../types';

const Wrapper = styled.div<{ $width?: string; $dark?: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid
    ${({ theme, $dark }) => ($dark ? theme.colors.secondary : theme.colors.primary)};
  width: ${({ $width }) => $width || '100%'};
  row-gap: 2rem;
`;

const Label = styled.label<{ $dark?: boolean }>`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  padding-left: 0.5rem;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.secondary : theme.colors.primary)};
`;

const StyledInput = styled.input<{ $dark?: boolean }>`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.7rem 0.25rem;
  text-transform: capitalize;
  font-size: 1.4rem;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.secondary : theme.colors.primary)};
  &::placeholder {
    font-size: 1.2rem;
    padding-left: 0.5rem;
    text-transform: capitalize;
    color: ${({ theme, $dark }) =>
      $dark ? theme.colors.secondary : theme.colors.primary};
  }
`;

export default function Input({ label, placeholder, width, name, dark }: InputProps) {
  return (
    <Wrapper $dark={dark} $width={width}>
      <Label $dark={dark} htmlFor={name}>
        {label}
      </Label>
      <StyledInput
        $dark={dark}
        type='text'
        placeholder={placeholder}
        width={width}
        name={name}
      />
    </Wrapper>
  );
}
