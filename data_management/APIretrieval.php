<?php
    echo 'AASDHABHCBAEJHCBAEEEEEEEEEEEEEEEEEEEEEEEEEEEKH';

    $uri = 'https://api.football-data.org/v4/competitions/PL/scorers';
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token: 6b7c016d1bd54d7683d4a1f5ec148dcb';
    $stream_context = stream_context_create($reqPrefs);
    $response = file_get_contents($uri, false, $stream_context);
    $data = json_decode($response, true);
    var_dump($data);

    $conn = new mysqli("localhost", "root", "", "soccerdb");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    //echo $data['standings'][0]['table'][0]['team']['name'];


    

$teams = [64, 61, 57, 73, 62, 71, 1044, 354, 66, 351, 
          397, 341, 65, 328, 402, 563, 67, 63, 58, 76]; 

$mid = (count($teams) / 2);
$firstHalf = array_slice($teams, 0, $mid);
$secondHalf = array_slice($teams, $mid);

//halfTeamData($firstHalf, 0, $conn);
//halfTeamData($secondHalf, 10, $conn);

//getPlayerData($teams, $conn);

//halfMatches(1, $conn);
//halfMatches(18, $conn);
//halfMatches(35, $conn);

getScorers($conn);




function halfTeamData($arr, $half, $conn){

    foreach ($arr as $id) {
        $index = array_search($id, $arr)+$half;
        //$index;
        $uri = 'https://api.football-data.org/v4/competitions/PL/standings';
        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 6b7c016d1bd54d7683d4a1f5ec148dcb';
        $stream_context = stream_context_create($reqPrefs);
        $response = file_get_contents($uri, false, $stream_context);
        $data = json_decode($response, true);

        $table = $data['standings'][0]['table'][$index];


        



        echo '--------------------------------START OF CLUB---------------------------------------------------';
        echo '<br>';
        echo '<br>';

        var_dump($table);
        echo '<br>';
        echo '<br>';

        echo $table['team']['name'] . ' name';
        $TEAMNAME = $table['team']['name'];
        echo '<br>';
        echo '<br>';
        $team_id = $table['team']['id'];
        echo $table['team']['id'] . ' id';
        echo '<br>';
        echo $table['team']['tla'] . ' nickname';
        $NICKNAME =  $table['team']['tla'];
        echo '<br>';
        echo $table['team']['crest'] . ' crest';
        $CREST =  $table['team']['crest'];
        echo '<br>';
        echo $table['position'] . ' position';
        $POSITION =  $table['position'];
        echo '<br>';
        echo $table['playedGames'] . ' played games';
        $PLAYED =  $table['playedGames'];
        echo '<br>';
        echo $table['won'] . ' wins';
        $WINS =  $table['won'];
        echo '<br>';
        echo $table['draw'] . ' draws';
        $DRAWS =  $table['draw'];
        echo '<br>';
        echo $table['lost'] . ' losses';
        $LOST =  $table['lost'];
        echo '<br>';
        echo $table['goalDifference'] . ' GD';
        $GOALDIFF =  $table['goalDifference'];
        echo '<br>';
        echo $table['points'] . ' pts';
        $POINTS =  $table['points'];
        echo '<br>';
        echo $data['season']['currentMatchday'] . ' matchday';
        $MATCHDAY =  $data['season']['currentMatchday'];
        echo '<br>';
        echo '<br>';

        echo 'NEXT CALL';

        $uri = 'https://api.football-data.org/v4/teams/';
        $uri .= $team_id;
        $response = file_get_contents($uri, false, $stream_context);
        $data = json_decode($response, true);
        var_dump($data);
        echo '<br>';
        echo '<br>';
        echo $data['coach']['name'] . ' coach';
        $COACH =  $data['coach']['name'];
        echo '<br>';
        echo $data['founded'] . ' founded';
        $FOUNDED =  $data['founded'];
        echo '<br>';
        echo $data['clubColors'] . ' colors';
        $COLORS =  $data['clubColors'];
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '--------------------------------END OF CLUB---------------------------------------------------';
        echo '<br>';
        echo '<br>';

        $sql = "INSERT INTO teams
        (team_id, team_name, nickname, colors, logo, coach, founded, 
        standing, played, won, draw, loss, points, goal_diff, matchday)
        VALUES
        ('$team_id', '$TEAMNAME', '$NICKNAME', '$COLORS', '$CREST', '$COACH', '$FOUNDED', 
        '$POSITION', '$PLAYED', '$WINS', '$DRAWS', '$LOST', '$POINTS', '$GOALDIFF', '$MATCHDAY')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }

        sleep(10.5);
}
    
}


function getPlayerData($arr, $conn){
    foreach($arr as $id){

        $index = array_search($id, $arr);

        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 6b7c016d1bd54d7683d4a1f5ec148dcb';
        $stream_context = stream_context_create($reqPrefs);
        $uri = 'https://api.football-data.org/v4/teams/';
        $uri .= $id;
        $response = file_get_contents($uri, false, $stream_context);
        $data = json_decode($response, true);
        var_dump($data);
        echo '<br>';
        echo '<br>';

        foreach($data['squad'] as $player){
            
            echo $player['name'] . $player['position'] . $player['nationality'] . $player['id'];
            $playerID = (int) $player['id'];
            $position = $conn->real_escape_string($player['position']);
            $country  = $conn->real_escape_string($player['nationality']);
            $name     = $conn->real_escape_string($player['name']);
            $dob      = $conn->real_escape_string($player['dateOfBirth']);
            $teamID   = (int) $data['id'];
            $flagImg  = $conn->real_escape_string('https://countryflagsapi.com/png/' . urlencode($country));

            $sql = "INSERT INTO players (player_id, pos, nationality, player_name, dob, team_id, flagIMG)
                    VALUES ('$playerID', '$position', '$country', '$name', '$dob', '$teamID', '$flagImg')";


            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }

        echo '<br>';
        echo '<br>';

        



        sleep(5.5);
    }
}


function halfMatches($initial, $conn){

    for($i=$initial; $i<=38; $i++){
        echo '<br>';
        echo '<br>';


        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 6b7c016d1bd54d7683d4a1f5ec148dcb';
        $stream_context = stream_context_create($reqPrefs);
         $uri = 'https://api.football-data.org/v4/competitions/PL/matches?matchday=';
        $uri .= $i;
        $response = file_get_contents($uri, false, $stream_context);
        $data = json_decode($response, true);
        var_dump($data);
        $matches = $data['matches'];
        foreach($matches as $match){
            echo '<br>';

            $matchID = $match['id'];
            echo $matchID;
            echo '<br>';

            $hometeam = $match['homeTeam']['name'];
            echo $match['homeTeam']['name'];
            echo ' VS ';
            echo $match['awayTeam']['name'];
            $awayteam = $match['awayTeam']['name'];
            echo '<br>';
            echo $match['homeTeam']['id'] . ' ID';
            $homeID = $match['homeTeam']['id'];
            echo '<br>';
            echo $match['awayTeam']['id'] . ' ID';
            $awayID = $match['awayTeam']['id'];
            echo '<br>';

            $score = $match['score'];

            echo $score['halfTime']['home'];
            echo '<br>';
            $halfhomeScore = $score['halfTime']['home'];
           
            echo $score['halfTime']['away'];
            echo '<br>';
            $halfawayScore = $score['halfTime']['away'];

            echo $score['fullTime']['home'];
            echo '<br>';

            $homeScore = $score['fullTime']['home'];
            echo $score['fullTime']['away'];
            echo '<br>';

            $awayScore = $score['fullTime']['away'];

            $winner = $score['winner'];
            echo $winner;

            echo '<br>';

            $status = $match['status'];
            echo $status;

            echo '<br>';

            $ref = $match['referees'][0]['name'];
            echo $ref;
            echo '<br>';

            $date = $match['utcDate'];
            echo $date;
            echo '<br>';
            echo '<br>';


            $sql = "INSERT INTO games
            (matchday, match_id, home_team, away_team, match_date, home_score, away_score, 
            home_score_firsthalf, away_score_firsthalf, match_status, referee, home_team_id, away_team_id, winner)
            VALUES
            ('$i', '$matchID', '$hometeam', '$awayteam', '$date', '$homeScore', '$awayScore', 
            '$halfhomeScore', '$halfawayScore', '$status', '$ref', '$homeID', '$awayID', '$winner')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

        }
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '<br>';
        sleep(6);

    }

}


function getScorers($conn){
    $reqPrefs['http']['method'] = 'GET';
    $reqPrefs['http']['header'] = 'X-Auth-Token: 6b7c016d1bd54d7683d4a1f5ec148dcb';
    $stream_context = stream_context_create($reqPrefs);
    $uri = 'https://api.football-data.org/v4/competitions/PL/scorers';
    $response = file_get_contents($uri, false, $stream_context);
    $data = json_decode($response, true);
    var_dump($data);

    foreach($data['scorers'] as $player){

        $player_id = $player['player']['id'];
        echo $player_id;
        echo '<br>';

        $goals = $player['goals'];
        echo $goals;
        echo '<br>';

        $assists = $player['assists'];
        echo $assists;
        echo '<br>';

        $penalties = $player['penalties'];
        echo $penalties;
        echo '<br>';

        $games = $player['playedMatches'];
        echo $games;
        echo '<br>';

        $sql = "INSERT INTO topScorers
            (player_id, goals, assists, penalties, games)
            VALUES
            ('$player_id', '$goals', '$assists', '$penalties', '$games')";

            if ($conn->query($sql) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }

        echo '<br>';
        echo '<br>';
        echo '<br>';


    }
}

?>