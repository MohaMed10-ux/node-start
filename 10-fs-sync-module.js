const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/third.txt",
  `\nHello this the two files the first one : ${first}\nand the second one : ${second}`,
  { flag: "a" },
);
