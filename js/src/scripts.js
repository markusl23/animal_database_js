// IIFE to hold functions and variables
let animalRepository = (function () {

  // array to hold animal data fetched from external resource
  let animalList = [];

  // return the animal list also outside of the IIFE
  function getAll () {
    return animalList;
  }

  // add animals to animal list
  function add (newAnimal) {
    animalList.push(newAnimal);
  }

  // populate animal overview with animal buttons
  function fillAnimalOverview () {
    let animalOverview = document.querySelector('.animal_overview');
    animalList.forEach(function(animal) {
      let animalOverviewItem = document.createElement('li');
      let animalOverviewItemButton = document.createElement('button');
      let animalDetailsText = document.createElement('p');
      animalOverviewItemButton.innerText = animal.name;
      animalOverviewItemButton.classList.add('animal-overview-item-button');
      animalOverviewItemButton.setAttribute('aria-label', `Show details about ${animal.name}`);
      let animalDetailsClass = animal.stringName;
      animalDetailsText.classList.add(animalDetailsClass);
      animalOverviewItem.appendChild(animalOverviewItemButton);
      animalOverviewItem.appendChild(animalDetailsText);
      animalOverview.appendChild(animalOverviewItem);
      addAnimalButtonEventHandler (animalOverviewItemButton, animal);
    })
  }

  // add event listener to animal overview buttons
  function addAnimalButtonEventHandler (button, animal) {
    button.addEventListener('click', function(event) {
      showOverviewAnimalDetails(animal);
    })
  }

  // toggle modal display for an animal set by function parameter after animal overview button is clicked
  function showOverviewAnimalDetails (animal) {
    loadAnimalDetails(animal).then(function(externalAnimalDetails) {
      showModal(animal, externalAnimalDetails);
    }) 
  }

  // load animal data (id, name, details URL & string name) from external source
  function loadAnimalList () {
    let loadingMessageElement = document.querySelector('h1');
    showLoadingMessage(loadingMessageElement);
    return fetch('https://worldwide-impact.org/animal_data_api/animal_data.json').then(function (response) {
      return response.json();
    }).then(function (externalAnimalData) {
      hideLoadingMessage(loadingMessageElement);
      externalAnimalData.forEach(function(externalAnimal) {
        animalRepository.add(externalAnimal);
      })
    }).catch(function (e) {
      hideLoadingMessage(loadingMessageElement);
      console.error(e);
      });
  }

  // load animal details data (element, weight & food type)
  function loadAnimalDetails (animal) {
    let loadingMessageElementClass = "." + animal.stringName;
    let loadingMessageElement = document.querySelector(loadingMessageElementClass);
    showLoadingMessage(loadingMessageElement);
    let url = animal.detailsUrl;
    return fetch(url).then(function(response) {
      hideLoadingMessage(loadingMessageElement);
      return response.json();
    }).then(function (externalAnimalDetails) {
      return externalAnimalDetails;
    }).catch(function (e) {
      hideLoadingMessage(loadingMessageElement);
      console.error(e);
      });
  }

  // show loading message after element set by function parameter
  function showLoadingMessage (loadingMessageElement) {
    let loadingMessage = document.createElement('p');
    loadingMessage.classList.add('loading-message');
    loadingMessage.innerText = "Loading animal details...";
    loadingMessageElement.append(loadingMessage);
    console.log(loadingMessage.innerText);
  }

  // hide previously set loading message
  function hideLoadingMessage (loadingMessageElement) {
    let loadingMessage = document.querySelector('.loading-message');
    loadingMessage.remove();
  }

  // create and populate a modal for an animal set by function parameters
  let bootstrapModal = new bootstrap.Modal(document.getElementById('animalModal'));

  function showModal(animal, externalAnimalDetails) {
    let modalElement = document.getElementById('animalModal');
    let titleElement = modalElement.querySelector('.modal-title');
    let bodyElement  = modalElement.querySelector('.modal-body');

    titleElement.textContent = animal.name;

    bodyElement.innerHTML = `
      <ul class="list-unstyled list-group mb-3">
        <li class="list-group-item"><strong>Habitat:</strong> ${externalAnimalDetails.element}</li>
        <li class="list-group-item"><strong>Average weight (kg):</strong> ${externalAnimalDetails.averageWeightKilogram}</li>
        <li class="list-group-item"><strong>Food type:</strong> ${externalAnimalDetails.foodType}</li>
      </ul>
      <img class="img-fluid rounded" src="${externalAnimalDetails.image}" alt="photo of ${animal.name}">
    `;

    bootstrapModal.show();
  }

  // public/external methods
  return {
    getAll: getAll,
    add: add,
    fillAnimalOverview: fillAnimalOverview,
    addAnimalButtonEventHandler: addAnimalButtonEventHandler,
    showOverviewAnimalDetails: showOverviewAnimalDetails,
    loadAnimalList: loadAnimalList,
    loadAnimalDetails: loadAnimalDetails,
    showLoadingMessage: showLoadingMessage,
    hideLoadingMessage: hideLoadingMessage,
    showModal: showModal
  }

})()

// fill animal overview

animalRepository.loadAnimalList().then(function () {
  animalRepository.fillAnimalOverview();
});