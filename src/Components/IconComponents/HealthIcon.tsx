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
  color = "#8D8D8C",
}: HamburgerIconProps) {
  return (
    <svg
    className={className}
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 12.1852C0 5.55776 5.37258 0.185181 12 0.185181C18.6244 0.192346 23.9928 5.56073 24 12.1852C24 18.8126 18.6274 24.1852 12 24.1852C5.37258 24.1852 0 18.8126 0 12.1852ZM2.75007 12.1852C2.75007 17.2938 6.89143 21.4352 12.0001 21.4352C17.1064 21.4297 21.2446 17.2915 21.2501 12.1852C21.2501 7.07655 17.1087 2.93518 12.0001 2.93518C6.89143 2.93518 2.75007 7.07655 2.75007 12.1852Z"
        fill={color}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.25006 12.1852C4.25006 7.90497 7.71985 4.43518 12.0001 4.43518C16.2782 4.44014 19.7451 7.90703 19.7501 12.1852C19.7501 16.4654 16.2803 19.9352 12.0001 19.9352C7.71985 19.9352 4.25006 16.4654 4.25006 12.1852ZM16 13.6852C16.2761 13.6852 16.5 13.4613 16.5 13.1852V11.1852C16.5 10.909 16.2761 10.6852 16 10.6852H14C13.7239 10.6852 13.5 10.4613 13.5 10.1852V8.18518C13.5 7.90903 13.2761 7.68518 13 7.68518H11C10.7239 7.68518 10.5 7.90903 10.5 8.18518V10.1852C10.5 10.4613 10.2761 10.6852 10 10.6852H8C7.72385 10.6852 7.5 10.909 7.5 11.1852V13.1852C7.5 13.4613 7.72385 13.6852 8 13.6852H10C10.2761 13.6852 10.5 13.909 10.5 14.1852V16.1852C10.5 16.4613 10.7239 16.6852 11 16.6852H13C13.2761 16.6852 13.5 16.4613 13.5 16.1852V14.1852C13.5 13.909 13.7239 13.6852 14 13.6852H16Z"
        fill={color}
      />
    </svg>
  );
}
