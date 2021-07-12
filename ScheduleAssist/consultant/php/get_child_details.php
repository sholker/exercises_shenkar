
<?php
include '../config.php';
//echo $_GET['user_id'];
session_start();

if ($_SESSION['ID']) {
    $id = $_GET['user_id'];
    $query = "SELECT * FROM tb_user_222_user  WHERE id = '$id'";


//    echo $query;
    $sql = mysqli_query($conn, $query);
    $rows = mysqli_fetch_array($sql);

    if (is_array($rows)) {
        $row = $rows;

        echo '<div><img src="images/' . $row['f_name'] . '.svg" onerror="this.src=\'../images/Kylie.svg\'"></div><h3>' . $row['f_name'] .
        '</h3><p class="descriptionp">Description:' . $row['description'] .
        '</p><p>Parent’s details: ' . $row['name_parent'] . ' ' . $row['phone'] . '</p>';
//        $_SESSION["First_Name"] = $row['f_name'];

//    header("Location: consultant/index.php");
    } else {
        echo json_encode("Rows Empty");
//        echo "\nInvalidquery";
    }


}
?>
