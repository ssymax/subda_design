'use client';

import styled from 'styled-components';
import Button from '@/components/atoms/button';
import { ButtonsGroupProps } from '@/components/types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
`;

export default function ButtonsGroup({
  leftLabel,
  rightLabel,
  onLeftClick,
  onRightClick,
}: ButtonsGroupProps) {
  return (
    <Wrapper>
      <Button variant='secondary' text={leftLabel} onClick={onLeftClick} />
      <Button variant='primary' text={rightLabel} onClick={onRightClick} />
    </Wrapper>
  );
}
