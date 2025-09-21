<?php
header('Content-Type: application/json');
include 'db.php';

$team_id = isset($_GET['team_id']) ? intval($_GET['team_id']) : 0;

$sql = "SELECT *
        FROM games
        WHERE (home_team_id = $team_id OR away_team_id = $team_id)
        ORDER BY match_date DESC";

$result = $conn->query($sql);

$matches = [];
while ($row = $result->fetch_assoc()) {
    $matches[] = $row;
}

echo json_encode($matches);
$conn->close();
?>
