// routes.tsx
import { Navigate, Route } from "react-router-dom";
import { lazy } from "react";

const Layout = lazy(() => import("../layout"));
const Users = lazy(() => import("../page/Users"));
const Favorites = lazy(() => import("../page/Favorites"));
const NotFound = lazy(() => import("../page/NotFound"));

export const routes = (
  <Route element={<Layout />}>
    <Route path="/" element={<Navigate to="/users" replace />} />
    <Route path="/users" element={<Users />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="*" element={<NotFound />} />
  </Route>
);
