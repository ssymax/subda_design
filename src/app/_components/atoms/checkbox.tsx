'use client';

import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { CheckboxProps } from '@/components/types';
import CheckMark from '../../../../public/images/checkmark.svg';

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4 rem;
  position: relative;
  column-gap: 1rem;
  user-select: none;
`;

const CheckboxInput = styled.input`
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

export default function Checkbox({ label, checked, onChecked }: CheckboxProps) {
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChecked(e.target.checked);
  };
  return (
    <CheckboxWrapper>
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
