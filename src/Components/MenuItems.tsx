interface MenuItemProps{
    id:string;
    label:string;
    Icon:React.ComponentType<{width?:number|string; height?:number|string; color?:string;}>
    isActive:boolean;
    onClick:()=>void;
}

export default function MenuItems({ id, label, Icon, isActive, onClick, }: MenuItemProps) {
    return(
        <button key={id} onClick={onClick} className={`flex flex-col items-center justify-center  p-[25px] h-[95px] w-[95px] ${isActive
              ? "text-[#BB1E1E] bg-white " :"text-black bg-[#F4F5F8]" }`}>
            <Icon  color={isActive ? "#BB1E1E" : "#8D8D8C"}/>
            <p>{label}</p>
        </button>
    );
}