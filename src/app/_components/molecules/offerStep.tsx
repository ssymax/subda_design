import { OfferStepProps } from '@/components/types';
import Line from '@/components/atoms/line';
import styles from '@/styles/molecules/offerStep.module.scss';

export default function OfferStep({ step, stepsLength, index }: OfferStepProps) {
  return (
    <div className={styles.step}>
      <h4>{step.header}</h4>
      <span>{step.title}</span>
      <p>{step.description}</p>
      {index !== stepsLength - 1 && <Line />}
    </div>
  );
}
