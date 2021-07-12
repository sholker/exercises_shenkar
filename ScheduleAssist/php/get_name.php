<?php

include '../config.php';
session_start();
echo $_SESSION['First_Name'];

//    if ($_SESSION['ID']) {
//        $id = $_SESSION["ID"];
//        $query = "SELECT f_name FROM tb_user_222_user where id= '$id'";
//        $sql = mysqli_query($conn, $query);
//        $row = mysqli_fetch_array($sql);
//        if (is_array($row)) {
//
//            $_SESSION["First_Name"] = $row['f_name'];
//
////    header("Location: consultant/index.php");
//        } else {
//            echo $query;
//            echo "Invalid Email ID/Password";
//        }
//
//        echo $_SESSION["First_Name"];
//    }

?>