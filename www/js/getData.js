//Wait for the device API libraries to load
// document.addEventListener("deviceready", onDeviceReady, false);



$(document).ready(function() {
	var content, data = {rest: 'all'};
    	$.ajax({
    		type: 'GET',
            dataType: 'json',
            data: data,
            url: "../json.php", //process to mail
            success: function(data) {
            	alert('SIIIIIIIII');
            	// for(i=0; i<data.length; i++){
             //    var  content  = '<li>';
             //         content +=  data[i].name;
             //         content  += '<br />';
             //         content +=  data[i].menu;
             //         content += '</li>';

             //    $('ul.rubrica').append(content);
            	// }
            },
            error: function() {
            	alert('failure');
            }
        });
});


// function onDeviceReady() {
//    getDataJson();
// }