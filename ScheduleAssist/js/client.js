var count = 0 ;

function createGrid(x) {
    console.log(count);
    // name="Kylie";
    while (count < x){
        for (var columns = 0; columns < 3; columns++) {
            count++;

            if (count > x)
                break;
            name = "Child_${count}"

            $("#container").append(`<div class="grid"><div class='box'><a href="child.html?name=Child_${count}"><img src="images/${name}.svg"  onerror="this.src='images/Kylie.svg'"></a></div>Child_${count}</div>`);

            // $("#container").append("<div class='grid'></div>");
        }
    }
    if ( screen.width < 960){
        $(".grid").width(960/3);
        $(".grid").height(960/3);
    }
    else {
        $(".grid").width(960 / 5);
        $(".grid").height(960 / 5);
    }
}



$(document).ready(function() {
    document.getElementById("heyT").innerHTML="Hey Steve";

    createGrid(15);


});