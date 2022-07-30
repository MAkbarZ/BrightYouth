<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/user.php';


// get database connection
$database = new Database();
$db = $database->getConnection();
  
// initialize product object
$obj = new User($db);
  
// check the api called GET state and read "id" from it.
// assign the value to the id property of product object.
$obj->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// query product
$stmt = $obj->user();

$num = $obj->rowCountOnSelect($obj->id);

if($num>0){

    // set response code - 200 OK
    http_response_code(200);

    $result = $stmt->fetch();
    // echo $num;
    // make it json format
    // echo json_encode($product_arr);
    echo json_encode($result);
    // echo $result;
}

else{
    // set response code - 404 Not found
    http_response_code(404);
    
    echo '404';
    // tell the user does not exist
    echo json_encode(array(
        'passed' => false,
        'Response' => "404 - Not found" . "<br>" .
            "($" . "num > 0) is Zero",
        'userMessage' => "User not found."
    ));
}
?>