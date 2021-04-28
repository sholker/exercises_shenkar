<html>
<head>
    <meta charset="utf-8">
    <title>Ori Shinsholker</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400i" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="js/script.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>

</head>
<body>




<?php
// define variables and set to empty values
$nameErr = $passErr = $genderErr = "";
$name = $email = $gender = $pass = "";

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (empty($_GET["fullname"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_GET["fullname"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }


    if (!empty($_GET["pass"])) {

        $pass = test_input($_GET["pass"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $pass)) {
            $passErr = "Only letters and white space allowed";
        }
    }

}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>

<audio autoplay>
    <source src="http://s2.3lbh.com/s/87EJ97gi.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
<!-- Start Main Container -->
<div class="main-container">
    <!-- Start Pokemon Ball Top Part -->
    <div class="pokemon-top-part"></div>
    <!-- End Pokemon Ball Top Part -->
    <!-- Start Main Forms -->
    <div class="main-forms">
        <div class="signup-form">
            <form class="sign-back" action="" method="">
                <h1>sign UP</h1>

                <div class="signup-row">
                    <i class="fa fa-user"></i>
                    <input type="text" name="fullname" value="" placeholder="Full Name">
                    <span class="error">* <?php echo $nameErr;?></span>
                </div>
                <div class="signup-row">
                    <i class="fa fa-key"></i>
                    <input type="password" name="pass" value="" placeholder="Password">
                    <span toggle="#password" class="error">* <?php echo $passErr;?></span>

                </div>
                <div class="signup-row">
                    <i class="fa fa-envelope-o"></i>
                    <input type="email" name="mail" value="" placeholder="EMAIL">
                </div>
                <div class="signup-row">
                    <i class="fa fa-globe"></i>
                    <input type="url" name="website" value="" placeholder="Website">
                </div>

                <div class="signup-row">
                    `                    <i class="fa fa-phone"></i>
                    <input type="tel" name="phone" id="phone" placeholder="Phone">

                </div>
                <div class="signup-row">
                    <i class="fa fa-coffee"></i>
                    <input type="number" name="coffee" id="coffe" placeholder="Coffee">
                </div>


                <div class="signup-row">
                    <i class="fa fa-gamepad"> </i>
                    <span>Tempeture:</span>
                    <br>
                    <Input class="range" type="range" name="temper"  onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)" placeholder="Temp"></Input>

                </div>

                <div class="signup-row">
                    <i class="fa fa-commenting"></i>
                    <span>  Address:</span>
                    <textarea name="address" rows="3" cols="30"></textarea>

                </div>
                <br>

                <div class="signup-row">
                    <i class="fa fa-star"></i>
                    <span>interests:</span>
                    <lable>interests1
                        <input type="checkbox" class="form-styling" name="interests[]" value="interests1" placeholder="interests1">
                    </lable>
                    <lable>interests2
                        <input type="checkbox" class="form-styling" name="interests[]" value="interests2">
                    </lable>
                    <lable>interests3
                        <input type="checkbox" class="form-styling" name="interests[]" value="interests3">
                    </lable>
                    <lable>interests4
                        <input type="checkbox" class="form-styling" name="interests[]" value="interests4">
                    </lable>

                </div>

            </form>
        </div>
    </div>
    <!-- End Main Forms -->
    <!-- Start Pokemon Ball Bottom Part -->
    <div class="pokemon-bottom-part">
        <div class="white-part"></div>
        <div class="black-line"></div>
    </div>
    <!-- End Pokemon Ball Bottom Part -->
</div>
<!-- End Main Container -->
<!-- Start Scripts -->
<script type="text/javascript" src="jquery-1.11.3.min.js"></script>
<script src="https://use.fontawesome.com/7dddae9ad9.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.2/TweenMax.min.js"></script>
<!-- End Scripts -->
</body>
</html>
