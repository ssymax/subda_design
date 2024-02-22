import Image from 'next/image';

interface ContentfulImageProps {
  src: string;
  width?: number;
  quality?: number;
  [key: string]: any;
}

const contentfulLoader = ({ src, width, quality }: ContentfulImageProps) => {
  return `${src}?w=${width}&q=${quality || 75}&fm=webp`;
};

export default function ContentfulImage(props: ContentfulImageProps) {
  const { alt } = props;
  return <Image alt={alt} loader={contentfulLoader} {...props} />;
}
