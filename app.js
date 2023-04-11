import http from "http";

function test() {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div id="root"></div>
  
      <script>
       
      </script>
    </body>
  </html>
  `;
}

function get() {
  let date = new Date();
  let yy = date.getFullYear().toString();
  let mm = (date.getMonth() + 1).toString();
  let dd = date.getDate().toString();
  let hh = date.getHours().toString();
  let mn = date.getMinutes().toString();
  let ss = date.getSeconds().toString();
  let time =
    yy + "-" + mm + "-" + dd + " 시간 " + hh + "시 " + mn + "분 " + ss + "초";
  console.log(time);
  setTimeout(get, 1000);
}

const server = http.createServer(function (request, response) {
  // const main = fs.readFileSync("./test.txt", { encoding: "utf-8" });
  if (request.method === "GET") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write();
    response.end();
  }
});

server.listen(8080, function () {
  console.log("Server is running...");
});
