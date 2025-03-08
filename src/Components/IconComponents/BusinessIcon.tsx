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
        d="M21 22.9852H3C1.34315 22.9852 0 21.6037 0 19.8995V8.58519C0 6.881 1.34315 5.49948 3 5.49948H6.9C7.02491 5.4979 7.12952 5.40172 7.145 5.27422L7.289 4.08828C7.47662 2.54399 8.75293 1.38511 10.266 1.38519H13.734C15.2459 1.38667 16.5205 2.54516 16.708 4.08828L16.852 5.27422C16.8676 5.40288 16.9739 5.49944 17.1 5.49948H21C22.6569 5.49948 24 6.881 24 8.58519V19.8995C24 21.6037 22.6569 22.9852 21 22.9852ZM10.266 3.44233C9.76143 3.44195 9.33561 3.82833 9.27304 4.34335L9.16804 5.21147C9.15946 5.28448 9.18168 5.35777 9.22908 5.41282C9.27649 5.46787 9.34454 5.49941 9.41604 5.49947H14.584C14.6555 5.49941 14.7236 5.46787 14.771 5.41282C14.8184 5.35777 14.8406 5.28448 14.832 5.21147L14.727 4.34335C14.6645 3.82833 14.2386 3.44195 13.734 3.44233H10.266ZM5.25 11.1566C5.25 10.7306 5.58579 10.3852 6 10.3852H18C18.4142 10.3852 18.75 10.7306 18.75 11.1566V11.6709C18.75 12.097 18.4142 12.4423 18 12.4423H6C5.58579 12.4423 5.25 12.097 5.25 11.6709V11.1566ZM6 16.0423C5.58579 16.0423 5.25 16.3877 5.25 16.8138V17.328C5.25 17.7541 5.58579 18.0995 6 18.0995H18C18.4142 18.0995 18.75 17.7541 18.75 17.328V16.8138C18.75 16.3877 18.4142 16.0423 18 16.0423H6Z"
        fill={color}
      />
    </svg>
  );
}
