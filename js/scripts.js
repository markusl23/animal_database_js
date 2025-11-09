let animalRepository = (function () {

  let animalList = [];

  function getAll () {
    return animalList;
  }

  function add (newAnimal) {
    animalList.push(newAnimal);
  }

  function fillAnimalOverview () {
    let animalOverview = document.querySelector('.animal_overview');
    /*
    console.log("fillAnimalOverview function called...");
    console.log("Animal list:");
    console.log(animalList);
    */
    animalList.forEach(function(animal) {
      let animalOverviewItem = document.createElement('li');
      let animalOverviewItemButton = document.createElement('button');
      animalOverviewItemButton.innerText = animal.name;
      animalOverviewItemButton.classList.add('animal-overview-item-button')
      animalOverviewItem.appendChild(animalOverviewItemButton);
      animalOverview.appendChild(animalOverviewItem);
      addAnimalButtonEventHandler (animalOverviewItemButton, animal);
    })
  }

  function addAnimalButtonEventHandler (button, animal) {
    button.addEventListener('click', function(event) {
      showOverviewAnimalDetails(animal);
    })
  }

  function showOverviewAnimalDetails (animal) {
    console.log(animal.name);
  }

  function loadAnimalList () {
    return fetch('https://worldwide-impact.org/animal_data_api/animal_data.json').then(function (response) {
      return response.json();
    }).then(function (externalAnimalData) {
      externalAnimalData.forEach(function(externalAnimal) {
        animalRepository.add(externalAnimal);
      })
    }).catch(function () {
      console.log("Error!")
      });
  }

  function loadAnimalDetails (animal) {

  }

  return {
    getAll: getAll,
    add: add,
    fillAnimalOverview: fillAnimalOverview,
    addAnimalButtonEventHandler: addAnimalButtonEventHandler,
    showOverviewAnimalDetails: showOverviewAnimalDetails,
    loadAnimalList: loadAnimalList,
    loadAnimalDetails: loadAnimalDetails
  }

})()

// fill animal overview

animalRepository.loadAnimalList().then(function () {
  animalRepository.fillAnimalOverview();
});