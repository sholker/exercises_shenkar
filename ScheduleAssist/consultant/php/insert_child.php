<?php
    include '../../config.php';
// Check input errors before inserting in database

    $id = $_POST['id'];
    $f_name = $_POST['f_name'];
    $l_name = $_POST['l_name'];
    $password = $_POST['password'];
    $name_parent = $_POST['name_parent'];
    $phone = $_POST['phone'];
    $gender = $_POST['gender'];
    $autist_lvl = $_POST['autist_lvl'];
    $email = $_POST['email'];
    $description = $_POST['description'];
    $title = $_POST['metting_title'];
    $date = $_POST['date_metting'];

$cons_id = $_SESSION['ID'];
// Prepare an insert statement
$sql1 = "INSERT INTO tb_user_222_user VALUES ('$id','$f_name',2,'$phone','$password','$gender','$name_parent',$autist_lvl,'$l_name','$email','$description')";
$sql2 = "INSERT INTO tbl_user_222_metting VALUES ('$title','$date', '$cons_id')";


    if ($conn->query($sql1) === TRUE) {
        mysqli_query($conn, sql2);
        $meetingid = mysqli_insert_id($conn);
        $sql3="INSERT INTO tbl_user_222_Client_2_cons VALUES ('$id','$cons_id','$meetingid')";
        $conn->query($sql3);
        alert("New Child added");
    } else {
        alert("Error: " . $sql1 . "<br>" . $conn->error);
    }

    $conn->close();


?>