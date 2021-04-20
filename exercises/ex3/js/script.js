function createGrid(x) {

    count = 0 ;
    while (count < x){
        for (var columns = 0; columns < 3; columns++) {
            count++;
            console.log(x)
            if (count > x)
                break;

            if (count == 1 ){ //the first
               $("#container").append("<div style='pointer-events: none'; class='grid'><div id='plus'></div></div>");
                continue;
            }
            if ((columns+1) % 3 == 0 ){

               $("#container").append("<div class='grid'><div id='star'></div></div>");

            }
            else {
                $("#container").append("<div class='grid'></div>");

            }
        };
    };
    if ( screen.width < 960){
            $(".grid").width(960/2);
    $(".grid").height(960/2);
    }
    else {
        $(".grid").width(960 / 3);
        $(".grid").height(960 / 3);
    }
    color_boxes()
};

function clearGrid(){
    $(".grid").remove();
};

function random_color(){
        var myColors = [
        '#7F8C8D', '#95A5A6', '#BDC3C7', '#003946', '#BDC3C7',
        '#ECF0F1', '#BDC3C7', '#ECF0F1', '#C0392B', '#E74C3C',
        '#D35400', '#E67E22', '#F39C12', '#F1C40F', '#22313f',
        '#2C3E50', '#34495E', '#8E44AD', '#9B59B6', '#2980B9',
        '#3498DB', '#27AE60', '#2ECC71', '#16A085'
    ];
         var colors = myColors.slice(0);
         var color = Math.floor(Math.random() * colors.length);
         return colors[color]
}
function color_boxes(){
    var myColors = [
        '#7F8C8D', '#95A5A6', '#BDC3C7', '#003946', '#BDC3C7',
        '#ECF0F1', '#BDC3C7', '#ECF0F1', '#C0392B', '#E74C3C',
        '#D35400', '#E67E22', '#F39C12', '#F1C40F', '#22313f',
        '#2C3E50', '#34495E', '#8E44AD', '#9B59B6', '#2980B9',
        '#3498DB', '#27AE60', '#2ECC71', '#16A085'
    ];

        var colors = myColors.slice(0);
   
        $('div.grid').each(function() {
             var color = Math.floor(Math.random() * colors.length);
             $(this).css('background-color', colors[color]);

        });


    }



$(document).ready(function() {
    str = "shai"
    createGrid(str.length*2);

    $(".grid").click(function() {

        if ($(this).attr('id') != 'theImg') {

            $(this).css("background-color", "white");
            $(this).attr('id', 'theImg');
        }
        else {
            $(this).removeAttr('id');
            $(this).css("background-color", random_color());
        }
        });

    $("#plus").click(function (){
        alert("added");
    });

});