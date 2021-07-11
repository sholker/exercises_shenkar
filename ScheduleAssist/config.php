<?php

$url = "182.50.133.173";
$username = "studDB21a";
$password = "stud21DB1!";
$dbname = "studDB21a";
$conn = mysqli_connect($url, $username, $password, $dbname);

if (!$conn) {
    die('Could not Connect My Sql:' . mysql_error());
}

?>
