import React from "react";
import { FiMenu, FiLogOut, FiInfo, FiHome } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";

export default function Sidebar({ Logout, setAbout, home }) {
  const [showMenu, setshowMenu] = useState(false);
  if (showMenu) {
    return (
      //menu open
      <div className="fixed left-0 top-0 h-screen bg-gray-900 w-16 text-white m-0 flex flex-col shadow-lg">
        <div className="sidebar-icon inline-block relative">
          <button
            title="Menu"
            onClick={() => {
              setshowMenu(false);
            }}
          >
            <FiMenu size="40" />
          </button>
          <div className="absolute top-full left-0 w-[150px] z-10 bg-slate-500 rounded-md p-2 mt-1">
            <ul>
              <li>
                <button
                  title="Home"
                  className="w-full grid place-items-center my-1 flex"
                  onClick={() => {
                    home();
                  }}
                >
                  <FiHome size="25" />
                  Home
                </button>
              </li>
              <li>
                <button
                  title="About"
                  className="w-full grid place-items-center my-1"
                  onClick={() => {
                    setAbout(true);
                  }}
                >
                  <FiInfo size="25" />
                  About us
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-icon">
          <button
            title="Logout"
            onClick={() => {
              if (window.confirm("Are you sure you want to logout")) {
                Logout();
              }
            }}
          >
            <FiLogOut size="40" />
          </button>
        </div>
      </div>
    );
  } else {
    //menu not open
    return (
      <div className="fixed left-0 top-0 h-screen bg-gray-900 w-16 text-white m-0 flex flex-col shadow-lg">
        <div className="sidebar-icon inline-block relative">
          <button
            title="Menu"
            onClick={() => {
              setshowMenu(true);
            }}
          >
            <FiMenu size="40" />
          </button>
        </div>
        <div className="sidebar-icon">
          <button
            title="Logout"
            onClick={() => {
              if (window.confirm("Are you sure you want to logout")) {
                Logout();
              }
            }}
          >
            <FiLogOut size="40" />
          </button>
        </div>
      </div>
    );
  }
}
