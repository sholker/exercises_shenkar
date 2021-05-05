<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
     $name = $_GET["name"];
     $name_p = $_GET["name_p"];
     $surname = $_GET["surname"];
     $age = $_GET["age"];
     $email = $_GET["email"];
     $phone = $_GET["phone"];
     $city = $_GET["city"];
     $birthdate = $_GET["birthdate"];
     $gender = $_GET["gender"];
     $yDiagnose = $_GET["yDiagnose"];
     $metting_title = $_GET["metting_title"];
     $date_metting = $_GET["date_metting"];
     $time_metting = $_GET["time_metting"];
     $comments = $_GET["comments"];




     echo nl2br("Child First Name: $name\n");
     echo nl2br("Perant Name: $name_p\n");
     echo nl2br("surname:  $surname\n");
     echo nl2br("Age $age\n");
     echo nl2br("Email: $email\n");
     echo nl2br("phone: $phone\n");
     echo nl2br("City: $city\n");
     echo nl2br("Birth Date: $gender\n");
     echo nl2br("Years of diagnose: $yDiagnose\n");
     echo nl2br("Metting Title: $metting_title\n");
     echo nl2br("Date Metting: $date_metting\n");
     echo nl2br("Metting Time: $time_metting\n");
     echo nl2br("Comments: $comments\n");


}

?>