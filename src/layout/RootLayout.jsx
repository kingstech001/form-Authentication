import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const RootLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    alert("Bye !!!");
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <div className="">
      <header className="flex justify-between p-5 border-b-[1px] flex-wrap">
        <h1 className="text-2xl font-bold text-orange-500">Logo</h1>
        <nav className="flex gap-3 items-center flex-wrap">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <button
            onClick={handleLogout}
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Logout
          </button>
        </nav>
      </header>
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
