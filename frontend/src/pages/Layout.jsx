import { useRef, useEffect, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";
import '../css/layout.css';

export default function Layout({  }) {

  const navigate = useNavigate();
  const global_context = useContext(GlobalContext)

  const navItem = [
    {
      title: "Home",
      url: "/",
      icon: "/images/home.png",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: "/images/dashboard.png",
    },
    {
        title: "Inventory",
        url: "/inventory",
        icon: "/images/inventory.jpg",
    },
  ]

  const logout=()=>{
    global_context.setUser(null)
    localStorage.removeItem("user_credentials")
    navigate("/login")
  }


  return (
    <div className="">
        <nav className="nav_bar">
          {global_context.user !== null && <div className="m-auto text-white">
            Welcome, {JSON.parse(global_context?.user)?.name}
          </div>}
          {
            navItem.map((value)=>{
              return <a href={value.url} key={value.url} className="m-auto">
                <div className="nav_item">
                  <div className=""><img src={value.icon} className="icon" /></div>
                  <div className="">{value.title}</div>
                </div>
              </a>
            })
          }
          {global_context.user !== null &&
          JSON.parse(global_context.user)?.permissions.find((value) => value?.permission?.name === "view_permission") != undefined &&
          <a href="/admin" className="m-auto">
            <div className="nav_item">
              <div className=""><img src="" /></div>
              <div className="">Admin</div>
          </div></a>}
          {global_context.user !== null && <div className="nav_item" onClick={logout}>
            <div className=""><img src="" /></div>
            <div className="">Logout</div>
          </div>}
          {global_context.user === null && 
          <a href="/register" className="m-auto">
              <div className="nav_item">
                <div className=""><img src="" /></div>
                <div className="">Register</div>
              </div>
            </a>}
          {global_context.user === null &&
          <a href="/login" className="m-auto">
            <div className="nav_item">
              <div className=""><img src="" /></div>
              <div className="">Login</div>
          </div></a>}
        </nav>
        <div className="w-full">
          <Outlet />
        </div>
    </div>
  );
};
