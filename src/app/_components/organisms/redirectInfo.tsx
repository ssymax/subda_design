import styled from 'styled-components';
import Image from 'next/image';
import Line from '@/components/atoms/line';
import SmallHeader from '@/components/atoms/smallHeader';
import ButtonsGroup from '@/components/molecules/buttonsGroup';

import { RedirectInfoProps } from '@/components/types';

const InnerWrapper = styled.div<{ $inverse?: boolean }>`
  padding: 2rem 0 4rem 0;
  display: flex;
  justify-content: space-between;
  column-gap: 5rem;
  flex-direction: ${({ $inverse }) => ($inverse ? 'row-reverse' : 'row')};
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
    flex-flow: column-reverse;
    row-gap: 2rem;
  }

  div {
    width: 50%;

    ${({ theme }) => theme.maxWidth.lg} {
      width: 100%;
    }
  }

  p {
    font-size: 2.2rem;
    line-height: 120%;
    font-weight: 300;
    margin-bottom: 8rem;

    ${({ theme }) => theme.maxWidth.lg} {
      font-size: 1.6rem;
      line-height: 140%;
      margin-bottom: 5rem;
    }
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

export default function RedirectInfo({
  header,
  text,
  leftLabel,
  rightLabel,
  onLeftClick,
  onRightClick,
  imageSrc,
  inverse,
}: RedirectInfoProps) {
  return (
    <>
      <Line />
      <InnerWrapper $inverse={inverse}>
        <div>
          <SmallHeader>{header}</SmallHeader>
          <p>{text}</p>
          <ButtonsGroup
            leftLabel={leftLabel}
            rightLabel={rightLabel}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
          />
        </div>
        <ImageWrapper>
          <Image src={imageSrc} alt={header} />
        </ImageWrapper>
      </InnerWrapper>
      <Line />
    </>
  );
}
