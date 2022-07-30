<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: 
            Access-Control-Allow-Origin, 
            Content-Type, 
            Access-Control-Allow-Methods,
            Access-Control-Max-Age,
            Access-Control-Allow-Headers, 
            Authorization, 
            X-Requested-With");


// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/user.php';
require_once '../../config.php';

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize product object
$obj = new User($db);

// query products
$stmt = $obj->users();

// $num = $stmt->rowCount();    //this only works with UPDATE, DELETE and INSERT.
$num = $obj->rowCountOnSelect(null);

// check if more than 0 record found
if ($num > 0) {

    // products array
    $objListArray = array();
    // $products_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop


    // set response code - 200 OK
    http_response_code(200);

    // LET'S GO DIRECT WAY - instead of creating an array
    $results = $stmt->fetchAll();

    foreach ($results as $row) {
        $objItemArray = array(
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

        array_push($objList, $objItemArray);
    }
    echo json_encode($objList);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user does not exist
    echo json_encode(array(
        'passed' => false,
        'Response' => "404 - Not found" . "<br>" .
            "($" . "num > 0) is Zero",
        'userMessage' => "User not found."
    ));
}
