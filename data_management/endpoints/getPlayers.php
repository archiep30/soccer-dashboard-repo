<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); // allow any origin (good for dev, not prod)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
include 'db.php';

$team_id = isset($_GET['team_id']) ? intval($_GET['team_id']) : 0;

$sql = "SELECT * 
        FROM players 
        WHERE team_id = $team_id
        ORDER BY player_name";

$result = $conn->query($sql);

$players = [];
while ($row = $result->fetch_assoc()) {
    $players[] = $row;
}

echo json_encode($players);
$conn->close();
?>
