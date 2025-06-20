import { BiRegularCog } from "solid-icons/bi";
import Button from "./ui/Button";

interface Props {
  title: string;
}

const Header = ({ title }:Props) => {
  return (
    <header class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">{title}</h1>
      <Button>
        <BiRegularCog />
        Settings
      </Button>
    </header>
  );
};

export default Header;
