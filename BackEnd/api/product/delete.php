<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/product.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// initialize product object
$product = new Product($db);

// get posted data from the api called POST state
$data = json_decode(file_get_contents("php://input"));

// check the api called POST state and read "id" from it.
// assign the value to the id property of product object.
$product->id = $data->id;

// check if id already exist or not, if yes, then, proceed to delete, otherwise, it must fail.
// $num = $stmt->rowCount();    //this only works with UPDATE, DELETE and INSERT.
$num = $product->rowCountOnSelect($product->id);

// check if more than 0 record found
if ($num > 0) {

    // delete the product
    if ($product->delete()) {

        // set response code - 200 ok
        http_response_code(200);

        // tell the user
        echo json_encode(array("message" => "Product was deleted."));
    } else {

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to delete product."));
    }
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No any product found to delete.")
    );
}