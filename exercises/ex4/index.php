<?php
// define variables and set to empty values

// We need to validate our document before referring to the id


$result = array(); //declare empty array
$result['error']='';
$result['result']=1;
$result['crud']='E';


$nameErr = $passErr = $genderErr = $err= "";
$name = $email = $gender = $pass = "";
$errors = [];
$data = [];


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (empty($_GET["fullname"])) {
        $err = "Name is required";
//        $data['success'] = false;
        $result['error']=$err;
        $result['result']=-1;
        echo $err;


    } else {
        $name = test_input($_GET["fullname"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
            $err = "Only letters and white space allowed";
            echo $err;
        }
    }


    if (!empty($_GET["pass"])) {

        $pass = test_input($_GET["pass"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/", $pass)) {
            $err = "Only letters and white space allowed";
            echo $err;
        }
    }
//    echo "Success";
    echo json_encode($data);

}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>
