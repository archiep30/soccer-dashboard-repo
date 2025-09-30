import { useEffect, useState } from "react";

function getLastName(str) {
  const words = str.split(' ');
  return words[words.length - 1];
}

function TopScorerData() {
  const [scorers, setScorers] = useState([]);

  useEffect(() => {
    fetch("http://localhost/soccer-dashboard/data_management/endpoints/getTopScorers.php")
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data);
        setScorers(data);
    })
      .catch(err => console.error("Error fetching top scorers:", err));
  }, []);

  return (

        <ol className="flex-1 ml-1 mr-1 overflow-y-scroll flex-grow scroll-smooth mb-5 h-full
                  [&::-webkit-scrollbar]:w-2
                dark:[&::-webkit-scrollbar-track]:bg-slate-700
                dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
          {scorers.length > 0 ? (
            scorers.map((player, index) => (
              //<li key={index}>
               // {player.player_name} — {player.goals} goals
              //</li>
              <li key={index} className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="flex-[1] text-right mr-4">{index + 1}.</span>
                    <p className="flex-[4] text-center truncate">{(player.player_name)}</p>
                    <p className="flex-1 text-center">{player.goals}</p>
                    <p className="flex-1 text-center">{player.penalties}</p>
                    <p className="flex-1 text-center">{player.assists}</p>
                    <p className="flex-1 text-center">{player.games}</p>
                  </div>
                </li>
            ))
          ) : (
            <p>Loading top scorers...</p>
          )}
        </ol>

  );
}


function Scorers(){
    return (
        <ol className="flex-1 ml-1 mr-1 overflow-y-scroll flex-grow scroll-smooth mb-5 h-full
                  [&::-webkit-scrollbar]:w-2
                dark:[&::-webkit-scrollbar-track]:bg-slate-700
                dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">1.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">2.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">3.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">4.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">5.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">6.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">7.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">8.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">9.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                <li className="bg-slate-950">
                  <div className="flex flex-row justify-between mb-1">
                    <span className="w-6 text-right mr-4">10.</span>
                    <p className="flex-1 text-center">Haaland</p>
                    <p className="flex-1 text-center">27</p>
                    <p className="flex-1 text-center">23</p>
                    <p className="flex-1 text-center">22</p>
                    <p className="flex-1 text-center">24</p>
                  </div>
                </li>

                

                

                </ol>
            
    )
}

export default TopScorerData;