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
// $data = json_decode(file_get_contents("php://input"));

$id = $_POST['id'];

$phpFileUploadErrors = array(
    0 => 'There is no error, the file uploaded with success',
    1 => 'The uploaded file exceeds the upload_max_filesize directive in php.ini',
    2 => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form',
    3 => 'The uploaded file was only partially uploaded',
    4 => 'No file was uploaded',
    6 => 'Missing a temporary folder',
    7 => 'Failed to write file to disk.',
    8 => 'A PHP extension stopped the file upload.',
);


// make sure data is not empty
if (
    // !empty($data->id)
    !empty($id)

) {
    // set product property values
    // $product->id = $data->id;
    $product->id = $id;
    

    /* --------------- GET FILE CONTENT IN THE API CALL and CHECK IF THE CONTENT IS PRESENT */
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $file_name = $_FILES['image']['name'];
        $file_size = $_FILES['image']['size'];
        $file_tmp_name = $_FILES['image']['tmp_name'];
        $file_error = $_FILES['image']['error'];
        $file_type = $_FILES['image']['type'];

        /*
            echo '<pre>';
            print_r($_FILES['image']);
            echo '</pre>';
        */
        
        $product->image = $file_name;
        
         /* --------------- UPLOAD PHOTO and CHECK IF UPLOAD IS SUCCESS */
        if (move_uploaded_file($file_tmp_name, '../../imagesProducts/' . $file_name)) {
            // '../../objects/product.php';

            /* --------------- UPDATE DB and CHECK IF UPDATE DB IS SUCCESS */
            if ($product->updatePhotoByProdID()) {

                // set response code - 201 created
                http_response_code(201);

                // tell the user
                echo json_encode(array(
                    'passed' => true,
                    'Response' => "201 - Created. " . "<br>" .
                        "$" . "_FILES['image'] is NOT empty" . "<br>" .
                        "move_uploaded_file" . "($" . "file_tmp_name, 'imagesProducts/'" . "$" . "file_name) is successful",
                    'userMessage' => "Photo uploaded successfully."
                ));
            } else {

                // set response code - 503 service unavailable
                http_response_code(503);

                // tell the user
                echo json_encode(array(
                    'passed' => false,
                    'Response' => "503 - Service unavailable." . "<br>" .
                        "$" . "product->updatePhotoByProdID() is not successful." . "<br>" .
                        "MySQL db might be not working.",
                    'userMessage' => "Server Not working. Please try again later or send message to helpline for support."
                ));
            }

            /* ---------------- UPDATE DB completed */

        } else {
            // set response code - 500 Internal Server Error
            http_response_code(500);

            // tell the user

            echo json_encode(array(
                'passed' => false,
                'Response' => "500 - Internal Server Error. " . "<br>" .
                    "$" . "_FILES['image'] is NOT empty" . "<br>" .
                    "move_uploaded_file" . "($" . "file_tmp_name, 'imagesProducts/'" . "$" . "file_name) is Not successful",
                'userMessage' => "Photo uploaded failed. Please try again later or send message to helpline for support."
            ));
        }

       /* ---------------- UPLOAD PHOTO completed */


    } else {
        // set response code - 400 bad request
        http_response_code(400);

        // tell the user
        echo json_encode(array(
            'passed' => false,
            'Response' => "400 - Bad Request. " . "<br>" .
                "$" . "_FILES['image'] is Empty" . "<br> <pre> " .
                $_FILES['image'] . " </pre> <br> file_error: " . $file_error,
            'userMessage' => "Photo is Not selected. Please select valid photo or send message to helpline for support."
        ));
    }

    /* ----------------- FILE CONTENT completed */
}


// tell the user data is incomplete
else {

    // set response code - 400 bad request
    http_response_code(400);

     // tell the user
     echo json_encode(array(
         'passed' => false,
         'Response' => "400 - Bad Request. " . "<br>" .
             "$" . "data->id is invalid",
         'userMessage' => "Invalid product code. This product code is invalid or send message to helpline for support."
     ));
}

/* ----------------- THE END */