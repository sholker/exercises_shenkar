$(document).ready(function(){
    var blackLine = $(".black-line"),
        ball = $(".main-container"),
        mainForm = $(".main-forms"),
        top = $(".pokemon-top-part"),
        bottom = $(".pokemon-bottom-part"),
        h = $(".sign-back h1"),
        row = $(".signup-row"),
        arrow= $(".signup-row a"),
        rem = $(".remember"),
        tl = new TimelineMax();

    // Start
    tl
        .to(blackLine,0.5,{classfield_value:'+=red-circle'})
        .to(blackLine,0.5,{classfield_value:'-=red-circle'})
        .to(blackLine,0.5,{classfield_value:'+=red-circle'})
        .to(blackLine,0.5,{classfield_value:'-=red-circle'})
        .to(blackLine,0.5,{classfield_value:'+=red-circle'})
        .to(blackLine,0.5,{classfield_value:'-=red-circle'})
        .to(blackLine,0.5,{classfield_value:'+=red-circle'})
        .to(blackLine,0.5,{classfield_value:'-=red-circle'})
        .to(ball,0.5,{y:"-70%",ease:Power4.easeOut})
        .to(ball,0.5,{y:"-50%",ease:Bounce.easeOut})
        .to(ball,0.5,{y:"-85%",ease:Power4.easeOut},"+=0.5")
        .to(ball,0.5,{y:"-50%",ease:Bounce.easeOut})
        .to(ball,0.5,{y:"-100%",ease:Power4.easeOut},"+=0.5")
        .to(ball,0.5,{y:"-50%",ease:Bounce.easeOut,onComplete:toggle})
    ;
    function toggle(o){
        $(".main-forms").slideDown(1200);
        tl
            .to(top,1,{autoAlpha:0})
            .to(bottom,1,{autoAlpha:0},"-=1")
            .fromTo(h,1,{autoAlpha:0,y:-20},{autoAlpha:1,y:0},"+=0.5")
            .staggerFrom(row,1,{left:"-100%",autoAlpha:0},0.2)
            .staggerFrom(rem,1,{cycle:{y:[20,-20]},autoAlpha:0},0.2)

    }

})


function validationForm() {
    var msg = "";
    var field_value = document.forms["form1"]["fullName"].value;
    if (field_value==""){
        msg = "fullName is required";
        document.getElementById("messageErr").innerHTML = msg;
        return false;
    }
    if (field_value.indexOf(" ")==-1||field_value.length<3) {
        msg="Full name must have least one space!\n";
        document.getElementById("messageErr").innerHTML = msg;
        return false;
    }

    field_value = document.forms["form1"]["pass"].value;
    var passRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    if (field_value.length<8 || !passRegex.test(field_value)) {
        msg="Password have to contain at least 8 charcters!\n";
        document.getElementById("messageErr").innerHTML = msg;
        return false
    }
    field_value = document.forms["form1"]["phone"].value;
    if (field_value.length>10 || field_value.length<9 || isNaN(field_value)) {
        msg="Phone is between 9 to 10 digits without charcters!\n";
        document.getElementById("messageErr").innerHTML = msg;
        return false
    }
    field_value = document.getElementsByName("interests[]");
    field_value = field_value[0].checked+field_value[1].checked+field_value[2].checked+field_value[3].checked;
    console.log(field_value);
    if (field_value == 0){

        msg="must check one interest!\n";
        document.getElementById("messageErr").innerHTML = msg;
        return false
    }

    return true;
};

