<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers,  Access-Control-Allow-Methods, Authorization, X-Requested-With");
  

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


/* --------------- GET FILE CONTENT IN THE API CALL and CHECK IF THE CONTENT IS NOT EMPTY  */
if(
    !empty($data->merchantId) &&
    !empty($data->category) &&
    !empty($data->productName) &&
    !empty($data->price) &&
    !empty($data->description)
    // !empty($data->image) &&
    // !empty($data->ratingCount)

){
  
    /* --------------- POPULATE PRODUCT OBJECT with the INPUT DATA  */
    $product->merchantId = $data->merchantId;
    $product->category = $data->category;
    $product->productName = $data->productName;
    $product->price = $data->price;
    $product->description = $data->description;
    // $product->image = $data->image;
    // $product->ratingCount = $data->ratingCount;
    // $product->created = date('Y-m-d H:i:s');
  
    // echo json_encode($product);
    
    /* --------------- INSERT DATA and CHECK IF IT IS SUCCESSFUL */
    if($product->create()) {
  
        // set response code - 201 created
        http_response_code(201);
  
        // tell the user
        echo json_encode(array(
            'passed' => true,
            'Response' => "201 - Created. " . "<br>" .
                "$" . "product->create() is successful",
            'userMessage' => "Product created successfully."
        ));

    } else {
  
        // set response code - 417 Expectation Failed
        http_response_code(417);
  
        // tell the user
        echo json_encode(array(
            'passed' => true,
            'Response' => "417 - Expectation Failed" . "<br>" .
                "$" . "product->create() is NOT successful"  . "<br>" .
                " There might be MySQL error or Bad Data entered by User",
            'userMessage' => "Product creation failed. Please check your data, or try again later or just send message to helpline for support."
        ));
    }  /* ---------------- INSERT DATA completed */

} else {
  
    // set response code - 400 bad request
    http_response_code(400);
  
    // tell the user
    echo json_encode(array(
        'passed' => true,
        'Response' => "400 bad request" . "<br>" .
             " !empty(" . "$" . "data->FIELD NAME) is NOT successful."  . "<br>" .
            " Chances are that user has entered Bad Data.",
        'userMessage' => "Product creation failed. Please check your data, or try again later or just send message to helpline for support."
    ));
    
} /* ---------------- GET FILE CONTENT IN THE API CALL completed */
?>

