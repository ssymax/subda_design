'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { contactData, contactTexts, socials } from '@/lib/constants';
import PaddingWrapper from '@/templates/paddingWrapper';
import Foot from '@/components/organisms/foot';
import InfoItem from '@/components/atoms/infoItem';
import SimpleHeader from '@/components/atoms/simpleHeader';
import styles from '@/styles/organisms/contactContent.module.scss';
import diningRoom from '../../../../public/kontakt.jpg';

const mapSrc = `https://www.google.com/maps/embed/v1/place?q=Subda%20Design&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS}`;

export default function ContactContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const texts = document.querySelector('[class*="info"]');
      if (!texts) return;
      const elements = gsap.utils.toArray(texts?.children);

      tl.from('[class*="right"]', {
        autoAlpha: 0,
        scale: 1.05,
        duration: 0.8,
      }).from(
        elements,
        { x: -100, autoAlpha: 0, ease: 'power2.out', stagger: 0.05, duration: 0.8 },
        '<>',
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[class*="right"]',
          start: 'top top',
          scrub: 2,
        },
      });

      scrollTl.to('[class*="right"]', {
        y: 100,
      });
    },
    { scope: containerRef, revertOnUpdate: true },
  );

  return (
    <>
      <section>
        <PaddingWrapper>
          <div className={styles.headers}>
            <SimpleHeader alignLeft header={contactData.mail} />
            <SimpleHeader alignLeft header={contactData.phone} />
          </div>
          <div className={styles.container} ref={containerRef}>
            <div className={styles.info}>
              <InfoItem header='Zapraszam do kontaktu' text={contactTexts.invite} />
              <div className={styles.contactsAndProfiles}>
                <div className={styles.contacts}>
                  <InfoItem header='Info'>
                    <span>{contactData.mail}</span>
                    <span>{contactData.phone}</span>
                  </InfoItem>
                  <InfoItem header='Adres'>
                    <span>{contactData.street}</span>
                    <span>{contactData.city}</span>
                  </InfoItem>
                </div>
                <div className={styles.profiles}>
                  <InfoItem horizontal header='Moje profile'>
                    {socials.map((s) => (
                      <a
                        className={styles.link}
                        key={s.id}
                        rel='noreferrer'
                        target='_blank'
                        href={s.href}
                      >
                        {s.shortcut}
                      </a>
                    ))}
                  </InfoItem>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.image}>
                <Image src={diningRoom} alt='' sizes='100vw' />
              </div>
            </div>
          </div>
        </PaddingWrapper>
      </section>
      <div className={styles.empty} />
      <Foot dark header='Jedna wiadomość zaczyna każdy projekt'>
        <iframe
          title='map'
          className={styles.iframe}
          loading='lazy'
          allowFullScreen
          src={mapSrc}
        />
      </Foot>
    </>
  );
}
