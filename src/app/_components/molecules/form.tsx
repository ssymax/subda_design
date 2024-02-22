'use client';

import { useForm, Controller } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { useEffect } from 'react';
import { z } from 'zod';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/atoms/input';
import Button from '@/components/atoms/button';
import Checkbox from '@/components/atoms/checkbox';
import useMediaQuery from '@/hooks/useMediaQuery';
import { maxQuery } from '@/styles/constants';
import { defaultFormValues } from '@/lib/constants';
import { FormProps } from '@/components/types';
import styles from '@/styles/molecules/form.module.scss';
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

const renderLabel = (dark?: boolean) => (
  <span className={clsx(styles.policy, { [styles['policy--dark']]: dark })}>
    {policy.accept} <a href='?modal=true'>{policy.privacy}</a>
  </span>
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
    <form className={styles.form}>
      <div className={styles.inputs}>
        <div className={styles.half}>
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
        </div>
        <div className={styles.half}>
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
        </div>
      </div>
      <div className={styles.btnAndCheck}>
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
      </div>
    </form>
  );
}
