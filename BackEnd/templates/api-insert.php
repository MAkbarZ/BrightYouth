<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

$data = json_decode(file_get_contents("php://input"), true);

$student_age = $data["sage"];
$student_name = $data["sname"];
$student_city = $data["scity"];

include "config.php";


$sql = "INSERT INTO students (student_name, age, city) VALUES ('{$student_name}', {$student_age}, '{$student_city}')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array('message' => 'Student Record Inserted.', 'status' => true));
    
}else {
    echo json_encode(array('message' => 'Student Record Not Inserted.', 'status' => false));
}

?>
