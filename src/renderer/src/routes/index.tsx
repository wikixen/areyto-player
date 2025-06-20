import Header from "@renderer/components/Header";
import { sampleAlbums } from "@renderer/sample";
import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div class="space-y-4">
      <Header title="Home"/>
      <section class="grid grid-rows-2 gap-8">
        <div>
          <h2>Recently Played</h2>
          <section class="flex gap-4">
            {
              sampleAlbums.map(album => (
                <article>
                  <img src={album.artwork} class="size-40" />
                  <p>{album.title}</p>
                  <p class="text-gray-400 text-sm">{album.artist}</p>
                </article>
              ))
            }
          </section>
        </div>
        <div>
          <h2>Recently Added</h2>
          <section class="flex gap-4">
            {
              sampleAlbums.map(album => (
                <article>
                  <img src={album.artwork} class="size-40" />
                  <p>{album.title}</p>
                  <p class="text-gray-400 text-sm">{album.artist}</p>
                </article>
              ))
            }
          </section>
        </div>
      </section>
    </div>
  );
}
