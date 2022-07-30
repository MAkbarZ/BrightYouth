<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include Core object
// include_once '../../shared/config/core.php';

// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/user.php';

  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$obj = new User($db);
  
// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
  
// query users
$stmt = $obj->search($keywords);


// show users data
// $result = $stmt->fetch();
$result = $stmt->fetchAll();

var_dump($result);
// var_dump(count($result));
if (count($result)>0) {
    
    // set response code - 200 OK
    http_response_code(200);
        
    // echo json_encode($users_arr);
    echo json_encode($result);
    
} else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no users found
    echo json_encode(array(
        'passed' => false,
        'Response' => "404 Not found. " . "<br>" .
            "count($" . "result)) is zero",
        'userMessage' => "No User found."
    ));
}

?>