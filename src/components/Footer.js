import React from "react";

export default function Footer({ setprivacyPolicy, setAbout }) {
  return (
    <footer className="relative w-full dark:bg-gray-800 h-20 grid place-items-center shadow-2xl bottom-0 mt-auto">
      <ul className="text-gray-500 text-sm flex flex-wrap items-center">
        <li className="m-1">
          <button
            className="hover:underline"
            onClick={() => {
              setprivacyPolicy(true);
              setAbout(false);
            }}
          >
            Privacy Policy
          </button>
        </li>
        <button
          className="hover:underline"
          onClick={() => {
            setAbout(true);
            setprivacyPolicy(false);
          }}
        >
          <li className="m-3">About us</li>
        </button>
      </ul>
    </footer>
  );
}
