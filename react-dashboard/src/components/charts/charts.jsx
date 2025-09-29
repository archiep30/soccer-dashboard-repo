import React from "react";
import GoalsChart from "./goalsChart.jsx";
import { useEffect, useState } from "react";

export default function Chart() {
  const [topPlayers, setTopPlayers] = useState([]);
  const [topGoals, setTopGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost/soccer-dashboard/data_management/endpoints/getTopScorers.php")
      .then((res) => res.json())
      .then((data) => {
        // Convert goals to numbers and sort descending
        console.log("API Response:", data)
        const sorted = data
          .map(player => ({ 
            player_name: player.player_name, 
            goals: parseInt(player.goals, 10) 
          }))
          .sort((a, b) => b.goals - a.goals);

        const top5 = sorted.slice(0, 5);

        setTopPlayers(top5.map(p => p.player_name));
        setTopGoals(top5.map(p => p.goals));
        console.log(topGoals);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-slate-900 w-full h-4/6">
      <h1 className="text-white text-2xl mb-4">Goals</h1>
      <GoalsChart className="w-100" players={topPlayers} goals={topGoals} />
    </div>
  );
}
