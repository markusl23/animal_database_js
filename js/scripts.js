let animalRepository = (function () {

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
      animalOverviewItemButton.classList.add('animal-overview-item-button')
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

  // provide toggle functionality for animal buttons to display/hide animal details
  function showOverviewAnimalDetails (animal) {
    loadAnimalDetails(animal).then(function(externalAnimalDetails) {
      showModal(externalAnimalDetails);
    }) 
  }

  // load animal data (id, name & details URL) from external source
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
    }).catch(function () {
      hideLoadingMessage(loadingMessageElement);
      console.log("Error!")
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
    }).catch(function () {
      hideLoadingMessage(loadingMessageElement);
      console.log("Error!")
      });
  }

  function showLoadingMessage (loadingMessageElement) {
    let loadingMessage = document.createElement('p');
    loadingMessage.classList.add('loading-message');
    loadingMessage.innerText = "Loading...";
    loadingMessageElement.append(loadingMessage);
    console.log(loadingMessage.innerText);
  }

  function hideLoadingMessage (loadingMessageElement) {
    let loadingMessage = document.querySelector('.loading-message');
    loadingMessage.remove();
  }

  let modalContainer = document.querySelector('#modal-container');

  function showModal (title, text) {
  modalContainer.innerHTML = '';
  
  let modal = document.createElement('div');
  modal.classList.add('modal');
  
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);
  
  
  let titleElement = document.createElement('h1');
  titleElement.innerText = title;
  
  let contentElement = document.createElement('p');
  contentElement.innerText = text;
  
  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modalContainer.appendChild(modal);

  modalContainer.classList.add('is-visible');
}

function hideModal () {
  modalContainer.classList.remove('is-visible');
}
  
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});
  
window.addEventListener('click', (e) => {
  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

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
    showModal: showModal,
    hideModal: hideModal
  }

})()

// fill animal overview

animalRepository.loadAnimalList().then(function () {
  animalRepository.fillAnimalOverview();
});