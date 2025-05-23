interface HamburgerIconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  color?: string;
}

export default function HomeIcon({
  className,
  width = "12",
  height = "12",
  color = "#1D1D1B",
}: HamburgerIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.4802 0.45193C4.29996 0.271688 4.00773 0.271688 3.82749 0.45193L3.33795 0.941466C3.15771 1.12171 3.15771 1.41394 3.33795 1.59418L7.66251 5.91874C7.70757 5.9638 7.70757 6.03686 7.66251 6.08192L3.33828 10.4061C3.15804 10.5864 3.15804 10.8786 3.33828 11.0589L3.82749 11.5481C4.00773 11.7283 4.29996 11.7283 4.4802 11.5481L9.37556 6.65271C9.73604 6.29223 9.73604 5.70777 9.37556 5.34729L4.4802 0.45193Z"
        fill={color}
      />
    </svg>
  );
}
