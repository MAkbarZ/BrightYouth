<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// include Core object
// include_once '../../shared/config/core.php';

// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/product.php';

  
// get database connection
$database = new Database();
$db = $database->getConnection();
  
// initialize object
$product = new Product($db);
  
// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
  
// query products
$stmt = $product->search($keywords);


// show products data
// $result = $stmt->fetch();
$result = $stmt->fetchAll();

var_dump($result);
// var_dump(count($result));
if (count($result)>0) {
    
    // set response code - 200 OK
    http_response_code(200);
        
    // echo json_encode($products_arr);
    echo json_encode($result);
    
} else {
    // set response code - 404 Not found
    http_response_code(404);
  
    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}


// $num = $product->rowCountOnSelect($product->id);
  
// check if more than 0 record found
// if($num>0){
  
//     // // products array
//     // $products_arr=array();
//     // $products_arr["records"]=array();
  
//     // // retrieve our table contents
//     // // fetch() is faster than fetchAll()
//     // // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
//     // while ($row = $stmt->fetch()){
//     //     // extract row
//     //     // this will make $row['name'] to
//     //     // just $name only
//     //     extract($row);
  
//     //     $product_item=array(
//     //         "id" => $id,
//     //         "name" => $name,
//     //         "description" => html_entity_decode($description),
//     //         "price" => $price,
//     //         "category_id" => $category_id,
//     //         "category_name" => $category_name
//     //     );
  
//     //     array_push($products_arr["records"], $product_item);
//     // }
  
    
// }
  
// else{
    
// }
?>