import { OfferInfo, Order, RealizationItem, Step } from '@/lib/types';
import { StaticImageData } from 'next/image';
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  MouseEvent,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  large?: boolean;
  Icon?: ReactElement;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
  withArrow?: boolean;
  borderColor?: string;
}

export interface InputProps {
  label: string;
  placeholder: string;
  width?: string;
  name: string;
  dark?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  value: string;
}

export interface CheckboxProps {
  label: ReactElement;
  checked: boolean;
  onChecked: (isChecked: boolean) => void;
  dark?: boolean;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

export interface MenuProps {
  vertical?: boolean;
  dark?: boolean;
  contact?: boolean;
}

type Social = {
  id: number;
  name: string;
  href: string;
  shortcut: string;
};
export interface SocialProps {
  socials: Social[];
}

export interface ButtonsGroupProps {
  leftLabel: string;
  rightLabel: string;
  onLeftClick: () => void;
  onRightClick: () => void;
}

export interface HomeHeaderProps {
  smallHeader: string;
  header: string;
  description?: string;
}

export interface RealizationItemProps {
  id: string;
  mainImage: string;
  type: string;
  year: string;
  title: string;
  slug?: string;
  location?: string;
  area?: string;
}

export interface HomeOfferItemProps {
  id: string;
  openId: string;
  onClick: () => void;
  accordionNumber: string;
  text1st: string;
  text2nd: string;
  image: string;
  title: string;
  containerWidth?: number;
  itemsQuantity: number;
  accordionWidth: number;
  padding: number;
  index: number;
}

export interface HomeReferenceCardProps {
  id: number;
  name: string;
  description: string;
  place: string;
}

export interface HomeBlogCardProps {
  id?: string;
  slug: string;
  title: string;
  url: string;
}

export interface BurgerProps {
  open: boolean;
  toggleOpen: () => void;
}

export interface MenuMobileProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface HomeOfferItemMobileProps {
  id: string;
  onClick: () => void;
  openId: string;
  text1st: string;
  text2nd: string;
  image: string;
  title: string;
  accordionNumber: string;
  index: number;
  itemsQuantity: number;
}

export interface RealizationsContainerProps {
  realizations: RealizationItem[];
}

export interface RedirectInfoProps {
  header: string;
  text: string;
  imageSrc: StaticImageData;
  leftLabel: string;
  rightLabel: string;
  onLeftClick: () => void;
  onRightClick: () => void;
  inverse?: boolean;
}

export interface GalleryButtonsProps {
  onNextClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onPrevClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface FootProps {
  header?: string;
  children?: ReactNode;
  dark?: boolean;
}

export interface FormProps {
  dark?: boolean;
}

export interface ParallaxProps {
  src: StaticImageData;
}

export interface OfferCardProps {
  url: string;
  title: string;
  description: string;
}

export interface OfferStepProps {
  step: Step;
  index: number;
  stepsLength: number;
}

export interface OfferSlideProps {
  parallaxImages: {
    url: string;
  }[];
  index: number;
  info: OfferInfo;
}

export interface InfoItemProps {
  header: string;
  text?: string;
  children?: ReactNode;
  horizontal?: boolean;
}

export interface SimpleHeaderProps {
  header: string;
  isPageHeader?: boolean;
  fontSize?: string;
  alignLeft?: boolean;
  lineHeight?: boolean;
}

export interface SorterProps {
  onClick: () => void;
  order: Order;
}

export interface SearchInputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
