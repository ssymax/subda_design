'use client';

import { forwardRef } from 'react';
import styled from 'styled-components';
import { InputProps } from '@/components/types';

const Wrapper = styled.div<{ $width?: string; $dark?: boolean; $error?: boolean }>`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid
    ${({ theme, $dark, $error }) =>
      // eslint-disable-next-line no-nested-ternary
      $error ? 'red' : $dark ? theme.colors.secondary : theme.colors.primary};
  width: ${({ $width }) => $width || '100%'};
  row-gap: 2rem;
  position: relative;
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

const Error = styled.span`
  position: absolute;
  font-weight: 500;
  color: red;
  font-size: 1.2rem;
  left: 0.5rem;
  bottom: -2.2rem;
`;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, placeholder, width, name, dark, onChange, onBlur, error, value }: InputProps,
    ref,
  ) => {
    return (
      <Wrapper $dark={dark} $width={width} $error={!!error}>
        <Label $dark={dark} htmlFor={name}>
          {label}
        </Label>
        <StyledInput
          id={name}
          ref={ref}
          $dark={dark}
          type='text'
          placeholder={placeholder}
          width={width}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        {error && <Error>{error}</Error>}
      </Wrapper>
    );
  },
);

export default Input;
