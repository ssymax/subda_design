import styled, { CSSProperties } from 'styled-components';
import { AboutMeType } from '@/lib/types';
import { minQuery } from '@/styles/constants';
import useMediaQuery from '@/hooks/useMediaQuery';
import ContentfulImage from '@/lib/contentfulImage';

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

export default function AboutSkills({ data }: { data?: AboutMeType }) {
  const largeScreen = useMediaQuery(minQuery.lg);

  const aboutImages = data?.imagesCollection.items.map(({ url, title }) => ({
    url,
    title,
  }));

  const imagePositions: CSSProperties[] = [
    { left: largeScreen ? '55%' : '73%' },
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
    <SkillsWrapper>
      {aboutImages?.map((image, index) => (
        <ContentfulImage
          key={image.url}
          width={largeScreen ? imagesSizes[index].width : imagesSizes[index].width / 2}
          height={largeScreen ? imagesSizes[index].height : imagesSizes[index].height / 2}
          src={image.url}
          alt=''
          style={imagePositions[index]}
        />
      ))}
      {data?.skills.map((s) => <Skill key={s}>{s}</Skill>)}
    </SkillsWrapper>
  );
}
