import FixturesResultsToggle from "../components/gameSwitch";
import StandingsData from "../components/standings";
import TopScorerData from "../components/scorers";
import Chart from "../components/charts/charts";



function Dashboard() {
  return (

  <div className="bg-slate-950 text-cyan-50 flex flex-col place-items-center h-screen w-screen p-2 ">

    <div className="p-6 flex flex-row align-middle justify-center bg-slate-900 rounded-3xl shadow-black shadow-xl w-11/12 m-2">

    <div className="flex flex-col justify-center">
      <img 
        className="h-20 rounded-md" 
        src="/premierleaguelogoimages.jpg" 
        alt="Premier League Logo"
      />
    </div>

      <div className="p-6 flex flex-col align-middle justify-center flex-1">
        <h1 className="text-3xl font-bold self-center">Premier League Dashboard 2025/2026</h1>
        <p className="mt-2 text-white-600 self-center">Track teams, matches, and players throughout the 25/26 season.</p>
      </div>

      <div className="flex-[.5] flex justify-center items-center">
        <form action="/search" className="text-center text-2xl w-full ">
          <input className="bg-slate-950 rounded-xl border-gray-400 border-solid border-2 p-4" inputMode="search" placeholder="search players"/>
        </form>
      </div>

    </div>

    <div className=" flex flex-row flex-1 justify-between w-full h-full p-2 overflow-auto MAINBODY"> 

      <div className="flex flex-[1] flex-col">

        <div className="flex-1  flex flex-col m-4 bg-slate-900 rounded-3xl shadow-black shadow-2xl overflow-hidden">
                <h3 className="text-center text-2xl m-2 font-semibold">Top Scorers</h3>

                <div className=" flex flex-row justify-between mr-2">
                    <span className="flex-1 w-6 text-right mr-4"></span>
                    <p className="flex-[4] text-center">Name</p>
                    <p className="flex-1 text-center">G</p>
                    <p className="flex-1 text-center">PK</p>
                    <p className="flex-1 text-center">A</p>
                    <p className="flex-1 text-center">MP</p>
                </div>
                
                <TopScorerData />
            


        </div>

        <div className="flex-1 m-4 bg-slate-900 rounded-3xl shadow-black shadow-2xl overflow-hidden">
          <Chart />
        </div>

      </div>

      <div className="flex-[2] flex flex-col m-4 bg-slate-900 rounded-3xl shadow-black shadow-2xl overflow-hidden">
        <h3 className="text-center text-2xl m-2 font-semibold">Standings</h3>
        

        <div className="flex flex-row justify-between ml-9 mr-5">
              <span className="w-6 text-right mr-4"></span>

              <p className="flex-1 text-center"></p>
              <p className="flex-[3] text-center">Team</p>
              <p className="flex-1 text-center">Points</p>
              <p className="flex-1 text-center">Wins</p>
              <p className="flex-1 text-center">Losses</p>
              <p className="flex-1 text-center">Draws</p>
              <p className="flex-1 text-center">GD</p>
        </div>

        <StandingsData />

      </div>

      <div className="flex-[1.2] flex flex-col bg-slate-900 rounded-3xl m-4 shadow-black shadow-2xl">
                <FixturesResultsToggle />
      </div>

    </div>
  </div>

  );
}

export default Dashboard;