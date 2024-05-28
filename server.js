const PostmanLocalMockServer = require('@jordanwalsh23/postman-local-mock-server');
const fs = require('node:fs');

let options = {
  port : process.env.PORT||3000
}

//Create the collection object.
options.collection = JSON.parse(fs.readFileSync('./collections/CitiMockServer_BOQ.postman_collection.json', 'utf8'));

//Create a new server
let server = new PostmanLocalMockServer(options);

//Start the server
server.start();

//Run some requests against your server
// axios.get(`http://localhost:3555`).then(res => {
//   //do something with the mocked response.
//   print(res);
//});

//Stop the server
//server.stop();