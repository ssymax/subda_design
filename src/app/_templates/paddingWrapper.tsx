import styles from '@/styles/templates/paddingWrapper.module.scss';
import { PaddingWrapperProps } from '@/components/types';

export default function PaddingWrapper({
  additionalClass,
  children,
}: PaddingWrapperProps) {
  const classes = `${styles.padding} ${additionalClass}`;
  return <div className={classes}>{children}</div>;
}
