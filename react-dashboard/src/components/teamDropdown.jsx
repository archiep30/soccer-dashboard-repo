import { useEffect, useState } from "react";

function BasicExample() {
  const [teams, setStandings] = useState([]);

  useEffect(() => {
    fetch("http://localhost/soccer-dashboard/data_management/endpoints/getTeams.php")
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data);
        setStandings(data);
    })
      .catch(err => console.error("Error fetching standings:", err));
  }, []);

  return (
    <select className="bg-slate-800 text-2xl pl-5 pr-5 rounded-md">
      <option>Home</option>;
      {teams.length > 0 ? (
            teams.map((team, index) => (
              <option value={team.team_name} className="text-white text-md">{team.team_name}</option>
            )))
          :(
            <p>loading teams</p>
          )}
    </select>
  );
}

export default BasicExample;