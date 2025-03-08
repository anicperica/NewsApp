interface DropdownMenuProps {
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
  return (
    <div
      className={`absolute right-full lex items-center h-full bg-[#F4F5F8] transition-all duration-300 
        ${isOpen ? "opacity-100": "opacity-0  pointer-events-none"}`}
    >
      <h1>HAHAHAHAHAHH</h1>
    </div>
  );
}
