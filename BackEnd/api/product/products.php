<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Origin");


// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/product.php';
require_once '../../config.php';
  
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize product object
$product = new Product($db);
  
// query products
$stmt = $product->products();

// $num = $stmt->rowCount();    //this only works with UPDATE, DELETE and INSERT.
$num = $product->rowCountOnSelect(null);
  
// check if more than 0 record found
if($num>0){
  
    // products array
    $productsArray = array();
    // $products_arr["records"]=array();
  
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop

    
    // set response code - 200 OK
    http_response_code(200);
    
    // LET'S GO DIRECT WAY - instead of creating an array
    $results = $stmt->fetchAll();

    foreach ($results as $row) {
        $productItemArray=array(
            "id" => $row->id,
            "merchantId" => $row->merchantId,
            "category" => $row->category,
            "productName" => $row->productName,
            "description" => html_entity_decode($row->description),
            // "description" => $row->description,
            "price" => $row->price,
            "image" => $strBaseUrl . 'imagesProducts/' . $row->image,
            // "image" => 'BackEnd/imagesProducts/' . $row->image,
            "ratingCount" => $row->ratingCount
        );
  
        array_push($productsArray, $productItemArray);
    }
    echo json_encode($productsArray);

}else{
  
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "No any product found.")
    );
}