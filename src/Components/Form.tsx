import React from "react";
import Individual_Team_Logo from "./Individual_Team_Logo";
import Team_Matches from "./Team_Matches";

const Form = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center mt-8 mb-5 font-medium text-3xl">FORM</h1>
      <div className="flex justify-center items-center gap-20">
        <div className="flex flex-col items-center  gap-2 ">
          <Individual_Team_Logo image="/logo 2.png" team="Borussia Dortmund" />
          <Team_Matches
            image="/team_logo_1.webp"
            team="Union Berlin"
            remainingMatch="2-1"
            league="Champions League"
            date="Oct 8, 2024"
            parentClass="end"
            childClass="end"
          />
          <Team_Matches
            image="/team_logo_1.webp"
            team="Union Berlin"
            remainingMatch="2-1"
            league="Champions League"
            date="Oct 8, 2024"
            parentClass="end"
            childClass="end"
          />
          <Team_Matches
            image="/team_logo_1.webp"
            team="Union Berlin"
            remainingMatch="2-1"
            league="Champions League"
            date="Oct 8, 2024"
            parentClass="end"
            childClass="end"
          />
        </div>
        <hr className="text-white bg-white w-1 h-screen"/>
        <div className="flex flex-col items-center  gap-2">
          <Individual_Team_Logo image="/logo 2.png" team="Borussia Dortmund" />
          <Team_Matches
            image="/team_logo_2.jpeg"
            team="Union Berlin"
            remainingMatch="1-2"
            league="Bundeslyia"
            date="Oct 5, 2024"
            parentClass="start"
            childClass="start"
          />
          <Team_Matches
            image="/team_logo_2.jpeg"
            team="Union Berlin"
            remainingMatch="1-2"
            league="Bundeslyia"
            date="Oct 5, 2024"
            parentClass="start"
            childClass="start"
          />
          <Team_Matches
            image="/team 2.jpeg"
            team="Union Berlin"
            remainingMatch="1-2"
            league="Bundeslyia"
            date="Oct 5, 2024"
            parentClass="start"
            childClass="start"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
