import styled from 'styled-components';
import { OfferStepProps } from '@/components/types';
import Line from '@/components/atoms/line';

const Step = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  line-height: 140%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: sticky;

  span {
    font-weight: 600;
    font-size: 2.2rem;
  }
`;

export default function OfferStep({ step, stepsLength, index }: OfferStepProps) {
  return (
    <Step>
      <h4>{step.header}</h4>
      <span>{step.title}</span>
      <p>{step.description}</p>
      {index !== stepsLength - 1 && <Line />}
    </Step>
  );
}
