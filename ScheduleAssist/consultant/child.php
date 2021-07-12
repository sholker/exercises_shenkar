<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong">

    <link rel="stylesheet" href="../css/child.css">
    <link rel="stylesheet" href="../css/global.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <script type="text/javascript" src="../jquery-1.11.3.min.js"></script>

    <script src="../js/script.js"></script>

</head>
<body>
<nav id="hamnav">
    <!-- [THE HAMBURGER] -->
    <label for="hamburger">&#9776;</label>
    <input type="checkbox" id="hamburger"/>

    <!-- [MENU ITEMS] -->
    <div id="hamitems">
        <img class=prifileImg src="../images/Steve.svg">

        <ul>
            <li><a  href="#">My Profile</a></li>
            <li><a  href="index.php">Home</a></li>
            <li><a  href="clients.php"></a>Clients</li>

            <li><a  href="#">Mettings</a></li>
            <li><a  href="#">Settings</a></li>

        </ul>
    </div>
</nav>

<div class="bodyPage">
    <h1 id="heyT"></h1>
<div id="description_child">
    <?php
    include 'php/get_child_details.php';
    ?>
</div>
</div>

<a href="index.php" id="homePage"></a>
<a href="javascript:history.back()" id="btBack">Go Back</a>
<footer></footer>
</body>
</html>