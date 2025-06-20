import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/library')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class=''>
      <select class='bg-black p-1 rounded-sm outline-none'>
        <optgroup label='Filter By'>
          <option>Artists</option>
          <option>Albums</option>
          <option>Songs</option>
          <option>Playlists</option>
        </optgroup>
      </select>
    </div>
  )
}
