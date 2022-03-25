import {
  /* PLOP_INJECT_ICON_IMPORT */
  BadgeIcon as badge,
  DollarIcon as dollar,
  BinIcon as bin,
  PencilIcon as pencil,
  LogoutIcon as logout,
  LockIcon as lock,
  MailIcon as mail
} from 'assets/icons';

import { ColorStyleProps } from 'core/types/styles/globals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: any = {
  /* PLOP_INJECT_ICON_OBJECT */
  badge,
  dollar,
  bin,
  pencil,
  logout,
  lock,
  mail
};

export type IconNameTypes =
  /* PLOP_INJECT_ICON_TYPES */
  'badge' | 'dollar' | 'bin' | 'pencil' | 'logout' | 'lock' | 'mail';
export type IconProps = { name: IconNameTypes; color: ColorStyleProps };
const Icon = ({ name, color }: IconProps) => {
  const Element = icons[name];
  return <Element color={color} area-label="Icon component" />;
};
export default Icon;
