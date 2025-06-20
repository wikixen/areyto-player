import { SolidNode } from "@tanstack/solid-router";

interface Props {
  children: SolidNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }:Props) => {
  return (
    <button
      class="flex gap-2 px-2 py-1 items-center rounded-s cursor-pointer hover:bg-black/40 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button