<?php
// required headers
// header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *",true,200);
header("Content-Type: application/json; charset=UTF-8");
// header("Access-Control-Allow-Methods: GET,POST,PUT,PATCH,DELETE,OPTIONS");

header("Access-Control-Max-Age: 3600");
// header("Access-Control-Allow-Headers: 
//             Access-Control-Allow-Origin, 
//             Content-Type, 
//             Access-Control-Allow-Methods,
//             Access-Control-Max-Age,
//             Access-Control-Allow-Headers, 
//             Authorization, 
//             X-Requested-With");
//             
// header("Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With, Access-Control-Allow-Origin, Origin");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,Authorization, X-Requested-With, Access-Control-Allow-Origin, Origin");


// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/user.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// initialize product object
$obj = new User($db);
  
// get posted data from the api called POST state
$clientData = json_decode(file_get_contents("php://input"));

// echo '<pre>';
// print_r($clientData);
// echo '</pre>';

/* --------------- GET FILE CONTENT IN THE API CALL and CHECK IF THE CONTENT IS NOT EMPTY  */
if(
    !empty($clientData->username) &&
    !empty($clientData->password) &&
    !empty($clientData->mobile) 
){
  
    /* --------------- POPULATE USER OBJECT with the INPUT DATA  */
    $obj->username = $clientData->username;
    $obj->password = $clientData->password;
    $obj->mobile = $clientData->mobile;
    $obj->active = 1;
  
    // echo json_encode($user);
    
    /* --------------- INSERT DATA and CHECK IF IT IS SUCCESSFUL */
    if($obj->create()) {
  
        // set response code - 201 created
        http_response_code(201);
    // set response code - 200 OK
    // http_response_code(200);
        // tell the user
        echo json_encode(array(
            'passed' => true,
            'Response' => "201 - Created. ",
            // 'Response' => "201 - Created. " . "<br>" .
                // "$" . "user->create() is successful",
            'userMessage' => "User created successfully."
        ));

    } else {
  
        // set response code - 417 Expectation Failed
        http_response_code(417);
  
        // tell the user
        echo json_encode(array(
            'passed' => false,
            'Response' => "417 - Expectation Failed" . "<br>" .
                "$" . "user->create() is NOT successful"  . "<br>" .
                " There might be MySQL error or Bad Data entered by User",
            'userMessage' => "User creation failed. Please check your data, or try again later or just send message to helpline for support."
        ));
    }  /* ---------------- INSERT DATA completed */

} else {
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array(
        'passed' => false,
        'Response' => "400 bad request" . "<br>" .
             " !empty(" . "$" . "data->FIELD NAME) is NOT successful."  . "<br>" .
            " Chances are that user has entered Bad Data.",
        'userMessage' => "User creation failed. Please check your data, or try again later or just send message to helpline for support."
    ));
    
} /* ---------------- GET FILE CONTENT IN THE API CALL completed */
?>

