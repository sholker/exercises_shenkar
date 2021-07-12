<?php
include '../config.php';
session_start();

if ($_SESSION['ID']) {
    $id = $_SESSION["ID"];
    $query = "SELECT COUNT( * ) count, b.cons_yaer_autism_lvl cyear 
FROM `tbl_user_222_Client_2_cons` a, tb_user_222_user b
WHERE a.cons_id = '$id'
GROUP BY a.cons_id
AND b.cons_yaer_autism_lvl";


//    echo $query;
    $sql = mysqli_query($conn, $query);
    $rows = mysqli_fetch_array($sql);
    if (is_array($rows)) {
//        echo json_encode($rows);
//        $_SESSION["First_Name"] = $row['f_name'];
        echo $rows['count'] *$rows['cyear'] %5;

//    header("Location: consultant/index.php");
    } else {
        echo json_encode("Rows Empty");
//        echo "\nInvalidquery";
    }


}
?>
