'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { setBodyOverflow } from '@/app/_utils/utils';
import { privacyPolicyData } from '@/lib/constants';
import styles from '@/styles/molecules/modal.module.scss';
import CloseIcon from '../../../../public/images/close.svg';

export default function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('modal');
  const pathname = usePathname();
  const { push } = useRouter();

  useEffect(() => {
    if (modal) setBodyOverflow('hidden');
    return () => setBodyOverflow('auto');
  }, [modal]);

  return (
    <>
      {modal && (
        <dialog className={styles.dialog}>
          <div className={styles.content}>
            <CloseIcon
              className={styles.closeIcon}
              onClick={() => push(pathname, { scroll: false })}
            />
            <h3>Polityka prywatności</h3>
            <div className={styles.container}>
              <section className={styles.privacyPolicySection}>
                <h4 className={styles.privacyPolicyHeading}>1. Postanowienia ogólne</h4>
                <p className={styles.privacyPolicyText}>
                  Administrator: {privacyPolicyData.generalTerms.administrator.name}
                </p>
                <p className={styles.privacyPolicyText}>
                  Adres: {privacyPolicyData.generalTerms.administrator.address}
                </p>
                <p className={styles.privacyPolicyText}>
                  NIP: {privacyPolicyData.generalTerms.administrator.nip}
                </p>
                <p className={styles.privacyPolicyText}>
                  Kontakt:{' '}
                  {privacyPolicyData.generalTerms.administrator.contact.postalAddress},{' '}
                  {privacyPolicyData.generalTerms.administrator.contact.email}
                </p>
                <p className={styles.privacyPolicyText}>
                  Inspektor Ochrony Danych:{' '}
                  {privacyPolicyData.generalTerms.administrator.dataProtectionOfficer}
                </p>
              </section>

              <section className={styles.privacyPolicySection}>
                <h4 className={styles.privacyPolicyHeading}>2. Zasady prywatności</h4>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.privacyPrinciples.respect}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.privacyPrinciples.fairUse}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.privacyPrinciples.transparency}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.privacyPrinciples.protection}
                </p>
                <p className={styles.privacyPolicyText}>
                  Podstawy prawne przetwarzania danych:{' '}
                  {privacyPolicyData.privacyPrinciples.legalBasis.join(', ')}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.privacyPrinciples.dataRetention}
                </p>
              </section>

              <section className={styles.privacyPolicySection}>
                <h4 className={styles.privacyPolicyHeading}>3. Prawa użytkownika</h4>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.accessAndCopy}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.correction}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.deletion}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.restriction}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.dataPortability}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.objection}
                </p>
                <p className={styles.privacyPolicyText}>
                  {privacyPolicyData.userRights.complaint}
                </p>
              </section>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
