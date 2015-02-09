//Wait for the device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);



// $(document).ready(function() {
// 	var content;
//     	$.ajax({
//     		type: 'GET',
//             dataType: 'json',
//             // data: data,
//             url: "http://localhost:8888/json.php", //process to mail
//             success: function(data) {
//             	var json = $.parseJSON(data);
//             	// for(i=0; i<data.length; i++){
//              //    var  content  = '<li>';
//              //         content +=  data[i].name;
//              //         content  += '<br />';
//              //         content +=  data[i].menu;
//              //         content += '</li>';

//              //    $('ul.rubrica').append(content);
//             	// }
//             	alert('Im in')
//             },
//             error: function() {
//             	alert('failure');
//             }
//         });
// });

function getDataJson() {

    $.getJSON('ajax/test.json', function(data) {
        alert('yujuuuuu')
        // var item = [];
        // $.each(data, function(key, val) {

        // });
    });
}


// $(document).ready(function() {
// });


function onDeviceReady() {
   getDataJson();
}