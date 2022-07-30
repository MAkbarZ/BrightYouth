<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 13600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/user.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// initialize user object
$obj = new User($db);

// get posted data from the api called POST state
$clientData = json_decode(file_get_contents("php://input"));

// check the api called POST state and read "id" from it.
// assign the value to the id property of the object.
$obj->id = $clientData->id;


// check if id already exist or not, if yes, then, proceed to delete, otherwise, it must fail.
// $num = $stmt->rowCount();    //this only works with UPDATE, DELETE and INSERT.
$num = $obj->rowCountOnSelect($clientData->id);

// check if more than 0 record found
if ($num > 0) {

    // TODO: check if id already exist or not, if yes, then, proceed to update, otherwise, it must fail.
    // set product property values
    $obj->id = $clientData->id;
    $obj->username = $clientData->username;
    $obj->password = $clientData->password;
    $obj->mobile = $clientData->mobile;
    $obj->active = $clientData->active;

    // update the DB
    if ($obj->update()) {

        // set response code - 200 ok
        http_response_code(200);

        // tell the user
        echo json_encode(array(
            'passed' => true,
            'Response' => "200 - OK. " . "<br>" .
                "$" . "obj->update() is successful",
            'userMessage' => "User updated successfully."
        ));
    }

    // if unable to update the product, tell the user
    else {

        // set response code - 417 Expectation Failed
        http_response_code(417);

        // tell the user
        echo json_encode(array(
            'passed' => false,
            'Response' => "417 - Expectation Failed" . "<br>" .
                "$" . "(obj->update() is NOT successful"  . "<br>" .
                " There might be MySQL error or Bad Data entered by User",
            'userMessage' => "Unable to update user. Please check your data, or try again later or just send message to helpline for support."
        ));
    }
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no record found
    echo json_encode(array(
        'passed' => false,
        'Response' => "404 - Not found" . "<br>" .
            "($" . "num > 0) is NOT successful"  . "<br>" .
            " There might be MySQL error or id has been deleted during update process. Check DB",
        'userMessage' => "User does not exist. Please check your data, or try again later or just send message to helpline for support."
    ));
}
