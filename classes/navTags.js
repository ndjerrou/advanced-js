import data from "../data.json";

console.log(data);

const objTags = {};
const tags = ["sports", "architecture"];
tags.forEach((tag) => {
  objTags[tag] = tag;
});
