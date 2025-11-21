/* global bootstrap */

// IIFE to hold functions and variables
let animalRepository = (function () {

  // Array to hold animal data fetched from external resource
  let animalList = [];

  // Return the animal list also outside of the IIFE
  function getAll () {
    return animalList;
  }

  // Add animals to animal list
  function add (newAnimal) {
    animalList.push(newAnimal);
  }

  // Populate animal overview on web page with animal buttons
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

  // Add event listener to animal overview buttons on web page
  function addAnimalButtonEventHandler (button, animal) {
    button.addEventListener('click', function() {
      showOverviewAnimalDetails(animal);
    })
  }

  // Toggle modal display for an animal set by function parameter after animal overview button is clicked on web page
  function showOverviewAnimalDetails (animal) {
    loadAnimalDetails(animal).then(function(externalAnimalDetails) {
      showModal(animal, externalAnimalDetails);
    }) 
  }

  // Load animal data (id, name, details URL & string name) from external source
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

  // Load animal details data (element, weight & food type) from animal details URL after click on animal button on web page
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

  // Show loading message after element on web page set by function parameter
  function showLoadingMessage (loadingMessageElement) {
    let loadingMessage = document.createElement('p');
    loadingMessage.classList.add('loading-message');
    loadingMessage.innerText = "Loading animal details...";
    loadingMessageElement.append(loadingMessage);
  }

  // Hide previously displayed loading message on web page
  function hideLoadingMessage () {
    let loadingMessage = document.querySelector('.loading-message');
    loadingMessage.remove();
  }

  // Use previously fetched animal data to create and populate a new modal for a given animal
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

  // Public/external methods
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

// Fill animal overview on web page

animalRepository.loadAnimalList().then(function () {
  animalRepository.fillAnimalOverview();
});