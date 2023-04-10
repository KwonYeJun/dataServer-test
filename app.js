import http from "http";
import fs from "fs";

const server = http.createServer(function (request, response) {
  const main = fs.readFileSync("./test.txt", { encoding: "utf-8" });

  response.writeHead(200, { "Content-Type": "text/html" });

  response.end(main);
});
server.listen(8080, function () {
  console.log("Server is running...");
});
