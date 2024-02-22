/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import PaddingWrapper from '@/templates/paddingWrapper';
import FooterInfo from '@/components/molecules/footerInfo';
import Form from '@/components/molecules/form';
import Line from '@/components/atoms/line';
import { FootProps } from '@/components/types';
import styles from '@/styles/organisms/foot.module.scss';
import pixelMates from '../../../../public/pixelmates.png';

const copyright = String.fromCodePoint(0x00a9);

const spanProps = {
  tabIndex: 0,
  role: 'button',
};

export default function Foot({ header, children, dark }: FootProps) {
  const { push } = useRouter();

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const footClass = clsx(styles.footer, { [styles['footer--dark']]: dark });
  const headerClass = clsx(styles.header, { [styles['header--dark']]: dark });

  return (
    <footer className={footClass}>
      <h1 className={headerClass}>{header || `Bądźmy w kontakcie`}</h1>
      <div className={styles.formAndInfo}>
        <PaddingWrapper>
          <Form dark={dark} />
          {children}
        </PaddingWrapper>
        <FooterInfo />
      </div>
      <div className={styles.white}>
        <PaddingWrapper>
          <Line additionalClass={styles.line} />
          <div className={styles.rightsAndPolicy}>
            <span>{copyright} Wszelkie prawa zastrzeżone</span>
            <div>
              <div
                className={styles.link}
                {...spanProps}
                onClick={() => push('?modal=true', { scroll: false })}
              >
                Polityka prywatności
              </div>
              /
              <div
                className={styles.link}
                {...spanProps}
                onClick={() => openInNewTab('https://pixelmates.pl')}
              >
                Realizacja
                <Image
                  height={20}
                  src={pixelMates}
                  alt='aplikacje i strony internetowe Olsztyn'
                />
              </div>
            </div>
          </div>
        </PaddingWrapper>
      </div>
    </footer>
  );
}
