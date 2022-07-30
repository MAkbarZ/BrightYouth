<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
require_once '../../shared/config/database.php';
require_once '../../objects/user.php';


// utilities
$utilities = new Utilities();

// instantiate database and product object
$database = new Database();
$db = $database->getConnection();

// initialize object
$obj = new User($db);

// query users
$stmt = $obj->readPaging($from_record_num, $records_per_page);
$num = $stmt->rowCount();

// check if more than 0 record found
if ($num > 0) {

    // products array
    $obj_arr = array();
    $obj_arr["records"] = array();
    $obj_arr["paging"] = array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $obj_item = array(
            "id" => $id,
            "username" => $username,
            "password" => $password,
            "mobile" => $mobile,
            "active" => $active
        );

        array_push($obj_arr["records"], $obj_item);
    }


    // include paging
    $total_rows = $obj->rowCountOnSelect(null);
    $page_url = "{$home_url}/user/read_paging.php?";
    $paging = $utilities->getPaging($page, $total_rows, $records_per_page, $page_url);
    $obj_arr["paging"] = $paging;

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($obj_arr);
} else {

    // set response code - 404 Not found
    http_response_code(404);

    // tell the user records does not exist
    echo json_encode(
        array("message" => "No users found.")
    );
}
