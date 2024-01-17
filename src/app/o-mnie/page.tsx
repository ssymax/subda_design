'use client';

import styled from 'styled-components';
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
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;

const RightWrapper = styled.div`
  width: 50%;
  padding: 0 5.5rem;
  img {
    border-radius: 1rem;
    max-width: 100%;
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
  }
`;

const StyledSimpleHeader = styled(SimpleHeader)`
  text-align: center;
  margin: 4rem 0;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  :last-child {
    border-bottom: none;
  }
`;

const Skill = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
  padding: 2rem 0;
`;

const TextWrap = styled.div`
  text-align: center;
  margin: 5rem 0;
`;

export default function AboutMe() {
  const { push } = useRouter();
  const { data, isLoading, error } = useSWR<AboutMeType>('about-me', getAboutMe);

  const src = `${data?.image.url}?fm=webp` || '';
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
                leftLabel='Poznaj proces projektowy'
                rightLabel='Porozmawiajmy'
                onLeftClick={() => push(routes.offer)}
                onRightClick={() => push(routes.contact)}
              />
            </LeftWrapper>
            <RightWrapper>
              <img src={src} alt={data?.image.title} />
            </RightWrapper>
          </InfoWrapper>
          <SmallHeader>Umiejętności</SmallHeader>
          <SkillsWrapper>
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
