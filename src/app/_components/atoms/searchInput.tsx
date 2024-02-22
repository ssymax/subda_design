import clsx from 'clsx';
import { SearchInputProps } from '@/components/types';
import styles from '@/styles/atoms/searchInput.module.scss';
import SearchIcon from '../../../../public/images/search.svg';

export default function SearchInput({ placeholder, value, onChange }: SearchInputProps) {
  const isValue = !!value.length;

  const wrapClass = clsx(styles.wrapper, {
    [styles['wrapper--value']]: isValue,
  });

  const inputClass = clsx(styles.search, {
    [styles['search--value']]: isValue,
  });

  return (
    <div className={wrapClass}>
      <input
        className={inputClass}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <SearchIcon />
    </div>
  );
}
