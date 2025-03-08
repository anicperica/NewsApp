interface HamburgerIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export default function HamburgerMenu({ className,width="20",height="20",color="#1D1D1B" }: HamburgerIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="4" rx="1" fill={color} />
      <rect y="8" width="24" height="4" rx="1" fill={color} />
      <rect y="16" width="24" height="4" rx="1" fill={color} />
    </svg>
  );
}
