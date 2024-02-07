import Image from 'next/image';

interface ContentfulImageProps {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any;
}

const contentfulLoader = ({ src, width, quality }: ContentfulImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function ContentfulImage(props: ContentfulImageProps) {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  return <Image alt={props.alt} loader={contentfulLoader} {...props} />;
}
