import React from "react";
import Individual_Team_Logo from "./Individual_Team_Logo";

const Form = () => {
  return (
    <div className="flex justify-center w-[700px] m-auto mt-6 flex-col">
      <h1 className="text-3xl text-center text-white">FORM</h1>
      <div className="flex justify-around items-start mt-5">
        {/* Left Team */}
        <div className="flex flex-col items-center text-white">
          <Individual_Team_Logo image="/logo 1.png" team="Borussia Dortmund" />
          {/* Match Results */}
          <div className="mt-3 text-center">
            <p className="text-red-500">L</p>
            <p>Union Berlin</p>
            <p>(Away) 2 - 1</p>
            <p>Bundesliga</p>
            <p>Oct 5, 2024</p>
          </div>
          <div className="mt-3 text-center">
            <p className="text-green-500">W</p>
            <p>Celtic</p>
            <p>(Home) 7 - 1</p>
            <p>Champions League</p>
            <p>Oct 2, 2024</p>
          </div>
          {/* Add more results as needed */}
        </div>

        {/* Divider (White Line) */}
        <div className="w-[2px] h-auto bg-white mx-10"></div>

        {/* Right Team */}
        <div className="flex flex-col items-center text-white">
          <Individual_Team_Logo image="/logo 2.png" team="St. Pauli" />
          {/* Match Results */}
          <div className="mt-3 text-center">
            <p className="text-red-500">L</p>
            <p>Hannover 96</p>
            <p>(Away) 3 - 2</p>
            <p>Club Friendlies</p>
            <p>Oct 10, 2024</p>
          </div>
          <div className="mt-3 text-center">
            <p className="text-red-500">L</p>
            <p>Mainz 05</p>
            <p>(Home) 0 - 3</p>
            <p>Bundesliga</p>
            <p>Oct 5, 2024</p>
          </div>
          {/* Add more results as needed */}
        </div>
      </div>
    </div>
  );
};

export default Form;
