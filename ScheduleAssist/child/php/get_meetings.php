<?php
include '../../config.php';
session_start();

if ($_SESSION['ID']) {
    $id = $_SESSION["ID"];
    $query = "SELECT a.title title,a.date date FROM tbl_user_222_metting a,  tbl_user_222_Client_2_cons b where b.client_id= '$id' and a.date > CURDATE() -1";
//    echo $query;
    $result = mysqli_query($conn, $query);
//    $result = mysqli_query($connection, $query);

    if (!$result) {
        die("DB query failed.");
    }


    $i = 1;
    if ($result->num_rows > 0) {


        while ($row = $result->fetch_assoc()) {

            echo '<tr><td>' . $row['title'] . '</td><td>' . $row['date'] . '</td></tr>';
//            echo '<a href="#' . $id . '" class="project col-md-4 my-col">' . $row['Name'] . '<img src="img/' . $row["image"] . '"alt="" class="img-fluid"></a>' . '<div id="' . $id . '" class="popup">' . '<a href="#work" class="close">&times;</a>' . '<h2>' . $row["Name"] . '</h2>' . '<p> About: <br>' . $row['Description'] . ' <br><a href="' . $row['url'] . '" target="_blank" rel="noopener noreferrer">click here to project</a></p></div><a href="#work" class="close-popup"></a>';


        }
    }
    mysqli_close();


}
?>
