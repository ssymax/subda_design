'use client';

import { useState } from 'react';
import styled from 'styled-components';
import PaddingWrapper from '@/templates/paddingWrapper';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import useMediaQuery from '@/hooks/useMediaQuery';
import { maxQuery } from '@/styles/constants';
import EmailIcon from '../../../../public/images/email.svg';
import { FormProps } from '../types';

const policy = {
  accept: 'Akceptuję',
  privacy: 'politykę prywatności',
};

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  align-items: flex-end;
  padding: 0 2rem;
`;

const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    row-gap: 3rem;
  }
`;

const HalfWrapper = styled.div`
  width: 50%;
  display: flex;
  column-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    width: 100%;
    row-gap: 3rem;
  }
`;

const ButtonAndCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
`;

const Span = styled.span<{ $dark?: boolean }>`
  font-size: 1.2rem;
  a {
    text-decoration: underline;
    color: ${({ theme, $dark }) =>
      $dark ? theme.colors.secondary : theme.colors.primary};
    font-weight: 500;
  }
`;

const renderLabel = (dark: boolean) => (
  <Span $dark={dark}>
    {policy.accept} <a href='x'>{policy.privacy}</a>
  </Span>
);

export default function Form({ dark }: FormProps) {
  const [checked, setChecked] = useState(false);

  const largeScreen = useMediaQuery(maxQuery.lg);

  const handleCheck = () => setChecked((check) => !check);

  const inputWidth = largeScreen ? '100%' : '50%';

  return (
    <StyledForm>
      <InputsWrapper>
        <HalfWrapper>
          <Input
            dark={dark}
            label='Twoje imię'
            placeholder='Imię'
            name='name'
            width={inputWidth}
          />
          <Input
            dark={dark}
            label='Twój nr telefonu'
            placeholder='123-456-789'
            name='phoneNumber'
            width={inputWidth}
          />
        </HalfWrapper>
        <HalfWrapper>
          <Input dark={dark} label='Twoja wiadomość' placeholder='tekst' name='message' />
        </HalfWrapper>
      </InputsWrapper>
      <ButtonAndCheckbox>
        <Button
          text='Wyślij wiadomość'
          variant='primary'
          Icon={<EmailIcon />}
          onClick={() => {}}
        />
        <Checkbox
          dark={dark}
          label={renderLabel(dark)}
          checked={checked}
          onChecked={handleCheck}
        />
      </ButtonAndCheckbox>
    </StyledForm>
  );
}
