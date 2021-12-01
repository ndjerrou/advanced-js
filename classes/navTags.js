import data from "../data.json";

const tagsPhotographers = [];

// [tags] ==> {tag1: ..., tag2: ..., }
const createUniqueTags = (tags) => {
  const uniqueTags = {};

  tags.forEach((tag) => {
    uniqueTags[tag] = 1;
  });

  return uniqueTags;
};

// display into the dom an array of tags into a specific node
const dispTags = (tags, node) => {
  node.innerHTML = "";
  tags.forEach((tag) => {
    node.innerHTML += `<li>#${tag}</li>`;
  });
};

// alternative to dispTags
const dispTags1 = (tag, node) => {
  node.innerHTML += `<li>#${tag}</li>`;
};

// fulfill our tagsPhotographers array with tags
data.photographers.forEach((photographer) => {
  photographer.tags.forEach((tag) => {
    tagsPhotographers.push(tag);
  });
});

// Creating an array with the DISCTING tags
const uniqueTagsObj = createUniqueTags(tagsPhotographers);
const uniqueTagsArray = Object.keys(uniqueTagsObj);

dispTags(uniqueTagsArray, document.querySelector("ul"));

// or ...

// for (let tag in uniqueTagsObj) {
//   dispTags1(tag, document.querySelector("ul"));
// }
