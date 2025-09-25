<?php
    header("Access-Control-Allow-Origin: *"); // allow any origin (good for dev, not prod)
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Type: application/json");
    header('Content-Type: application/json');
    include 'db.php';

    $sql = "SELECT * FROM teams ORDER BY standing";
    $result = $conn->query($sql);

    $teams = [];
    while ($row = $result->fetch_assoc()) {
        $teams[] = $row;
    }

    echo json_encode($teams);
    $conn->close();
?>
