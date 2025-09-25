import { useEffect, useState } from "react";

function StandingsData() {
  const [teams, setStandings] = useState([]);

  useEffect(() => {
    fetch("http://localhost/soccer-dashboard/data_management/endpoints/getTeams.php")
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data);  // 👈 check this in browser console
        setStandings(data);
    })
      .catch(err => console.error("Error fetching standings:", err));
  }, []);

  return (

        <ol className="ml-6 mr-2 overflow-y-scroll flex-grow scroll-smooth mb-4
          [&::-webkit-scrollbar]:w-2
        dark:[&::-webkit-scrollbar-track]:bg-slate-700
        dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {teams.length > 0 ? (
            teams.map((team, index) => (
              //<li key={index}>
               // {player.player_name} — {player.goals} goals
              //</li>
              <li key={index} className="m-3 bg-slate-950 text-white shadow-sm shadow-slate-950 pt-1 pb-1">
                <div className="flex flex-row justify-between">
                <span
                className={`w-6 text-right mr-4 ml-2 font-bold ${
                    index === 0
                    ? "text-yellow-400" // gold
                    : index === 1
                    ? "text-gray-300"   // silver
                    : index === 2
                    ? "text-orange-800" // bronze
                    : index === 17 | index === 18 | index === 19 // red
                    ? "text-red-600" // bronze
                    : "text-white"
                }`}
                >
                {index + 1}.
                </span>

                <div className="flex-1 text-center">
                    <img className="h-8 rounded-md items-center align-middle justify-center flex-1" src={team.logo} />
                </div>
                <p className="flex-[3] text-center truncate">{team.team_name}</p>
                <p className="flex-1 text-center">{team.points}</p>
                <p className="flex-1 text-center">{team.won}</p>
                <p className="flex-1 text-center">{team.loss}</p>
                <p className="flex-1 text-center">{team.draw}</p>
                <p className="flex-1 text-center">{team.goal_diff}</p>
                </div>
            </li>
            ))
          ) : (
            <p>Loading top scorers...</p>
          )}
        </ol>

  );
}


function Standings(){
    return (
        <ol className="ml-6 mr-2 overflow-y-scroll flex-grow scroll-smooth mb-4
          [&::-webkit-scrollbar]:w-2
        dark:[&::-webkit-scrollbar-track]:bg-slate-700
        dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          <li className="m-3 bg-slate-950 text-yellow-500 shadow-sm shadow-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">1.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 text-gray-400 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">2.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>
          <li className="m-3 bg-slate-950 text-orange-900 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">3.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>
          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">4.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">5.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">6.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">7.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">8.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">9.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">10.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">11.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">12.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">13.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">14.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">15.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">16.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">17.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 text-rose-600 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">18.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 text-rose-600 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">19.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>

          <li className="m-3 bg-slate-950 text-rose-600 pt-1 pb-1">
            <div className="flex flex-row justify-between">
              <span className="w-6 text-right mr-4">20.</span>
              <div className="flex-1 text-center">
                <img className="h-5 rounded-md items-center align-middle justify-center flex-1" src="public/premierleaguelogoimages.jpg" />
              </div>
              <p className="flex-1 text-center">Chelsea</p>
              <p className="flex-1 text-center"> 30</p>
              <p className="flex-1 text-center">10</p>
              <p className="flex-1 text-center">2 </p>
              <p className="flex-1 text-center">1 </p>
              <p className="flex-1 text-center">+8</p>
            </div>
          </li>
          


        </ol>
    )
}

export default StandingsData;