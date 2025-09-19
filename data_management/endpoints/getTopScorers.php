<?php
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
