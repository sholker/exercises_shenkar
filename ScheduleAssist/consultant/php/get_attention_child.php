<?php
include '../../config.php';
session_start();

if ($_SESSION['ID']) {
    $id = $_SESSION["ID"];
    $query = "SELECT DISTINCT(a.id) id,a.f_name f_name, a.l_name l_name, a.cons_yaer_autism_lvl cons_yaer_autism_lvl FROM 
        tb_user_222_user a, tbl_user_222_Client_2_cons b
WHERE b.cons_id = '$id' AND a.type =2
AND a.cons_yaer_autism_lvl >2";
    

//    echo $query;
    $sql = mysqli_query($conn, $query);
    $rows = mysqli_fetch_array($sql);
    if (is_array($rows)) {
        echo json_encode($rows);
//        $_SESSION["First_Name"] = $row['f_name'];

//    header("Location: consultant/index.php");
    } else {
        echo json_encode("Rows Empty");
//        echo "\nInvalidquery";
    }


}
?>
