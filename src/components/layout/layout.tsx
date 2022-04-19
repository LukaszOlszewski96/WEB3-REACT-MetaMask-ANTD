import React from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: React.FC = () => {
  return (
    <main>
      <h1>Layout</h1>
      <Outlet />
    </main>
  );
};
