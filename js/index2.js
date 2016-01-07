document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    scan: function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan( function (result) {
			$('#info').html(  
				"We got a barcode\n" + 
				"Result: " + result.text + "\n" + 
				"Format: " + result.format + "\n" + 
				"Cancelled: " + result.cancelled)
			);

        }, function (error) { 
            alert("Scanning failed: ", error); 
        } );
    },

    encode: function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.encode(scanner.Encode.TEXT_TYPE, "http://www.nhl.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

    }
};
