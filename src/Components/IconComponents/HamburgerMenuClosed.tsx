interface HamburgerIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export default function HamburgerMenuClosed({
  className,
  width = "20",
  height = "20",
  color = "#1D1D1B",
}: HamburgerIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2.82843"
        width="24"
        height="4"
        rx="1"
        transform="rotate(45 2.82843 0)"
        fill={color}
      />
      <rect
        y="16.9706"
        width="24"
        height="4"
        rx="1"
        transform="rotate(-45 0 16.9706)"
        fill={color}
      />
    </svg>
  );
}
