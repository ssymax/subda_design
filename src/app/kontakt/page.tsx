'use client';

import Image from 'next/image';
import styled from 'styled-components';
import { contactData, contactTexts, socials } from '@/lib/constants';
import PaddingWrapper from '@/templates/paddingWrapper';
import Foot from '@/components/organisms/foot';
import InfoItem from '@/components/atoms/infoItem';
import diningRoom from '../../../public/kontakt.jpg';

const Headers = styled.div`
  margin: 8rem 0;
  ${({ theme }) => theme.maxWidth.lg} {
    margin: 4rem 0;
  }
`;

const SingleHeader = styled.h1`
  font-size: 8rem;
  text-transform: uppercase;
  line-height: 100%;
  font-weight: 800;
  ${({ theme }) => theme.maxWidth.lg} {
    font-weight: 700;
    font-size: 3.6rem;
  }
`;

const Container = styled.div`
  display: flex;
  column-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
  }
`;

const Info = styled.div`
  width: 50%;
  flex-direction: column;
  display: flex;
  row-gap: 10rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
    row-gap: 0;
  }
`;

const ContactsAndProfiles = styled.div`
  display: flex;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column;
  }
`;

const Contacts = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  row-gap: 3rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
    row-gap: 0;
  }
`;

const Profiles = styled.div`
  width: 50%;
`;

const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 8rem;
  text-align: center;
  border-radius: 2rem;
  padding: 0.2rem 0;
  font-size: 1.8rem;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  padding: 0 5%;
  ${({ theme }) => theme.maxWidth.xl} {
    padding: 0;
  }
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    margin-top: -15%;
    margin-bottom: -30%;
    ${({ theme }) => theme.maxWidth.xl} {
      margin-top: -10%;
    }
    ${({ theme }) => theme.maxWidth.lg} {
      margin-top: 0;
      margin-bottom: 2rem;
    }
  }
`;

const Empty = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 20rem;
  margin-bottom: -3rem;
  margin-top: 5%;
  ${({ theme }) => theme.maxWidth.xxl} {
    height: 7rem;
  }
  ${({ theme }) => theme.maxWidth.xxl} {
    height: 5rem;
  }
  ${({ theme }) => theme.maxWidth.lg} {
    height: 0;
  }
`;

const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 50rem;
  margin: 5rem 0;
  border-radius: 1rem;
  filter: grayscale(100);
  ${({ theme }) => theme.maxWidth.lg} {
    height: 40rem;
    margin: 0;
    margin-top: 4rem;
  }
`;

const mapSrc = `https://www.google.com/maps/embed/v1/place?q=Subda%20Design&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS}`;

export default function Contact() {
  return (
    <>
      <section>
        <PaddingWrapper>
          <Headers>
            <SingleHeader>{contactData.mail}</SingleHeader>
            <SingleHeader>{contactData.phone}</SingleHeader>
          </Headers>
          <Container>
            <Info>
              <InfoItem header='Zapraszam do kontaktu' text={contactTexts.invite} />
              <ContactsAndProfiles>
                <Contacts>
                  <InfoItem header='Info'>
                    <span>{contactData.mail}</span>
                    <span>{contactData.phone}</span>
                  </InfoItem>
                  <InfoItem header='Adres'>
                    <span>{contactData.street}</span>
                    <span>{contactData.city}</span>
                  </InfoItem>
                </Contacts>
                <Profiles>
                  <InfoItem horizontal header='Moje profile'>
                    {socials.map((s) => (
                      <A key={s.id} rel='noreferrer' target='_blank' href={s.href}>
                        {s.shortcut}
                      </A>
                    ))}
                  </InfoItem>
                </Profiles>
              </ContactsAndProfiles>
            </Info>
            <ImageWrapper>
              <Image priority src={diningRoom} alt='' />
            </ImageWrapper>
          </Container>
        </PaddingWrapper>
      </section>
      <Empty />
      <Foot dark header='Jedna wiadomość zaczyna każdy projekt'>
        <Iframe loading='lazy' allowFullScreen src={mapSrc} />
      </Foot>
    </>
  );
}