<?php
    $uri = 'https://api.football-data.org/v4/competitions/PL/standings';
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

    echo $data['standings'][0]['table'][0]['team']['name'];

    //dfsknsd
    

$teams = [64, 61, 57, 73, 62, 71, 1044, 354, 66, 351, 
          397, 341, 65, 328, 402, 563, 67, 63, 58, 76]; 

$firstHalf = array_splice($teams, 0, count($teams)/2);
$secondHalf = array_splice($teams, count($teams)/2, 0);

halfData($firstHalf, 0);



function halfData($arr, $half){

    foreach ($arr as $id) {
        $index = array_search($id, $arr);
        $index .= $half;
        $reqPrefs['http']['method'] = 'GET';
        $reqPrefs['http']['header'] = 'X-Auth-Token: 6b7c016d1bd54d7683d4a1f5ec148dcb';
        $stream_context = stream_context_create($reqPrefs);
        $uri = 'https://api.football-data.org/v4/competitions/PL/standings';
        $response = file_get_contents($uri, false, $stream_context);
        $data = json_decode($response, true);
        $table = $data['standings'][0]['table'][$index];

        echo '--------------------------------START OF CLUB---------------------------------------------------';
        echo $table['team']['name'];
        echo '<br>';
        $MATCHDAY = $data['season']['currentMatchday'];
        echo $MATCHDAY;
        echo '<br>';
        $team_id = $table['team']['id'];
        echo $table['team']['id'];
        $ID =  $table['team']['id'];
        echo '<br>';
        echo $table['team']['tla'];
        $NICKNAME =  $table['team']['tla'];
        echo '<br>';
        echo $table['team']['crest'];
        $CREST =  $table['team']['crest'];
        echo '<br>';
        echo $table['position'];
        $POSITION =  $table['position'];
        echo '<br>';
        echo $table['playedGames'];
        $PLAYED =  $table['playedGames'];
        echo '<br>';
        echo $table['won'];
        $WINS =  $table['won'];
        echo '<br>';
        echo $table['draw'];
        $DRAWS =  $table['draw'];
        echo '<br>';
        echo $table['lost'];
        $LOST =  $table['lost'];
        echo '<br>';
        echo $table['goalDifference'];
        $GOALDIFF =  $table['goalDifference'];
        echo '<br>';
        echo $table['points'];
        $POINTS =  $table['points'];
        echo '<br>';
        echo $data['season']['currentMatchday'];
        $MATCHDAY =  $data['season']['currentMatchday'];
        echo '<br>';
        echo '<br>';

        $uri = 'https://api.football-data.org/v4/teams/';
        $uri .= $team_id;
        $response = file_get_contents($uri, false, $stream_context);
        $data = json_decode($response, true);
        var_dump($data);
        echo '<br>';
        echo '<br>';
        echo $data['coach']['name'];
        $COACH =  $data['coach']['name'];
        echo '<br>';
        echo $data['founded'];
        $FOUNDED =  $data['founded'];
        echo '<br>';
        echo $data['clubColors'];
        $FOUNDED =  $data['clubColors'];
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '<br>';
        echo '--------------------------------END OF CLUB---------------------------------------------------';
        echo '<br>';
        echo '<br>';
        sleep(12);
}
    
}


?>