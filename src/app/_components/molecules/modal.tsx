'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import styled from 'styled-components';
import { useEffect } from 'react';
import { setBodyOverflow } from '@/app/_utils/utils';
import { privacyPolicyData } from '@/lib/constants';
import CloseIcon from '../../../../public/images/close.svg';

const Dialog = styled.dialog`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  height: 100%;
  width: 100vw;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: relative;
  border-radius: 1rem;
  min-width: 34rem;
  max-width: 50vw;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;

  h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  fill: ${({ theme }) => theme.colors.primary};
  width: 3rem;
  height: 3rem;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
`;

const PrivacyPolicyContainer = styled.div`
  height: calc(100% - 4rem);
  overflow-y: auto;
  padding-right: 1rem;
`;

const PrivacyPolicySection = styled.section`
  margin-bottom: 2rem;
`;

const PrivacyPolicyHeading = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const PrivacyPolicyText = styled.p`
  font-size: 1.4rem;
  line-height: 140%;
`;

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
        <Dialog>
          <Content>
            <StyledCloseIcon onClick={() => push(pathname, { scroll: false })} />
            <h3>Polityka prywatności</h3>
            <PrivacyPolicyContainer>
              <PrivacyPolicySection>
                <PrivacyPolicyHeading>1. Postanowienia ogólne</PrivacyPolicyHeading>
                <PrivacyPolicyText>
                  Administrator: {privacyPolicyData.generalTerms.administrator.name}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  Adres: {privacyPolicyData.generalTerms.administrator.address}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  NIP: {privacyPolicyData.generalTerms.administrator.nip}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  Kontakt:{' '}
                  {privacyPolicyData.generalTerms.administrator.contact.postalAddress},{' '}
                  {privacyPolicyData.generalTerms.administrator.contact.email}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  Inspektor Ochrony Danych:{' '}
                  {privacyPolicyData.generalTerms.administrator.dataProtectionOfficer}
                </PrivacyPolicyText>
              </PrivacyPolicySection>

              <PrivacyPolicySection>
                <PrivacyPolicyHeading>2. Zasady prywatności</PrivacyPolicyHeading>
                <PrivacyPolicyText>
                  {privacyPolicyData.privacyPrinciples.respect}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.privacyPrinciples.fairUse}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.privacyPrinciples.transparency}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.privacyPrinciples.protection}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  Podstawy prawne przetwarzania danych:{' '}
                  {privacyPolicyData.privacyPrinciples.legalBasis.join(', ')}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.privacyPrinciples.dataRetention}
                </PrivacyPolicyText>
              </PrivacyPolicySection>

              <PrivacyPolicySection>
                <PrivacyPolicyHeading>3. Prawa użytkownika</PrivacyPolicyHeading>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.accessAndCopy}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.correction}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.deletion}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.restriction}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.dataPortability}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.objection}
                </PrivacyPolicyText>
                <PrivacyPolicyText>
                  {privacyPolicyData.userRights.complaint}
                </PrivacyPolicyText>
              </PrivacyPolicySection>
            </PrivacyPolicyContainer>
          </Content>
        </Dialog>
      )}
    </>
  );
}
