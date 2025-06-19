import { Link } from "@tanstack/solid-router";
import { BiRegularCog, BiRegularHomeAlt2, BiRegularLibrary, BiRegularSearch } from 'solid-icons/bi';
import Button from "./ui/Button";

interface Props {
  title: string;
}

const Header = ({ title }:Props) => {
  return (
    <nav class="flex gap-8 justify-end items-center py-1">
      <h1>{ title }</h1>
      <div class="flex gap-8">
        <form class="flex gap-2 items-center px-2 py-1 rounded-s w-fit bg-black/80">
          <BiRegularSearch class="text-xl" />
          <input
            type="search"
            placeholder={"Search..."}
            class="w-80 focus:outline-none"
          />
        </form>
        <div class="flex gap-1">
          <Button>
            <Link to="/">
              <BiRegularHomeAlt2 />
            </Link>
          </Button>
          <Button>
            <Link to="/library">
              <BiRegularLibrary />
            </Link>
          </Button>
          <Button>
            <Link to="/settings">
              <BiRegularCog />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
