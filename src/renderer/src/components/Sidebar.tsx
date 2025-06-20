import { BiRegularAlbum, BiRegularCog, BiRegularHomeAlt2, BiRegularMusic, BiRegularSearch, BiRegularUser, BiSolidPlaylist } from "solid-icons/bi"
import Button from "./ui/Button"

const Sidebar = () => {
  return (
    <nav class="flex flex-col gap-2">
      <form class="flex gap-2 items-center px-2 py-1 rounded-s w-fit bg-black/80">
        <BiRegularSearch class="text-xl" />
        <input
          type="search"
          placeholder={"Search..."}
          class="w-40 focus:outline-none"
        />
      </form>
      <Button>
        <BiRegularHomeAlt2 />
        Home
      </Button>
      <section class="flex flex-col gap-1">
        <h1 class="flex gap-2 px-1 items-center text-gray-400 text-xs">
          My Library
        </h1>
        <Button>
          <BiSolidPlaylist />
          Playlists
        </Button>
        <Button>
          <BiRegularAlbum />
          Albums
        </Button>
        <Button>
          <BiRegularUser />
          Artists
        </Button>
        <Button>
          <BiRegularMusic />
          Songs
        </Button>
      </section>
    </nav>
  )
}

export default Sidebar