<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include "./config.php";



// PDO QUERY
$stmt = $pdo->query('SELECT * FROM product') or die("SQL Query Failed.");

// and we can do below without setting attribute of "fetch"
while ($row = $stmt->fetch()) {
    echo $row->title . '<br>';
}

echo 'OBJECT mode';




// $sql = "SELECT * FROM product";
// $result =  mysqli_query($conn, $sql) or die("SQL Query Failed.");

if (mysqli_num_rows($result) > 0) {
    $output = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($output);
}else {
    echo json_encode(array('message' => 'no product record found.', 'status' => false));
}

?>
