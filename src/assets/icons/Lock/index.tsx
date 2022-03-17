import IconBase, { IconBaseProps } from 'components/IconBase';

export type IconType = Pick<IconBaseProps, 'color'>;

export const LockIcon = ({ color }: IconType) => (
  <IconBase color={color}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      data-testid="lock-icon"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0110 0v4"></path>
    </svg>
  </IconBase>
);
