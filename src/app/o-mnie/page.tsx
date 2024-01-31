'use client';

import styled from 'styled-components';
import { CSSProperties } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import PaddingWrapper from '@/templates/paddingWrapper';
import SimpleHeader from '@/components/atoms/simpleHeader';
import Line from '@/components/atoms/line';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import { AboutMeType } from '@/lib/types';
import { getAboutMe } from '@/lib/api';
import { routes } from '@/routes/routes';
import SmallHeader from '@/components/atoms/smallHeader';
import Parallax from '@/components/atoms/parallax';
import Foot from '@/components/organisms/foot';
import InfoItem from '@/components/atoms/infoItem';
import { minQuery } from '@/styles/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import kitchen2 from '../../../public/kitchen2.jpg';

const InfoWrapper = styled.div`
  display: flex;
  margin-top: 3rem;
  column-gap: 10rem;
  margin-bottom: 10rem;
  ${({ theme }) => theme.maxWidth.lg} {
    flex-direction: column-reverse;
    row-gap: 5rem;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    row-gap: 0rem;
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  position: relative;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
  padding: 0 5%;

  img {
    border-radius: 1rem;
    width: 100%;
    height: auto;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 6rem;
  img {
    position: absolute;
    z-index: 1;
    border-radius: 1rem;
  }

  :last-child {
    border-bottom: none;
  }
`;

const Skill = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  padding: 2rem 0;
  position: relative;
  ${({ theme }) => theme.maxWidth.lg} {
    font-size: 2rem;
  }
`;

const TextWrap = styled.div`
  text-align: center;
  padding: 5rem 0;
  margin-bottom: -3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default function AboutMe() {
  const { push } = useRouter();
  const largeScreen = useMediaQuery(minQuery.lg);
  const { data, isLoading, error } = useSWR<AboutMeType>('about-me', getAboutMe);

  const src = `${data?.image.url}?fm=webp` || '';

  const aboutImages = data?.imagesCollection.items.map(({ url, title }) => ({
    url: `${url}?fm=webp`,
    title,
  }));

  const loader = (url?: string) => {
    return url || '';
  };

  const imagePositions: CSSProperties[] = [
    { left: '55%' },
    { right: '4%', top: '18%' },
    { left: '60%', top: '40%' },
    { left: '40%', top: '60%' },
    { right: '10%', bottom: '0' },
  ];

  const imagesSizes = [
    { width: 200, height: 120 },
    { width: 200, height: 130 },
    { width: 200, height: 130 },
    { width: 200, height: 130 },
    { width: 150, height: 200 },
  ];

  return (
    <>
      <section>
        <PaddingWrapper>
          <SimpleHeader isPageHeader header='O mnie' />
          {isLoading && <div style={{ width: '100%', height: '100vh' }} />}
          <InfoWrapper>
            <LeftWrapper>
              {data?.info.map((item) => (
                <InfoItem key={item.header} header={item.header} text={item.text} />
              ))}
              <ButtonsGroup
                leftLabel='Oferta'
                rightLabel='Porozmawiajmy'
                onLeftClick={() => push(routes.offer)}
                onRightClick={() => push(routes.contact)}
              />
            </LeftWrapper>
            <RightWrapper>
              {data?.image.url && (
                <Image
                  priority
                  loader={() => loader(src)}
                  src={data.image.url}
                  alt={data?.image.title || ''}
                  sizes='100vw'
                  width={500}
                  height={300}
                />
              )}
            </RightWrapper>
          </InfoWrapper>
          <SmallHeader>Umiejętności</SmallHeader>
          <SkillsWrapper>
            {aboutImages?.map((image, index) => (
              <Image
                key={image.url}
                unoptimized
                width={
                  largeScreen ? imagesSizes[index].width : imagesSizes[index].width / 2
                }
                height={
                  largeScreen ? imagesSizes[index].height : imagesSizes[index].height / 2
                }
                src={image.url}
                alt=''
                style={imagePositions[index]}
              />
            ))}
            {data?.skills.map((s) => <Skill key={s}>{s}</Skill>)}
          </SkillsWrapper>
        </PaddingWrapper>
        <TextWrap>
          <SimpleHeader header='Pasja do piękna' />
          <SimpleHeader header='Miłość do komfortu' />
        </TextWrap>
      </section>
      <Foot>
        <Parallax src={kitchen2} />
      </Foot>
    </>
  );
}
