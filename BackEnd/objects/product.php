<?php
class Product
{

    // database connection and table name
    private $conn;
    private $table_name = "product";

    // object properties
    public $id;
    public $merchantId;
    public $category;
    public $productName;
    public $description;
    public $price;
    public $image;
    public $ratingCount;

    // constructor with $db as database connection
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // read products
    // http://localhost/CodeOfaNinja/product/products.php
    function products()
    {

        //select all query
        $query = "SELECT
                    id, merchantId, category, productName, description, price, image, ratingCount
                FROM
                    " . $this->table_name . "
                    
                ORDER BY
                    id ASC";

        // $query = "SELECT
        //             c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
        //         FROM
        //             " . $this->table_name . " p
        //             LEFT JOIN
        //                 categories c
        //                     ON p.category_id = c.id
        //         ORDER BY
        //             p.created DESC";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // used when filling up the update product form
    // http://localhost/CodeOfaNinja/product/product.php?id=60
    function product()
    {

        // query to read single record
        // $query = "SELECT
        //         c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
        //     FROM
        //         " . $this->table_name . " p
        //         LEFT JOIN
        //             categories c
        //                 ON p.category_id = c.id
        //     WHERE
        //         p.id = ?
        //     LIMIT
        //         0,1";

        $query = "SELECT
                  id, merchantId, category, productName, description, price, image, ratingCount
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

        // $count = $stmt->rowCount();

        // get retrieved row
        // $product = $stmt->fetch();

        // TODO: need to validate if we have correct data. if failes, no need to run below codes. just show exception
        // set values to object properties
        // $this->id = $row->id;
        // $this->merchantId = $row->merchantId;
        // $this->productName = $row->productName;
        // $this->description = $row->description;
        // $this->price = $row->price;
        // $this->image = $row->image;
        // $this->ratingCount = $row->ratingCount;

        return $stmt;
    }

    // create product
    // http://localhost/CodeOfaNinja/product/create.php
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
            merchantId=:merchantId, 
            category=:category, 
            productName=:productName, 
            description=:description, 
            price=:price, 
            image=:image";
            // ratingCount=:ratingCount";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->merchantId = htmlspecialchars(strip_tags($this->merchantId));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->productName = htmlspecialchars(strip_tags($this->productName));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->image = htmlspecialchars(strip_tags($this->image));
        // $this->ratingCount = htmlspecialchars(strip_tags($this->ratingCount));

        // bind values
        $stmt->bindParam(":merchantId", $this->merchantId);
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":productName", $this->productName);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":image", $this->image);
        // $stmt->bindParam(":ratingCount", $this->ratingCount);

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
            merchantId=:merchantId, 
            category=:category, 
            productName=:productName, 
            description=:description, 
            price=:price, 
            image=:image, 
            ratingCount=:ratingCount
            
            WHERE
                id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->merchantId = htmlspecialchars(strip_tags($this->merchantId));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->productName = htmlspecialchars(strip_tags($this->productName));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->image = htmlspecialchars(strip_tags($this->image));
        $this->ratingCount = htmlspecialchars(strip_tags($this->ratingCount));


        // bind new values
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":merchantId", $this->merchantId);
        $stmt->bindParam(":category", $this->category);
        $stmt->bindParam(":productName", $this->productName);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":price", $this->price);
        $stmt->bindParam(":image", $this->image);
        $stmt->bindParam(":ratingCount", $this->ratingCount);

        // execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    function updatePhotoByProdID()
    {

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
            image=:image 
            WHERE
                id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        
        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->image = htmlspecialchars(strip_tags($this->image));


        // bind new values
        $stmt->bindParam(":id", $this->id, PDO::PARAM_INT);
        $stmt->bindParam(":image", $this->image, PDO::PARAM_STR);
        // print_r($stmt);

        // execute the query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    function updateProductRating()
    {

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
            ratingCount=:ratingCount
            
            WHERE
                id = :id";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->ratingCount = htmlspecialchars(strip_tags($this->ratingCount));


        // bind new values
        $stmt->bindParam(":id", $this->id);
        $stmt->bindParam(":ratingCount", $this->ratingCount);

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

        // select all query
        // $query = "SELECT
        //         c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
        //     FROM
        //         " . $this->table_name . " p
        //         LEFT JOIN
        //             categories c
        //                 ON p.category_id = c.id
        //     WHERE
        //         p.name LIKE ? OR p.description LIKE ? OR c.name LIKE ?
        //     ORDER BY
        //         p.created DESC";

        $query = "SELECT
                id, merchantId, category, productName, description, price, image, ratingCount
            FROM
                " . $this->table_name . "

            WHERE
            merchantId LIKE :merchantId OR 
                category LIKE :category OR 
                productName LIKE :productName OR 
                description LIKE :description OR 
                price LIKE :price
                 
            ORDER BY
                id DESC";


        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $keywords = htmlspecialchars(strip_tags($keywords));
        $keywords = "%{$keywords}%";

        // bind
        $stmt->bindParam(":merchantId", $keywords);
        $stmt->bindParam(":category", $keywords);
        $stmt->bindParam(":productName", $keywords);
        $stmt->bindParam(":description", $keywords);
        $stmt->bindParam(":price", $keywords);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // read products with pagination
    // http://localhost/CodeOfaNinja/product/read_paging.php
    public function readPaging($from_record_num, $records_per_page)
    {

        // select query
        // $query = "SELECT
        //         c.name as category_name, p.id, p.name, p.description, p.price, p.category_id, p.created
        //     FROM
        //         " . $this->table_name . " p
        //         LEFT JOIN
        //             categories c
        //                 ON p.category_id = c.id
        //     ORDER BY p.created DESC
        //     LIMIT ?, ?";

        $query = "SELECT
                id, merchantId, category, productName, description, price, image, ratingCount
            FROM
                " . $this->table_name . "
            ORDER BY id DESC
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

    // // used for paging products
    // public function rowCountOnSelect($productId)
    // {
    //     if ($productId != null or $productId > 0) {
    //         $query = "SELECT COUNT(*) as NoOfRows FROM " . $this->table_name . " WHERE id = " . $productId;

    //         $stmt = $this->conn->prepare($query);
    //         $stmt->execute();
    //         $row = $stmt->fetch();

    //         return $row->NoOfRows;
    //     } else {
    //         $query = "SELECT COUNT(*) as NoOfRows FROM " . $this->table_name . "";

    //         $stmt = $this->conn->prepare($query);
    //         $stmt->execute();
    //         $row = $stmt->fetch();
    
    //         return $row->NoOfRows;
    //     }
    // }


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
