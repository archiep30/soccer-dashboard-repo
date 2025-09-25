<?php
header("Access-Control-Allow-Origin: *"); // allow any origin (good for dev, not prod)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

header('Content-Type: application/json');
include 'db.php';

$sql = "SELECT *
        FROM topScorers s
        JOIN players p on s.player_id = p.player_id
        ORDER BY goals DESC
        LIMIT 10";

$result = $conn->query($sql);

$scorers = [];
while ($row = $result->fetch_assoc()) {
    $scorers[] = $row;
}

echo json_encode($scorers);
$conn->close();
?>
