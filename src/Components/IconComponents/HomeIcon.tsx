interface HamburgerIconProps {
    className?: string;
    width?: number | string;
    height?: number | string;
    color?: string;
  }
  

export default function HomeIcon({ className,width="24",height="24",color="#8D8D8C" }: HamburgerIconProps) {
  
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.707 11.4781L12.707 0.47815C12.3165 0.0877683 11.6835 0.0877683 11.293 0.47815L0.292999 11.4781C0.00709085 11.7641 -0.0784231 12.1942 0.0763208 12.5678C0.231065 12.9414 0.595603 13.1851 0.999999 13.1852H2.25C2.38807 13.1852 2.5 13.2971 2.5 13.4351V23.1851C2.5 23.7374 2.94771 24.1852 3.5 24.1852H9.25C9.38807 24.1852 9.5 24.0732 9.5 23.9351V19.1852C9.5 17.8044 10.6193 16.6851 12 16.6851C13.3807 16.6851 14.5 17.8044 14.5 19.1852V23.9351C14.5 24.0732 14.6119 24.1852 14.75 24.1852H20.5C21.0523 24.1852 21.5 23.7374 21.5 23.1851V13.4351C21.5 13.2971 21.6119 13.1852 21.75 13.1852H23C23.4044 13.1851 23.7689 12.9414 23.9237 12.5678C24.0784 12.1942 23.9929 11.7641 23.707 11.4781Z"
        fill={color}
      />
    </svg>
  );
}
