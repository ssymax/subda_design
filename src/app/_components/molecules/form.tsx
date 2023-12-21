'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import EmailIcon from '../../../../public/images/email.svg';

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
`;

const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  column-gap: 5rem;
`;

const HalfWrapper = styled.div`
  width: 50%;
  display: flex;
  column-gap: 5rem;
`;

const ButtonAndCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

const renderLabel = () => (
  <Span>
    {policy.accept} <a href='x'>{policy.privacy}</a>
  </Span>
);

export default function Form() {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => setChecked((check) => !check);

  return (
    <StyledForm>
      <InputsWrapper>
        <HalfWrapper>
          <Input label='Twoje imię' placeholder='Imię' name='name' width='50%' />
          <Input
            label='Twój nr telefonu'
            placeholder='123-456-789'
            name='phoneNumber'
            width='50%'
          />
        </HalfWrapper>
        <HalfWrapper>
          <Input label='Twoja wiadomość' placeholder='tekst' name='message' />
        </HalfWrapper>
      </InputsWrapper>
      <ButtonAndCheckbox>
        <Button
          text='Wyślij wiadomość'
          variant='primary'
          Icon={<EmailIcon />}
          onClick={() => {}}
        />
        <Checkbox label={renderLabel()} checked={checked} onChecked={handleCheck} />
      </ButtonAndCheckbox>
    </StyledForm>
  );
}
