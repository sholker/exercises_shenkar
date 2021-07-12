<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>ScheduleAssist</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong">

    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>


    <script src="../js/script.js"></script>
    <script src="../js/index_child.js"></script>

</head>
<body>

<nav id="hamnav">

    <!-- [THE HAMBURGER] -->

    <label for="hamburger">☰</label>

    <input type="checkbox" id="hamburger">



    <!-- [MENU ITEMS] -->

    <div id="hamitems">

        <img class="prifileImg" src="../images/Steve.svg">



        <ul>

            <li><a href="#">My Profile</a></li>

            <li><a href="index.php">Home Page</a></li>

        </ul>

    </div>

</nav>


<div class="bodyPage">
    <div>
        <h1 id="heyT"></h1>
        <div>

                    <div id="container">
                        <table>
                            <thead>
                            <tr>
<!--                                <td>Id</td>-->
<!--                                <td>Name</td>-->
                            </tr>
                            </thead>
                            <tbody>
                        <?php
                        include 'php/get_mettings.php';
                        ?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




</body>
</html>