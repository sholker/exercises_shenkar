
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
console.log(params);
console.log("##########");


// params['userID']
var today_meetings = [
    { "id":0,"Title": "meeting_0", "Ti me": "1 minute" },
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

function tableCreate_meeting(list,class_name) {
    var el = document.getElementById("container");
    var tbl = document.createElement('table');
    tbl.className=class_name;
    tbl.style.width = '100%';
    // tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < list.length; i++) {
        var tr = document.createElement('tr');
        // for (var j = 0; j < 2; j++) {
            if (i == list.length && j == 1) {
                break
            } else {
                var td = document.createElement('td');
                td.innerHTML = list[i]['title'];
                var td2 = document.createElement('td');
                td2.innerHTML = list[i]['date'];

                td.appendChild(document.createTextNode('\u0020'))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td)

                td2.appendChild(document.createTextNode('\u0020'))
                i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
                tr.appendChild(td2)
            }
        // }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    el.appendChild(tbl);
}
function tableCreate_childs(list,class_name) {
    var el = document.getElementById("container");
    var tbl = document.createElement('table');
    tbl.className=class_name;
    tbl.style.width = '100%';
    // tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < list.length; i++) {
        var tr = document.createElement('tr');
        // for (var j = 0; j < 2; j++) {
        if (i == list.length && j == 1) {
            break
        } else {
            var td = document.createElement('td');
            td.innerHTML = list[i]['f_name'];
            var td2 = document.createElement('td');
            td2.innerHTML = list[i]['l_name'];
            var td3 = document.createElement('td');
            td3.innerHTML = list[i]['cons_yaer_autism_lvl'];

            td.appendChild(document.createTextNode('\u0020'))
            i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            tr.appendChild(td)

            td2.appendChild(document.createTextNode('\u0020'))
            i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            tr.appendChild(td2)

            td3.appendChild(document.createTextNode('\u0020'))
            i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
            tr.appendChild(td3)
        }
        // }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    el.appendChild(tbl);
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



$.ajax({
    type: "GET",
    url: 'php/get_today_meetings.php',
    success: function (responseText) {
        data = JSON.parse(responseText);
        // alert(responseText);
        if (data == "Rows Empty") {
            lb =document.createElement("label");
            lb.innerText="No Meetings";
            lb.className = "tbl_today";
            document.getElementById("container").appendChild(lb);
return;
        }
        else {

            tableCreate_meeting([data], "tbl_today");
        }

    }
});


$.ajax({
    type: "GET",
    url: 'php/get_tommorow_meeting.php',
    success: function (responseText) {
        data = JSON.parse(responseText);
        // alert(responseText);
        if (data == "Rows Empty") {
            lb =document.createElement("label");
            lb.innerText="No Meetings";
            lb.className = "tbl_tommorow";
            document.getElementById("container").appendChild(lb);


            return;
        }
        else {

            tableCreate_meeting([data], "tbl_tommorow");
        }

    }
});

$.ajax({
    type: "GET",
    url: 'php/get_attention_child.php',
    success: function (responseText) {
        data = JSON.parse(responseText);
        // alert(responseText);
        if (data == "Rows Empty") {
            lb =document.createElement("label");
            lb.innerText="No Childs";
            lb.className = "tbl_attention";
            document.getElementById("container").appendChild(lb);


            return;
        }
        else {

            tableCreate_childs([data], "tbl_attention");
        }

    }
});

$.ajax({
    type: "GET",
    url: 'php/culc_ratting.php',
    success: function (responseText) {
        data = JSON.parse(responseText);
        // alert(responseText);
        if (data == "Rows Empty") {
            lb =document.createElement("label");
            lb.innerText="empty";
            lb.className = "ratting";
            document.getElementById("container").appendChild(lb);


            return;
        }
        else {

            Create_ratting(parseInt(data));
        }

    }
});


