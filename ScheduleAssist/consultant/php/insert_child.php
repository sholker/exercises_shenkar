<?php
    include '../../config.php';
// Check input errors before inserting in database
if(empty($username_err) && empty($password_err) && empty($confirm_password_err)){

    $f_name, $l_name, $password
// Prepare an insert statement
$sql = "INSERT INTO tb_user_222_user VALUES (?, ?)";

if($stmt = mysqli_prepare($link, $sql)){
// Bind variables to the prepared statement as parameters
mysqli_stmt_bind_param($stmt, "ss", $param_username, $param_password);

// Set parameters
$param_username = $username;
$param_password = password_hash($password, PASSWORD_DEFAULT); // Creates a password hash

// Attempt to execute the prepared statement
if(mysqli_stmt_execute($stmt)){
// Redirect to login page
header("location: login.php");
} else{
echo "Oops! Something went wrong. Please try again later.";
}

// Close statement
mysqli_stmt_close($stmt);
}
}
?>