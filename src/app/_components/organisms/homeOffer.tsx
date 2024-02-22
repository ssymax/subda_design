'use client';

import { useState, useRef, useEffect } from 'react';
import HomeHeader from '@/components/atoms/homeHeader';
import HomeOfferItem from '@/components/molecules/homeOfferItem';
import HomeOfferItemMobile from '@/components/molecules/homeOfferItemMobile';
import useMediaQuery from '@/hooks/useMediaQuery';
import { minQuery } from '@/styles/constants';
import { HomeOfferType } from '@/lib/types';
import styles from '@/styles/organisms/homeOffer.module.scss';

const description = `Zachęcam do zapoznania się z ofertą i podzielenia się swoimi 
potrzebami. Jestem tu, by realizować Państwa marzenia.`;

export default function HomeOffer({ offer }: { offer: HomeOfferType[] }) {
  const [rect, setRect] = useState<DOMRect>();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const largeScreen = useMediaQuery(minQuery.lg);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    setRect(wrapper.getBoundingClientRect());
    const handleResize = () => {
      if (wrapper) setRect(wrapperRef.current.getBoundingClientRect());
    };

    window.addEventListener('resize', handleResize);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [wrapperRef]);

  const [openId, setOpenId] = useState(offer?.[0]?.sys.id);
  const handleOpen = (id: string) => {
    setOpenId(id);
  };

  return (
    <section>
      <HomeHeader
        smallHeader='Usługi'
        header='W czym mogę pomóc'
        description={description}
      />
      <div className={styles.container} ref={wrapperRef}>
        {offer?.map(({ sys, text1st, text2nd, image, header, slideNumber }, index) => (
          <HomeOfferItemMobile
            key={sys.id}
            id={sys.id}
            openId={openId}
            accordionNumber={slideNumber}
            text1st={text1st}
            text2nd={text2nd}
            title={header}
            image={image.url}
            onClick={() => handleOpen(sys.id)}
            itemsQuantity={offer.length}
            index={index}
          />
        ))}
        {offer?.map(({ sys, text1st, text2nd, image, header, slideNumber }, index) => (
          <HomeOfferItem
            key={sys.id}
            id={sys.id}
            openId={openId}
            accordionNumber={slideNumber}
            text1st={text1st}
            text2nd={text2nd}
            image={image.url}
            title={header}
            onClick={() => handleOpen(sys.id)}
            containerWidth={rect?.width}
            accordionWidth={largeScreen ? 80 : 60}
            itemsQuantity={offer.length}
            padding={30}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
