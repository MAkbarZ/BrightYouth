<?php
class Database{
  
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "api_db";
    private $username = "root";
    private $password = "";
    public $conn;
  
    // get the database connection
    public function getConnection(){
  
        $this->conn = null;
  
        try{
            $this->conn = new PDO(
                        "mysql:host=" . $this->host . 
                        ";dbname=" . $this->db_name, 
                        $this->username, 
                        $this->password);

               /*

                source: https://www.php.net/manual/en/pdo.setattribute.php

                PDO::ATTR_DEFAULT_FETCH_MODE
                    Set the default fetch mode. 
                    A description of the modes and how to use them is available in the PDOStatement::fetch() documentation.

                source: https://www.php.net/manual/en/pdostatement.fetch.php
                PDO::FETCH_ASSOC: returns an array indexed by column name as returned in your result set
                PDO::FETCH_OBJ: returns an anonymous object with property names that correspond to the column names returned in your result set
               */


            $this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);



            $this->conn->exec("set names utf8");


        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
  
        return $this->conn;
    }
}
