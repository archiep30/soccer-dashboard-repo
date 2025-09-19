<?php
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
