<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); // allow any origin (good for dev, not prod)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
include 'db.php';

$matchday = isset($_GET['matchday']) ? intval($_GET['matchday']) : 0;

$sql = "SELECT 
  g.*,
  th.logo    AS home_team_logo,
  ta.logo    AS away_team_logo
FROM games AS g
JOIN teams AS th ON g.home_team_id = th.team_id
JOIN teams AS ta ON g.away_team_id = ta.team_id
WHERE g.match_status = 'FINISHED'
ORDER BY g.matchday DESC, g.match_date DESC;

";

$result = $conn->query($sql);

$matches = [];
while ($row = $result->fetch_assoc()) {
    $matches[] = $row;
}

echo json_encode($matches);
$conn->close();
?>
