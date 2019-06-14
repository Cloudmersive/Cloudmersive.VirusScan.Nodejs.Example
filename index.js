console.log("Starting...");

var CloudmersiveVirusApiClient = require('cloudmersive-virus-api-client');
var defaultClient = CloudmersiveVirusApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';



var apiInstance = new CloudmersiveVirusApiClient.ScanApi();

var inputFile = Buffer.from(fs.readFileSync("C:\\temp\\output.csv").buffer); // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.scanFile(inputFile, callback);

console.log("Done.");