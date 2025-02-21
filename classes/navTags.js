import data from "../data.json";
if (window.location.pathname === "/") {
  const photographers = data.photographers;
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

  // ------------------------------------------------------------ //

  // IN case we wanna display an array through innerHTML

  // const obj = {
  //   name: "Poppy",
  //   age: 3,
  //   hobbies: ["run", "pup", "eat"]
  // };

  // document.body.innerHTML = `
  // <p>${obj.name}</p>
  // <p>${obj.age}</p>
  // ${obj.hobbies.map((hobbi) => {
  //   return `<span>${hobbi}</span>`;
  // })}`;

  // ------------------------------------------------------------ //

  // Exercice

  // Afficher nos photographers à l'aide de la fn dispPhotographers

  // dispPhotographers prend deux arguments :

  // 1 - un tableau de photographes

  // 2 - le noeud sur lequel on va injecter notre html depuis le js

  const dispPhotographers = (photographers, node) => {
    node.innerHTML = "";
    photographers.forEach((photographer) => {
      console.log(photographer);
      //     node.innerHTML =
      //       node.innerHTML +
      //       `
      //   <article>
      //     <h4>${photographer.name}</h4>
      //   </article>
      // `;
      const tags = `${photographer.tags
        .map((tag) => {
          return `<span class="tag">${tag}</span>`;
        })
        .join(" ")}`; // join : array => string concaténée

      node.innerHTML += `
      <article>
        <a href="/photographer.html?id=${photographer.id}"><h4>${photographer.name}</h4></a>
        <p>${photographer.country}</p>
        <p>${photographer.tagline}</p>
        <p>${photographer.price}€/jour</p>
        ${tags}
      </article>
    `;
    });
  };

  dispPhotographers(photographers, document.querySelector(".photographers"));

  // Define this function which returns a filtered array
  const filterPhotographersByTag = (photographers, tag) => {
    const filteredPhotographers = photographers.filter((photographer) => {
      const isIncluded = photographer.tags.includes(tag);
      return isIncluded;
    });

    return filteredPhotographers;
  };

  // other version of filterPhotographersByTag
  // 2 implicit returns
  const filterPhotographersByTag1 = (photographers, tag) =>
    photographers.filter((photographer) => photographer.tags.includes(tag));

  const addClickToTags = () => {
    // const ul = document.querySelector("ul");
    const { children } = document.querySelector("ul");

    for (let i = 0; i < children.length; i++) {
      //looping li...
      const li = children[i];

      li.addEventListener("click", (e) => {
        const filteredPhotographers = filterPhotographersByTag(
          photographers,
          e.target.textContent.slice(1)
        );

        dispPhotographers(
          filteredPhotographers,
          document.querySelector("section")
        );
      });
    }
  };

  addClickToTags();
} else {
  const id = window.location.search.split("=")[1];

  const { photographers } = data;

  const photographer = photographers.find((photographer) =>
    photographer.id === parseInt(id) ? photographer : null
  );

  console.log(photographer.name);
}
