import { OfferInfo, RealizationItem, Step } from '@/lib/types';
import { StaticImageData } from 'next/image';
import { Dispatch, MouseEvent, ReactElement, ReactNode, SetStateAction } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  large?: boolean;
  Icon?: ReactElement;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
  withArrow?: boolean;
}

export interface InputProps {
  label: string;
  placeholder: string;
  width?: string;
  name: string;
  dark?: boolean;
}

export interface CheckboxProps {
  label: ReactElement;
  checked: boolean;
  onChecked: (isChecked: boolean) => void;
  dark?: boolean;
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
  text: string;
  image: StaticImageData;
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
  id: string;
  title: string;
  image: StaticImageData;
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
  text: string;
  image: StaticImageData;
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
