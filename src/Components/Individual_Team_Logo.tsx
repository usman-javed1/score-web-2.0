

const Individual_Team_Logo = ({image,team}: {image:string, team:string}) => {
  return (
    <div className="" >
      <div className="flex items-center flex-col">
        <img className="w-14" src={image} alt="logo 1" />
        <h3 className="font-medium">{team}</h3>
      </div>
    </div>
  );
};

export default Individual_Team_Logo;
