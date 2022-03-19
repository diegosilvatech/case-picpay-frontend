import {
  /* PLOP_INJECT_ICON_IMPORT */
  LogoutIcon as logout,
  LockIcon as lock,
  MailIcon as mail,
  ArrowDownIcon as arrowDown
} from 'assets/icons';

import { ColorStyleProps } from 'core/types/globals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const icons: any = {
  /* PLOP_INJECT_ICON_OBJECT */
  logout,
  lock,
  mail,
  arrowDown
};

export type IconNameTypes =
  /* PLOP_INJECT_ICON_TYPES */
  'logout' | 'lock' | 'mail' | 'arrowDown';
export type IconProps = { name: IconNameTypes; color: ColorStyleProps };
const Icon = ({ name, color }: IconProps) => {
  const Element = icons[name];
  return <Element color={color} area-label="Icon component" />;
};
export default Icon;
