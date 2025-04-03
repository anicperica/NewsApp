interface HamburgerIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export default function HomeIcon({
  className,
  width = "24",
  height = "24",
  color = "#BB1E1E",
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
      <circle opacity="0.24" cx="10" cy="10" r="10" fill="#BB1E1E" />
      <circle cx="10" cy="10" r="5" fill={color} />
    </svg>
  );
}
[]