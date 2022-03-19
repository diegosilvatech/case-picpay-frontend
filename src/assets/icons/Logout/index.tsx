import IconBase, { IconBaseProps } from 'components/IconBase';

export type IconType = Pick<IconBaseProps, 'color'>;

export const LogoutIcon = ({ color }: IconType) => (
  <IconBase color={color}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      focusable="false"
      role="img"
      fill="none"
      stroke="currentColor"
      data-testid="logout-icon"
    >
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" x2="9" y1="12" y2="12"></line>
    </svg>
  </IconBase>
);
