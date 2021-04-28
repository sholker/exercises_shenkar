<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
     $name = $_GET["itemName"];
     $type = $_GET["type"];

     if(strlen($name) + strlen($type) > 6){
         echo "The Item $name - $type is Added Enjoy";
     }
    echo "New Item $name - $type Added";
}

?>

