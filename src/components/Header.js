import React from "react";

export default function Header({home}) {
  return (
    <div className="relative w-full bg-primary mt-0 h-20 grid place-items-center shadow-2xl">
      <button onClick={()=>{home()}}><h1 className="text-white text-6xl font-extrabold font-serif">Quizzz</h1></button>
    </div>
  );
}
