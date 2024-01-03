export default function Realization({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
