import { render } from "solid-js/web";
import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/solid-router";
import { routeTree } from "./routeTree.gen";

const hashHistory = createHashHistory();
const router = createRouter({ routeTree, history: hashHistory });

declare module "@tanstack/solid-router" {
  interface Register {
    router: typeof router;
  }
}

render(
  () => (
    <div class="min-h-screen min-w-screen bg-black/90 text-white p-2">
      <RouterProvider router={router} />
    </div>
  ),
  document.getElementById("root") as HTMLElement,
);
