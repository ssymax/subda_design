'use client';

import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { CheckboxProps } from '@/components/types';
import CheckMark from '../../../../public/images/checkmark.svg';

const CheckboxWrapper = styled.label<{ $dark?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 1.4 rem;
  position: relative;
  column-gap: 1rem;
  user-select: none;
  color: ${({ $dark, theme }) => ($dark ? theme.colors.secondary : theme.colors.primary)};
`;

const CheckboxInput = styled.input`
  background-color: ${({ theme }) => theme.colors.secondary};
  appearance: none;
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 0.4rem;
  cursor: pointer;
`;

const CheckedIcon = styled.div`
  position: absolute;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  left: 0.1rem;
`;

export default function Checkbox({ label, checked, onChecked, dark }: CheckboxProps) {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChecked(e.target.checked);
  };
  return (
    <CheckboxWrapper $dark={dark}>
      <CheckboxInput type='checkbox' checked={checked} onChange={handleCheckboxChange} />
      {label}
      {checked && (
        <CheckedIcon>
          <CheckMark />
        </CheckedIcon>
      )}
    </CheckboxWrapper>
  );
}
