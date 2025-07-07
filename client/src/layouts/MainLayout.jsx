// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";


const MainLayout = () => {
  return (
    <div>
      <h1>NeoMart</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
