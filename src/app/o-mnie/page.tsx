'use client';

import styled from 'styled-components';
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
  padding: 0 5.5rem;
  ${({ theme }) => theme.maxWidth.lg} {
    width: 100%;
  }
  img {
    object-fit: contain;
    border-radius: 1rem;
    position: relative !important;
    width: auto;
    height: auto;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  h4 {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.2rem;
  }

  span {
    font-weight: 300;
    line-height: 140%;
    font-size: 2.2rem;
    ${({ theme }) => theme.maxWidth.lg} {
      font-size: 1.6rem;
      line-height: 140%;
      margin-bottom: 5rem;
    }
  }
`;

const StyledSimpleHeader = styled(SimpleHeader)`
  text-align: center;
  margin: 4rem 0;
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
`;

const TextWrap = styled.div`
  text-align: center;
  padding: 5rem 0;
  margin-bottom: -3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export default function AboutMe() {
  const { push } = useRouter();
  const { data, isLoading, error } = useSWR<AboutMeType>('about-me', getAboutMe);

  const src = `${data?.image.url}?fm=webp` || '';

  const aboutImages = data?.imagesCollection.items.map(({ url, title }) => ({
    url: `${url}?fm=webp`,
    title,
  }));

  const loader = (url?: string) => {
    return url || '';
  };

  return (
    <>
      <section>
        <StyledSimpleHeader>O mnie</StyledSimpleHeader>
        <Line />
        <PaddingWrapper>
          <InfoWrapper>
            <LeftWrapper>
              {data?.info.map((item) => (
                <InfoItem key={item.header}>
                  <h4>{item.header}</h4>
                  <span>{item.text}</span>
                </InfoItem>
              ))}
              <ButtonsGroup
                leftLabel='Oferta'
                rightLabel='Porozmawiajmy'
                onLeftClick={() => push(routes.offer)}
                onRightClick={() => push(routes.contact)}
              />
            </LeftWrapper>
            <RightWrapper>
              <Image
                priority
                fill
                loader={() => loader(src)}
                src={data?.image.url || ''}
                alt={data?.image.title || ''}
              />
            </RightWrapper>
          </InfoWrapper>
          <SmallHeader>Umiejętności</SmallHeader>
          <SkillsWrapper>
            <Image
              width={200}
              height={120}
              loader={() => loader(aboutImages?.[0].url)}
              src={aboutImages?.[0].url || ''}
              alt={aboutImages?.[0].title!}
              style={{ left: '50%' }}
            />
            <Image
              width={200}
              height={130}
              loader={() => loader(aboutImages?.[1].url)}
              src={aboutImages?.[1].url || ''}
              alt={aboutImages?.[1].title!}
              style={{ left: '80%', top: '10%' }}
            />
            <Image
              width={200}
              height={130}
              loader={() => loader(aboutImages?.[2].url)}
              src={aboutImages?.[2].url || ''}
              alt={aboutImages?.[2].title!}
              style={{ left: '60%', top: '40%' }}
            />
            <Image
              width={200}
              height={130}
              loader={() => loader(aboutImages?.[3].url)}
              src={aboutImages?.[3].url || ''}
              alt={aboutImages?.[3].title!}
              style={{ left: '40%', top: '50%' }}
            />
            <Image
              width={150}
              height={200}
              loader={() => loader(aboutImages?.[4].url)}
              src={aboutImages?.[4].url || ''}
              alt={aboutImages?.[4].title!}
              style={{ left: '80%', top: '60%' }}
            />
            {data?.skills.map((s) => <Skill key={s}>{s}</Skill>)}
          </SkillsWrapper>
        </PaddingWrapper>
        <TextWrap>
          <SimpleHeader>Pasja do piękna,</SimpleHeader>
          <SimpleHeader>Miłość do komfortu</SimpleHeader>
        </TextWrap>
      </section>
      <Foot>
        <Parallax />
      </Foot>
    </>
  );
}
