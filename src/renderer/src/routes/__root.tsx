import Sidebar from "@renderer/components/Sidebar";
import { createRootRoute, Outlet } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import "../assets/base.css";

export const Route = createRootRoute({
  component: () => (
    <div class="grid grid-cols-[auto_1fr] gap-8">
      <Sidebar />
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  ),
});
