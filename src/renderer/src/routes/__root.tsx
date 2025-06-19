import Header from "@renderer/components/Header";
import { createRootRoute, Outlet, useLocation } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import "../assets/base.css";

export const Route = createRootRoute({
  component: () => {
    const location = useLocation();
    console.log(location)
    return (
      <>
        <Header title={location.name} />
        <Outlet />
        <TanStackRouterDevtools />
      </>
    )
  },
});
