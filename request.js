const axios = require("axios");
const fs = require("fs");
const http = require("http");

function func() {
  return new Promise((resolve, reject) => {
    console.log("request start");
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const data = JSON.stringify(response.data);
        fs.writeFileSync("request.json", data);

        resolve(data);
      })
      .catch((error) => reject(error));
  });
}

const server = http.createServer((request, response) => {
  func().then((data) => {
    response.writeHead(200, { "Content-Type": "text/json" });
    response.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
