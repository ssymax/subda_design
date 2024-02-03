import styled from 'styled-components';
import { SearchInputProps } from '@/components/types';
import SearchIcon from '../../../../public/images/search.svg';

const InputWrapper = styled.div<{ $isValue: boolean }>`
  background-color: ${({ theme, $isValue }) =>
    $isValue ? theme.colors.dark : theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.dark};
  border-radius: 2rem;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  column-gap: 2rem;
  transition: all 0.15s ease-in-out;

  &:focus-within {
    background-color: ${({ theme }) => theme.colors.dark};
    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
  svg {
    transition: all 0.15s ease-in-out;
    opacity: 50%;
    fill: ${({ theme, $isValue }) =>
      $isValue ? theme.colors.secondary : theme.colors.dark};
  }
`;

const Input = styled.input<{ $isValue: boolean }>`
  width: 10rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({ theme, $isValue }) =>
    $isValue ? theme.colors.secondary : theme.colors.dark};
  &::placeholder {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 500;
    opacity: 60%;
    padding-left: 1rem;
  }
  &:focus {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function SearchInput({ placeholder, value, onChange }: SearchInputProps) {
  const isValue = !!value.length;
  return (
    <InputWrapper $isValue={isValue}>
      <Input
        $isValue={isValue}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <SearchIcon />
    </InputWrapper>
  );
}
