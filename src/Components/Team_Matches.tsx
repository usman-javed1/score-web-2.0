import React from "react";

const Team_Matches = ({
  image,
  team,
  remainingMatch,
  league,
  date,
  parentClass,
  childClass
}: {
  image: string;
  team: string;
  remainingMatch: string;
  league: string;
  date: string;
  parentClass:string;
  childClass:string;

}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-4 mb-7">
        <div className={`flex gap-2 w-full justify-${parentClass}`}>
          <img src={image} alt="Freiburg" className="w-10 rounded-md" />
          <p className="text-white bg-red-600 text-center w-10 flex justify-center items-center rounded-full">L</p>
        </div>
        <div className={`text-${childClass}`}>
          <p>{team}</p>
          <p className="text-[#aaa]">
            (Away) <span className="text-white">{remainingMatch}</span>
          </p>
          <p className="text-[#aaa]">{league}</p>
          <p className="text-[#aaa]">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Team_Matches;
