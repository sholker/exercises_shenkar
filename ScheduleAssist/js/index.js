
var today_meetings = [
    { "id":0,"Title": "meeting_0", "Time": "1 minute" },
    { "id":1,"Title": "meeting_1", "Time": "10:30 AM" },
    { "id":2,"Title": "meeting_2", "Time": "11:00 AM" },
    { "id":3,"Title": "meeting_3", "Time": "20:00 PM" }
];

var tommorow_meetings = [
    { "id":4,"Title": "meeting_4", "Time": "10:30 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":5,"Title": "meeting_5", "Time": "11:00 AM" },
    { "id":6,"Title": "meeting_6", "Time": "20:00 PM" }
]

var attention_childs = [
    { "id":0,"Name": "Child_0"},
    { "id":1,"Name": "Child_1"},
    { "id":2,"Name": "Child_2"}
];

var feedbacks = [
    { "id":4,"Title": "Feadback_1","value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum et est feugiat imperdiet nec in sapien. In facilisis ex purus!", "Time": "2 minute ago" },
    { "id":6,"Title": "Feadback_1","value":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel ipsum et est feugiat imperdiet nec in sapien. In facilisis ex purus!", "Time": "30 minute ago" }
]

const star_ratting_max = 5;
function GFG_FUN(list,class_name) {
    var cols = [];
console.log(`create ${class_name}`);
    for (var i = 0; i < list.length; i++) {
        for (var k in list[i]) {
            if (cols.indexOf(k) === -1) {

                // Push all keys to the array
                cols.push(k);
            }
        }
    }

    // Create a table element
    var table = document.createElement("table");
    table.className=class_name;
    // Create table row tr element of a table
    var tr = table.insertRow(-1);
    console.log(cols);

    // for (var i = 0; i < cols.length; i++) {
    //     // Create the table header th element
    //     // var theader = document.createElement("th");
    //     // theader.innerHTML = cols[i];
    //     //
    //     // // Append columnName to the table row
    //     // tr.appendChild(theader);
    // }

    // Adding the data to the table
    for (var i = 0; i < list.length; i++) {

        // Create a new row
        trow = table.insertRow(-1);

        var ln = document.createElement("a");
        var id = list[i[0]];
        // ln.innerHTML="    b\t";
        ln.className="metting_link";
        ln.href = `#metting?id=${id}`;

        for (var j = 1; j < cols.length; j++) {
            var cell = trow.insertCell(-1);

            // Inserting the cell at particular place
            cell.innerHTML = list[i][cols[j]];
            if(list[i][cols[j]] <= "1 minute" && class_name=="tbl_today"){
                  trow.id="mark";


            }
        }
        var cell = trow.insertCell(-1);
        // cell.innerHTML ="link";
        cell.appendChild(ln);
        // cell.href=`metting?id=${id}`;
    }
    // Add the newely created table containing json data
    var el = document.getElementById("container");
    // el.innerHTML = "";
    el.appendChild(table);
}



function Create_ratting(num){
    for (var i = 1; i <= star_ratting_max; i++) {
        var star = document.createElement("span");
        if (i<= num){
            star.className="fa fa-star";
        }
        else{
            star.className="fa fa-star-o";

        }
        var el = document.getElementById("star_r");
        // el.innerHTML = "";
        el.appendChild(star);

    }
}


$(document).ready(function() {
    document.getElementById("heyT").innerHTML="Hey Steve";

    GFG_FUN(today_meetings,"tbl_today");
    GFG_FUN(tommorow_meetings,"tbl_tommorow");
    GFG_FUN(attention_childs,"tbl_attention");
    Create_ratting(3);
    GFG_FUN(feedbacks,"tbl_feedbacks");

});
