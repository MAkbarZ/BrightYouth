<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/product.php';


// get database connection
$database = new Database();
$db = $database->getConnection();
  
// initialize product object
$product = new Product($db);
  
// check the api called GET state and read "id" from it.
// assign the value to the id property of product object.
$product->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// query product
$stmt = $product->product();

$num = $product->rowCountOnSelect($product->id);

if($num>0){
  
    /*
    // create array
    $product_arr = array(
        "id" =>  $product->id,
        "merchantId" => $product->merchantId,
        "category" => $product->category,
        "productName" => $product->productName,
        "description" => $product->description,
        "price" => $product->price,
        "image" => $product->image,
        "ratingCount" => $product->ratingCount
    );
    */


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
    // tell the user product does not exist
    echo json_encode(array("message" => "Product does not exist."));
}
?>