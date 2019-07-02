var pdfcrowd = require("pdfcrowd");
var path = require('path')

// create the API client instance
const pdf = () => {

    var client = new pdfcrowd.HtmlToPdfClient("hmadugula", "0f05af04fe5072e896edb8e67273cedc");

    // run the conversion and write the result to a file
    // client.convertFileToFile(
    //     'login.zip',
    //     "login.pdf",
    //     function(err, fileName) {
    //         if (err) return console.error("Pdfcrowd Error: " + err);
    //         console.log("Success: the file was created " + fileName);
    //     });
    client.convertUrlToFile(
        'https://localhost:3000',
        'localhost.pdf',
        function(err, file) {
            if (err) return console.log('Pdfcrowd Error: ', err)
            console.log('Success: ', file);

        }
    )

}

module.exports = pdf