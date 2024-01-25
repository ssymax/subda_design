import styled from 'styled-components';
import { OfferCardProps } from '@/components/types';
import Image from 'next/image';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
  flex: 1;
  margin-top: 3rem;

  ${({ theme }) => theme.minWidth.md} {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-child(2) {
      margin-top: 15rem;
    }
    &:nth-child(3) {
      margin-top: 7rem;
    }
    &:nth-child(4) {
      margin-top: 25rem;
    }
  }

  img {
    border-radius: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
  }

  span {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.4rem;
    text-align: center;
  }
  p {
    text-align: center;
    line-height: 140%;
    font-weight: 300;
  }
`;

export default function OfferCard({ url, title, description }: OfferCardProps) {
  return (
    <Card>
      <Image
        loader={() => url}
        src={url}
        alt={title}
        sizes='100vw'
        width={300}
        height={391}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div>
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </Card>
  );
}
