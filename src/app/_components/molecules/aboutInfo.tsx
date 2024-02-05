import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import ButtonsGroup from '@/components/molecules/buttonsGroup';
import InfoItem from '@/components/atoms/infoItem';
import { AboutMeType } from '@/lib/types';
import { routes } from '@/routes/routes';
import ContentfulImage from '@/lib/contentfulImage';

const AboutWrapper = styled.div`
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

export default function AboutInfo({ data }: { data?: AboutMeType }) {
  const { push } = useRouter();

  return (
    <AboutWrapper>
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
          <ContentfulImage
            priority
            src={data.image.url}
            alt={data?.image.title || ''}
            sizes='100vw'
            width={500}
            height={300}
          />
        )}
      </RightWrapper>
    </AboutWrapper>
  );
}
