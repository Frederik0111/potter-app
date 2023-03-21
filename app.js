"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
    // Harry Potter
    const potterName = "Harry Potter";
    const potterGender = "male";
    const potterHouse = "Gryffindor";
    const potterDateOfBirth = "31-07-1980";
    const potterAncestry = "half-blood";
    const potterEyeColour = "green";
    const potterHairColour = "black";
    const potterActor = "Daniel Radcliffe";
    const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

    console.log(
        potterName,
        potterGender,
        potterHouse,
        potterDateOfBirth,
        potterAncestry,
        potterEyeColour,
        potterHairColour,
        potterActor,
        potterImage
    );

    showCharacter(
      potterImage,
      potterName,
      potterHouse,
      potterDateOfBirth,
      potterActor
    );
    // showCharacter(
    //   hermioneImage,
    //   hermioneName,
    //   hermioneHouse,
    //   hermioneOfBirth,
    //   hermioneActor
    // );
}

// const characters = document.querySelector("#characters");

function showCharacter(image, name, house, dateOfBirth, actor) {
    // visning af character elements  
    const articleElement = document.createElement("article");
    const imageElement = document.createElement("img");
    const nameElement = document.createElement("h2");
    const houseElement = document.createElement("p");
    const dateOfBirthElement = document.createElement("p");
    const actorElement = document.createElement("p");

    nameElement.textContent = name;
    imageElement.src = "http://hp-api.herokuapp.com/images/harry.jpg";
    houseElement.textContent = house;
    dateOfBirthElement.textContent = dateOfBirth;
    actorElement.textContent = actor;

    // dateOfBirthElement.textContent = `Date of Birth: ${dateOfBirth}`;
    // actorElement.textContent = `${name} is played by ${actor}`;

    articleElement.append(
      imageElement,
      nameElement,
      houseElement,
      dateOfBirthElement,
      actorElement
    );

        document.querySelector("#characters").appendChild(articleElement);

    console.log(
        image,
        name,
        house,
        dateOfBirth,
        actor
    );

    console.log(
        imageElement,
        nameElement
    );


}

