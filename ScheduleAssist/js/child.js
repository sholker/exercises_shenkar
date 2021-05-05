function fill_paragrafh(name,desc,next_days,details){

    $("#description_child").append(`<div><img src="images/${name}.svg" onerror="this.src='images/Kylie.svg'"></div><h3>${name}</h3><p class='descriptionp'>${desc}</p><p>Next Metting in: ${next_days}</p><p>Parent’s details: ${details}</p></div>`);

}



$(document).ready(function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const name = urlParams.get('name');
    // name = "Kylie";

    document.getElementById("heyT").innerHTML="Hey Steve";

    fill_paragrafh(name,"Age: 9 years old Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae justo sem. Morbi ac urna placerat, viverra lacus eu, sodales ex. Nulla eleifend, lacus fringilla suscipit euismod, sem sem molestie augue, sed aliquet mauris justo eu diam. Cras condimentum arcu non gravida molestie. Pellentesque dapibus consequat hendrerit. Aenean nisl dolor, venenatis in euismod in, viverra ut tellus. Quisque eget tortor ligula. Etiam at arcu in enim congue ornare. Nunc fringilla ante blandit, lobortis justo quis, pharetra sem. Donec pharetra tristique tincidunt. Proin est lectus, tincidunt ut dui ut, finibus ornare erat. Morbi tristique maximus tellus, sodales varius justo hendrerit at. Curabitur in felis erat. Curabitur viverra, ligula a dictum ullamcorper, metus dolor imperdiet dui, suscipit egestas orci augue non nunc. Aliquam imperdiet nec tellus ac ultrices. Sed ullamcorper, ante in venenatis blandit, neque est volutpat tellus, at auctor felis velit eget enim. Suspendisse a ante neque. In ut placerat lacus, at placerat arcu. Sed dignissim pulvinar sapien, eu aliquam metus facilisis eu. Cras tincidunt hendrerit mattis. Nunc justo urna, tincidunt sit amet lacinia vel, bibendum nec elit. Nam lorem risus, viverra ut risus sed, dictum placerat sem.","5 days","Jennifer 0509876544");


});