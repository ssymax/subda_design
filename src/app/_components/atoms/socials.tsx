'use client';

import styled from 'styled-components';
import { SocialProps } from '../types';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  row-gap: 0.4rem;
  span {
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Socials({ socials }: SocialProps) {
  return (
    <Wrap>
      <span>Moje profile:</span>
      {socials.map((s) => (
        <a key={s.id} rel='noreferrer' target='_blank' href={s.href}>
          {s.name}
        </a>
      ))}
    </Wrap>
  );
}
