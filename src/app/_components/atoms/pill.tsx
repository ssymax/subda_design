import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  padding: 1rem 3rem;
  color: ${({ theme }) => theme.colors.grey};
`;

export default function Pill({ label, withSup }: { label: string; withSup?: boolean }) {
  return (
    <Wrapper>
      {label}
      {withSup && (
        <>
          m <sup>2</sup>
        </>
      )}
    </Wrapper>
  );
}
