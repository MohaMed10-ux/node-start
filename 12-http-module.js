const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(
      `<div style='background-color:white;'>Hello to the first setup Server</div>`,
    );
    res.end();
  } else if (req.url === "/contact") {
    res.write("Contact us every time you want");
    res.end();
  } else {
    res.write("We don't found this page");
    res.end();
  }
});

server.listen(4500);
