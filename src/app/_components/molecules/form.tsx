'use client';

import { useForm, Controller } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styled from 'styled-components';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import useMediaQuery from '@/hooks/useMediaQuery';
import { maxQuery } from '@/styles/constants';
import { defaultFormValues } from '@/lib/constants';
import { FormProps } from '@/components/types';
import EmailIcon from '../../../../public/images/email.svg';
import CheckMark from '../../../../public/images/checkmark.svg';

const MessageSchema = z.object({
  name: z
    .string({ required_error: 'Wymagane' })
    .min(3, { message: 'Za krótkie imię min. 3 znaki' })
    .max(21, { message: 'Za długi imię maks. 21 znaków' }),
  phone: z
    .string({ required_error: 'Wymagane' })
    .refine((phone) => /^\d{3}-\d{3}-\d{3}$/.test(phone), {
      message: 'Wprowadź numer w formacie 123-456-789',
    }),
  message: z
    .string({ required_error: 'Wymagane' })
    .min(3, { message: 'Brak wiadomości, min. 3 znaki' })
    .max(100, { message: 'Za długa wiadomość maks. 100 znaków' }),
  policy: z.boolean().refine((data) => data === true, { message: 'Wymagana akcpetacja' }),
});

type MessageSchemaType = z.infer<typeof MessageSchema>;

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

const renderLabel = (dark?: boolean) => (
  <Span $dark={dark}>
    {policy.accept} <a href='?modal=true'>{policy.privacy}</a>
  </Span>
);

export default function Form({ dark }: FormProps) {
  const { handleSubmit, control, reset } = useForm<MessageSchemaType>({
    defaultValues: defaultFormValues,
    resolver: zodResolver(MessageSchema),
  });

  const [serverState, sendToFormspree] = useFormspree(
    `${process.env.NEXT_PUBLIC_FORMSPREE}`,
  );

  const largeScreen = useMediaQuery(maxQuery.lg);

  const inputWidth = largeScreen ? '100%' : '50%';

  const onSubmit = (data: MessageSchemaType) => {
    if (!data.policy) return;
    const values = {
      imię: data.name,
      telefon: data.phone,
      wiadomość: data.message,
    };
    sendToFormspree(values);
  };

  useEffect(() => {
    if (serverState.succeeded) reset();
  }, [serverState.succeeded, reset]);

  return (
    <StyledForm>
      <InputsWrapper>
        <HalfWrapper>
          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
              <Input
                value={value}
                dark={dark}
                label='Twoje imię'
                placeholder='Imię'
                name='name'
                width={inputWidth}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name='phone'
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
              <Input
                value={value}
                dark={dark}
                label='Twój nr telefonu'
                placeholder='123-456-789'
                name='phone'
                width={inputWidth}
                onChange={onChange}
                onBlur={onBlur}
                error={errors.phone?.message}
              />
            )}
          />
        </HalfWrapper>
        <HalfWrapper>
          <Controller
            control={control}
            name='message'
            render={({ field: { onChange, onBlur, value }, formState: { errors } }) => (
              <Input
                value={value}
                dark={dark}
                label='Twoja wiadomość'
                placeholder='tekst'
                name='message'
                onChange={onChange}
                onBlur={onBlur}
                error={errors.message?.message}
              />
            )}
          />
        </HalfWrapper>
      </InputsWrapper>
      <ButtonAndCheckbox>
        <Button
          text={serverState.succeeded ? 'Wysłano wiadomość' : 'Wyślij wiadomość'}
          variant='primary'
          Icon={serverState.succeeded ? <CheckMark /> : <EmailIcon />}
          onClick={handleSubmit(onSubmit)}
        />
        <Controller
          control={control}
          name='policy'
          render={({ field: { onChange, value, onBlur }, formState: { errors } }) => (
            <Checkbox
              dark={dark}
              label={renderLabel(dark)}
              checked={Boolean(value)}
              onChecked={onChange}
              onBlur={onBlur}
              error={errors.policy?.message || serverState.errors?.kind}
            />
          )}
        />
      </ButtonAndCheckbox>
    </StyledForm>
  );
}
