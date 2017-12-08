function GetEmploymentInfo(){/*

	console.log("getting data from php page");
*/
$.support.cors = true;
	$.ajax({
        type: 'POST',
        dataType: 'text',
        data: null,
        url: "assets/custom/php/get_data.php",
        success: function(res) {
          console.log(res);
        },
        error: function(jqXHR, textStatus, errorThrown ){
	        
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        }
      });
}