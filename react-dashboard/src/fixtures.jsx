import { useEffect, useState } from "react";

function getLastName(str) {
  const words = str.split(' ');
  return words[words.length - 1];
}

function getFirstName(str) {
  const words = str.split(' ');
  return words[0];
}

function FixturesData() {
  const [fixtures, setFixtures] = useState({});

  useEffect(() => {
    fetch("http://localhost/soccer-dashboard/data_management/endpoints/getFixtures.php")
      .then(res => res.json())
      .then(data => {
        // Group by matchweek -> date
        const grouped = data.reduce((acc, game) => {
          const week = game.matchday;
          const date = game.match_date;

          if (!acc[week]) acc[week] = {};
          if (!acc[week][date]) acc[week][date] = [];
          acc[week][date].push(game);

          return acc;
        }, {});
        console.log(grouped);
        setFixtures(grouped);
      })
      .catch(err => console.error("Error fetching fixtures:", err));
  }, []);

  return (
    <div className="">
      {Object.entries(fixtures).map(([week, dates]) => (
        <div key={week} className="mb-6">
           <h1 className="text-center text-xl font-semibold">Matchweek {week}</h1>
          {Object.entries(dates).map(([date, games]) => (
            <div key={date} className="mb-4">
              <h2 className="underline mb-2">{getFirstName(date).substring(5,10)}</h2>
              <ul>
                {games.map((game, idx) => (
                  ///<li key={idx} className="flex justify-between p-2 bg-slate-800 rounded mb-2">
                    ///<span>{game.home_team}</span>
                    ///<span className="text-sm font-semibold">{game.kickoff_time}</span>
                    ///<span>{game.away_team}</span>
                <li className="bg-slate-950 mb-4 rounded-md pl-2 pr-2 shadow-md shadow-gray-950">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8 flex-.8 mr-2" src={game.home_team_logo} />
                    <p className="flex-[4] truncate">{game.home_team}</p>
                    <div className='flex-[2]'>
                      <h2 className="font-semibold">{getLastName(game.match_date).substring(0, 5)}</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p className="flex-[4] truncate">{game.away_team}</p>
                    <img className="h-8 ml-2 flex-.8" src={game.away_team_logo} />
                  </div>
                </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FixturesData;




function Fixtures() {
  return (
    <ul class="text-center 
              ">
            
            <li className="">
              <h1 className="text-center text-xl font-semibold">
              Matchweek 1
              </h1>
              <li>
                <h2 className="underline mb-2">Saturday, October 25</h2>
                <ul>
                  <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
                </ul>

              </li>

              <ul>

                
              </ul>

              <h2 className="underline mb-2">Saturday, October 25</h2>

              <ul>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
              </ul>
              <ul>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
              </ul>
              
            </li>
            <li className="">
              <h1 className="text-center text-xl font-semibold">
              Matchweek 1
              </h1>
              <h2 className="underline mb-2">Saturday, October 25</h2>
              <ul>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
              </ul>

              <h2 className="underline mb-2">Saturday, October 25</h2>

              <ul>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 s shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
              </ul>
              <ul>
                <li className="bg-slate-950 ml-3 mr-3 mb-2 rounded-md pl-2 pr-2 shadow-md black">
                  <div className="flex flex-row justify-between items-center">
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                    <p>Chelsea</p>
                    <div>
                      <h2 className="font-semibold">13:00</h2>
                      <p className="text-sm">VS</p>
                    </div>
                    <p>Arsenal</p>
                    <img className="h-8" src="public/premierleaguelogoimages.jpg" />
                  </div>
                </li>
              </ul>
              
            </li>
          </ul>
  );

}


