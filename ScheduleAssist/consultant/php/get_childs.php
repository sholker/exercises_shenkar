<?php
include '../config.php';
session_start();

if ($_SESSION['ID']) {
    $id = $_SESSION["ID"];
    $query = "SELECT DISTINCT (a.f_name) f_name, a.id
                                FROM tb_user_222_user a, tbl_user_222_Client_2_cons b
                                WHERE b.cons_id = '$id'
                                AND a.type =2";


    $result = mysqli_query($conn, $query);

    if (!$result) {
        die("DB query failed.");
    }


    if ($result->num_rows > 0) {

        while ($row = $result->fetch_assoc()) {
            $id =$row['id'];
            $name = $row['f_name'];
            console.log($id);
            console.log($name);
            echo '<div class="grid"><div class="box-child">' .
                '<a href="child.php?user_id='. $id . '">
<img src="../images/' . $name . '.svg" onerror="this.src=\'../images/Kylie.svg\'">' . '</a></div>' . $name . '</div>';
//echo '<div class="grid"><div class="box-child"><a href="child.html?child_id=' .$id . '"><img src="../images/Kylie.svg" onerror="this.src='../images/Kylie.svg'"></a></div>'. $name .'</div>';



        }
    }


}
?>
