<?php
include '../../config.php';
session_start();

if ($_SESSION['ID']) {
    $id = $_SESSION["ID"];
    $query = "SELECT * FROM tbl_user_222_metting where creator_id= '$id' and date = CURDATE() +1";
//    echo $query;
    $sql = mysqli_query($conn, $query);
    $rows = mysqli_fetch_array($sql);
    if (is_array($rows)) {
        echo json_encode($rows);

    } else {
        echo json_encode("Rows Empty");
    }


}
?>
