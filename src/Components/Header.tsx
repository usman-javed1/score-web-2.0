import React from "react";
import Individual_Team_Logo from "./Individual_Team_Logo"

const Header = () => {
  return (
    <div className="flex justify-between w-[600px] mx-auto items-center  py-6">
      <Individual_Team_Logo image ="/logo 2.png" team="Borussia Dortmund"/>
      <div className="time">
        <h2 className="text-center text-3xl font-medium">23:30</h2>
        <p className="mt-2 text-slate-400 font-normal">Oct 18,2024</p>
      </div>
      <Individual_Team_Logo image ="/logo 2.png" team="Borussia Dortmund"/>
    </div>
  );
};

export default Header;
