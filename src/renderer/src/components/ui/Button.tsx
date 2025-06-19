import { Link, SolidNode } from "@tanstack/solid-router";

interface Props {
  children: SolidNode;
}

const Button = ({ children }:Props) => {
  return (
    <button class="px-2 py-1 rounded-s text-xl cursor-pointer hover:bg-black/40 transition-colors">
      {children}
    </button>
  )
}

export default Button