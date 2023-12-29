import { StaticImageData } from 'next/image';
import { Dispatch, ReactElement, ReactNode, SetStateAction } from 'react';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps {
  text: string;
  variant: ButtonVariant;
  large?: boolean;
  Icon?: ReactElement;
  onClick: () => void;
  tabIndex?: number;
}

export interface InputProps {
  label: string;
  placeholder: string;
  width?: string;
  name: string;
}

export interface CheckboxProps {
  label: ReactElement;
  checked: boolean;
  onChecked: (isChecked: boolean) => void;
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
  image: StaticImageData;
  type: string;
  year: number;
  title: string;
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
  children: ReactNode;
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
  realizations: RealizationItemProps[];
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
