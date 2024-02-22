'use client';

import Socials from '@/components/atoms/socials';
import Menu from '@/components/molecules/menu';
import useMediaQuery from '@/hooks/useMediaQuery';
import { minQuery } from '@/styles/constants';
import { contactData, contactTexts, socials } from '@/lib/constants';
import styles from '@/styles/molecules/footerInfo.module.scss';
import Logo from '../../../../public/images/logo.svg';

export default function FooterInfo() {
  const largeScreen = useMediaQuery(minQuery.lg);
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
      <div className={styles.moreInfo}>
        <div className={styles.personal}>
          <div>
            <span>{contactData.street}</span>
            <span>{contactData.city}</span>
          </div>
          <div>
            <span>{contactData.mail}</span>
            <span>{contactData.phone}</span>
          </div>
        </div>
        <div className={styles.linksAndText}>
          <Menu vertical dark contact />
          <Socials socials={socials} />
          {largeScreen && <p className={styles.info}>{contactTexts.footer}</p>}
        </div>
        {!largeScreen && <p className={styles.info}>{contactTexts.footer}</p>}
      </div>
    </div>
  );
}
