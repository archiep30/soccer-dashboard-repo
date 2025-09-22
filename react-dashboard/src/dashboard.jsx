import Fixtures from "./fixtures";
import Standings from "./standings";
import Scorers from "./scorers";

function Dashboard() {
  return (

  <div class="bg-slate-950 text-cyan-50 flex flex-col place-items-center h-screen w-screen p-2 ">

    <div class="p-6 flex flex-row align-middle justify-center bg-slate-900 rounded-3xl shadow-black shadow-xl w-11/12 m-2">

    <div class="flex flex-col justify-center">
      <img 
        className="h-20 rounded-md" 
        src="/premierleaguelogoimages.jpg" 
        alt="Premier League Logo"
      />
    </div>

      <div class="p-6 flex flex-col align-middle justify-center flex-1">
        <h1 class="text-3xl font-bold self-center">Premier League Dashboard 2025/2026</h1>
        <p class="mt-2 text-white-600 self-center">Track teams, matches, and players throughout the 25/26 season.</p>
      </div>

      <div class="flex-[.5] flex justify-center items-center">
        <form action="/search" class="text-center text-2xl w-full ">
          <input className="bg-slate-950 rounded-xl border-gray-400 border-solid border-2 p-6" inputMode="search" placeholder="search players"/>
        </form>
      </div>

    </div>

    <div class=" flex flex-row flex-1 justify-between w-full h-full p-2 overflow-auto MAINBODY"> 

      <div class="flex flex-[1] flex-col">

        <div class="flex-1 m-4 bg-slate-900 rounded-3xl shadow-black shadow-2xl overflow-hidden h-full">
                <h3 class="text-center text-2xl m-2 font-semibold">Top Scorers</h3>

                <div class=" flex flex-row justify-between mr-2">
                    <span class="w-6 text-right mr-4"></span>
                    <p class="flex-1 text-center">Name</p>
                    <p class="flex-1 text-center">G</p>
                    <p class="flex-1 text-center">PK</p>
                    <p class="flex-1 text-center">A</p>
                    <p class="flex-1 text-center">MP</p>
                </div>
                
                <Scorers />
            


        </div>

        <div class="flex-1 m-4 bg-slate-900 rounded-3xl shadow-black shadow-2xl overflow-hidden">
          <div>
            <h3 class="text-center text-2xl m-2 font-semibold">Not Sure Yet</h3>

          <div class="flex flex-col">

            <div class="flex-1">
              <div class=" flex flex-row justify-between">
                  <span class="w-6 text-right mr-4"></span>
                  
                  <p class="flex-1 text-center">Name</p>

                  <p class="flex-1 text-center">G</p>
                  <p class="flex-1 text-center">PK</p>
                  <p class="flex-1 text-center">A</p>
                  <p class="flex-1 text-center">MP</p>
              </div>

              <ol class="overflow-y-scroll flex-grow scroll-smooth
              [&::-webkit-scrollbar]:w-2
              dark:[&::-webkit-scrollbar-track]:bg-slate-700
              dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">

              <li class="bg-black">
                <div class="flex flex-row justify-between">
                  <span class="w-6 text-right mr-4">1.</span>
                  <p class="flex-1 text-center">Haaland</p>
                  <p class="flex-1 text-center">27</p>
                  <p class="flex-1 text-center">23</p>
                  <p class="flex-1 text-center">22</p>
                  <p class="flex-1 text-center">24</p>
                </div>
              </li>

              </ol>
            </div>
          </div>
          </div>


        </div>

      </div>

      <div class="flex-[2] flex flex-col m-4 bg-slate-900 rounded-3xl shadow-black shadow-2xl overflow-hidden">
        <h3 class="text-center text-2xl m-2 font-semibold">Standings</h3>
        

        <div class="flex flex-row justify-between ml-9 mr-5">
              <span class="w-6 text-right mr-4"></span>

              <p class="flex-1 text-center"></p>
              <p class="flex-1 text-center">Name</p>
              <p class="flex-1 text-center">Points</p>
              <p class="flex-1 text-center">Wins</p>
              <p class="flex-1 text-center">Losses</p>
              <p class="flex-1 text-center">Draws</p>
              <p class="flex-1 text-center">GD</p>
        </div>

        <Standings />

      </div>

      <div class="flex-[1.2] flex flex-col bg-slate-900 rounded-3xl m-4 shadow-black shadow-2xl overflow-hidden">
        <h3 class="text-center text-2xl m-2 font-semibold">
          <button class="bg-slate-950 text-md text-gray-8 border-gray-400 border-solid border-2">Fixtures</button>
          <button class="bg-gray-300 text-md text-gray-600">Results</button>
        </h3>

              <Fixtures />
        
      </div>

    </div>
  </div>

  );
}

export default Dashboard;