const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) console.log(err);
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) console.log(err);
    const second = result;
    writeFile(
      "./content/third-async.txt",
      `\nHello this is first :${first}\nsecond:${second}`,
      (err, result) => {
        if (err) console.log(err);
        return result;
      },
    );
  });
});
