<?php
include 'config.php';
session_start();
if(isset($_POST['save']))
{
    extract($_POST);
    $email = $_POST['email'];
    $pass = $_POST['pass'];

    $query = "SELECT * FROM tb_user_222_user where email='$email' and password='$pass'";
    $sql=mysqli_query($conn,$query);
    $row  = mysqli_fetch_array($sql);
    if(is_array($row))
    {
        $_SESSION["ID"] = $row['id'];
        $_SESSION["Email"]=$row['email'];
        $_SESSION["First_Name"]=$row['f_name'];
        $_SESSION["Last_Name"]=$row['l_name'];
        $_SESSION["type"]=$row['type'];
        if ($row['type'] == 1) {
            header("Location: consultant/index.php?userID=" . $_SESSION['ID']);
        }
        else{
            header("Location: child/index.php?userID=" . $_SESSION['ID']);

        }
    }
    else
    {
        echo $query;
        echo "Invalid Email ID/Password";
    }
}
?>