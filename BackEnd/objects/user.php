<?php
class User
{

    // database connection and table name
    private $conn;
    private $table_name = "user";

    // object properties
    public $id;
    public $username;
    public $password;
    public $mobile;
    public $active;  // boolean - 0 for false, 1 to infinity for true. per mySQL documentation



    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read users
    // http://localhost/CodeOfaNinja/product/products.php
    function users()
    {

        //select all query
        $query = "SELECT
                    id, username, password, mobile, active
                FROM
                    " . $this->table_name . "
                    
                ORDER BY
                    id ASC";


        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // used when filling up the update user form
    // http://localhost/CodeOfaNinja/product/product.php?id=60
    function user()
    {

        $query = "SELECT
                   id, username, password, mobile, active
                FROM
                    " . $this->table_name . "
                    WHERE 
                        id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(":id", $this->id);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // create user
    // http://localhost/CodeOfaNinja/product/create.php
    // http://localhost/BackEnd/api/user/create.php
    /* in body, type below:
        {
            "name" : "Amazing Pillow 2.0",
            "price" : "199",
            "description" : "The best pillow for amazing programmers.",
            "category_id" : 2,
            "created" : "2018-06-01 00:35:07"
        }
    */
    function create()
    {

        // query to insert record
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
            username=:username, 
            password=:password, 
            mobile=:mobile";
        //active=:1, 

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->mobile = htmlspecialchars(strip_tags($this->mobile));
        $this->active = 1;

        // bind values
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":mobile", $this->mobile);
// echo $query;
        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // update the product
    // http://localhost/CodeOfaNinja/product/update.php
    /* type below in the body to test.
        {
            "id": "65",
            "name": "Amazing Pillow 3.0",
            "description": "The best pillow for amazing programmers.",
            "price": "299",
            "category_id": "2",
            "category_name": "Electronics"
        }
    */
    function update()
    {

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
            username=:username, 
            password=:password, 
            mobile=:mobile,
            active=:active
            
            WHERE
                id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->password = htmlspecialchars(strip_tags($this->password));
        $this->mobile = htmlspecialchars(strip_tags($this->mobile));
        $this->active = htmlspecialchars(strip_tags($this->active));


        // bind new values
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":username", $this->username);
        $stmt->bindParam(":password", $this->password);
        $stmt->bindParam(":mobile", $this->mobile);
        $stmt->bindParam(":active", $this->active);

        // execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }


    // delete the product
    // http://localhost/CodeOfaNinja/product/create.php
    /* type below in body to test if data is deleted or not.
        {
            "id": "65"
        }
    */
    function delete()
    {

        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE id = :id";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));

        // bind id of record to delete
        $stmt->bindParam(":id", $this->id);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // search products
    // http://localhost/CodeOfaNinja/product/search.php?s=shirt
    // no need to pass anything in the body, as we are just passing the query string into the URL itself.
    function search($keywords)
    {
        $query = "SELECT
               id, username, password, mobile, active
            FROM
                " . $this->table_name . "

            WHERE
            username LIKE :username OR 
            mobile LIKE :mobile
                 
            ORDER BY
                id ASC";


        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        // bind
        $stmt->bindParam(":username", $keywords);
        $stmt->bindParam(":mobile", $keywords);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // read products with pagination
    // http://localhost/CodeOfaNinja/product/read_paging.php
    public function readPaging($from_record_num, $records_per_page)
    {
        $query = "SELECT
                id, username, password, mobile, active
            FROM
                " . $this->table_name . "
            ORDER BY id ASC
            LIMIT :recordNum, :perPage";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind variable values
        $stmt->bindParam(":recordNum", $from_record_num, PDO::PARAM_INT);
        $stmt->bindParam(":perPage", $records_per_page, PDO::PARAM_INT);

        // execute query
        $stmt->execute();

        // return values from database
        return $stmt;
    }

    // count record by Id
    public function rowCountOnSelect($objId)
    {
        $searchClause = "";

        if ($objId != null or $objId > 0) {
            $searchClause = " WHERE id = " . $objId;
        } else {
            $searchClause = "";
        }

        $query = "SELECT COUNT(*) as NoOfRows FROM " . $this->table_name . $searchClause;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $row = $stmt->fetch();

        return $row->NoOfRows;
    }
}
