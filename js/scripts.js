let animalRepository = (function () {

  let animalList = [
    {
      'name': "Orca",
      'element': "Water",
      'averageWeightKilogram': 4500,
      'foodType': "Carnivore"
    },
    {
      'name': "Great White Shark",
      'element': "Water",
      'averageWeightKilogram': 800,
      'foodType': "Carnivore"
    },
    {
      'name': "Green Sea Turtle",
      'element': "Water",
      'averageWeightKilogram': 150,
      'foodType': "Herbivore"
    },
    {
      'name': "Raven",
      'element': "Air",
      'averageWeightKilogram': 1,
      'foodType': "Omnivore"
    },
    {
      'name': "Condor",
      'element': "Air",
      'averageWeightKilogram': 12,
      'foodType': "Carnivore"
    },
    {
      'name': "Albatross",
      'element': "Air",
      'averageWeightKilogram': 7,
      'foodType': "Herbivore"
    },
    {
      'name': "Lion",
      'element': "Land",
      'averageWeightKilogram': 190,
      'foodType': "Carnivore"
    },
    {
      'name': "Tiger",
      'element': "Land",
      'averageWeightKilogram': 220,
      'foodType': "Carnivore"
    },
    {
      'name': "Wolf",
      'element': "Land",
      'averageWeightKilogram': 40,
      'foodType': "Carnivore"
    },
    {
      'name': "Elephant",
      'element': "Land",
      'averageWeightKilogram': 4000,
      'foodType': "Herbivore"
    },
    {
      'name': "Black Bear",
      'element': "Land",
      'averageWeightKilogram': 110,
      'foodType': "Omnivore"
    },
  ];

  function getAll () {
    return animalList;
  }

  function add (newAnimal) {
    animalList.push(newAnimal);
  }

  function countLandAnimals () {
    let landAnimalNumber = 0;
    animalList.forEach(function(animal) {
      if (animal.element === 'Land') {
        landAnimalNumber++;
      }
    })
    return landAnimalNumber;
  }

  function countWaterAnimals () {
    let waterAnimalNumber = 0;
    animalList.forEach(function(animal) {
      if (animal.element === 'Water') {
        waterAnimalNumber++;
      }
    })
    return waterAnimalNumber;
  }

  function countAirAnimals () {
    let airAnimalNumber = 0;
    animalList.forEach(function(animal) {
      if (animal.element === 'Air') {
        airAnimalNumber++;
      }
    })
    return airAnimalNumber;
  }

  function findMaxAnimalWeight () {
    let maxAnimalWeight = (animalList[0].averageWeightKilogram + animalList[1].averageWeightKilogram + 0.1) / 2;
    animalList.forEach(function(animal) {
      if (animal.averageWeightKilogram > maxAnimalWeight) {
        maxAnimalWeight = animal.averageWeightKilogram;
      }
    })
    return maxAnimalWeight;
  }

  function findMinAnimalWeight () {
    let minAnimalWeight = (animalList[0].averageWeightKilogram + animalList[1].averageWeightKilogram + 0.1) / 2;
    animalList.forEach(function(animal) {
      if (animal.averageWeightKilogram < minAnimalWeight) {
        minAnimalWeight = animal.averageWeightKilogram;
      }
    })
    return minAnimalWeight;
  }

  function findMaxAnimalWeightName () {
    let maxAnimalWeightName = animalList[0].name;
    let maxAnimalWeight = (animalList[0].averageWeightKilogram + animalList[1].averageWeightKilogram + 0.1) / 2; 
    animalList.forEach(function(animal) {
      if (animal.averageWeightKilogram > maxAnimalWeight) {
        maxAnimalWeightName = animal.name;
        maxAnimalWeight = animal.averageWeightKilogram;
      }
    })
    return maxAnimalWeightName;
  }

  function findMinAnimalWeightName () {
    let minAnimalWeightName = animalList[0].name;
    let minAnimalWeight = (animalList[0].averageWeightKilogram + animalList[1].averageWeightKilogram + 0.1) / 2;
    animalList.forEach(function(animal) {
      if (animal.averageWeightKilogram < minAnimalWeight) {
        minAnimalWeightName = animal.name;
        minAnimalWeight = animal.averageWeightKilogram;
      }
    })
    return minAnimalWeightName;
  }

  function countCarnivoreAnimals () {
    let carnivoreAnimalNumber = 0;
    animalList.forEach(function(animal) {
      if (animal.foodType === 'Carnivore') {
        carnivoreAnimalNumber++;
      }
    })
    return carnivoreAnimalNumber;
  }

  function countHerbivoreAnimals () {
    let herbivoreAnimalNumber = 0;
    animalList.forEach(function(animal) {
      if (animal.foodType === 'Herbivore') {
        herbivoreAnimalNumber++;
      }
    })
    return herbivoreAnimalNumber;
  }

  function countOmnivoreAnimals () {
    let omnivoreAnimalNumber = 0;
    animalList.forEach(function(animal) {
      if (animal.foodType === 'Omnivore') {
        omnivoreAnimalNumber++;
      }
    })
    return omnivoreAnimalNumber;
  }

  function fillAnimalOverview () {
    let animalOverview = document.querySelector('.animal_overview');
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

  return {
    getAll: getAll,
    add: add,
    countLandAnimals: countLandAnimals,
    countWaterAnimals: countWaterAnimals,
    countAirAnimals: countAirAnimals,
    findMaxAnimalWeight: findMaxAnimalWeight,
    findMinAnimalWeight: findMinAnimalWeight,
    findMaxAnimalWeightName: findMaxAnimalWeightName,
    findMinAnimalWeightName: findMinAnimalWeightName,
    countCarnivoreAnimals: countCarnivoreAnimals,
    countHerbivoreAnimals: countHerbivoreAnimals,
    countOmnivoreAnimals: countOmnivoreAnimals,
    fillAnimalOverview: fillAnimalOverview,
    addAnimalButtonEventHandler: addAnimalButtonEventHandler,
    showOverviewAnimalDetails: showOverviewAnimalDetails
  }

})()

let currentAnimalList = animalRepository.getAll();
let currentNumberLandAnimals = animalRepository.countLandAnimals();
let currentNumberWaterAnimals = animalRepository.countWaterAnimals();
let currentNumberAirAnimals = animalRepository.countAirAnimals();
let currentMaxAnimalWeight = animalRepository.findMaxAnimalWeight();
let currentMinAnimalWeight = animalRepository.findMinAnimalWeight();
let currentMaxAnimalWeightName = animalRepository.findMaxAnimalWeightName();
let currentMinAnimalWeightName = animalRepository.findMinAnimalWeightName();
let currentCarnivoreAnimalNumber = animalRepository.countCarnivoreAnimals();
let currentHerbivoreAnimalNumber = animalRepository.countHerbivoreAnimals();
let currentOmnivoreAnimalNumber = animalRepository.countOmnivoreAnimals();

// add animal habitat/element numbers to DOM tree
document.querySelector('#landAnimalNumber').innerText = currentNumberLandAnimals;
document.querySelector('#waterAnimalNumber').innerText = currentNumberWaterAnimals;
document.querySelector('#airAnimalNumber').innerText = currentNumberAirAnimals;

// add animal weight numbers & names to DOM tree
document.querySelector('#maxWeightAnimalName').innerText = currentMaxAnimalWeightName;
document.querySelector('#maxAnimalWeight').innerText = currentMaxAnimalWeight;
document.querySelector('#minWeightAnimalName').innerText = currentMinAnimalWeightName;
document.querySelector('#minAnimalWeight').innerText = currentMinAnimalWeight;

// add animal diet numbers to DOM tree
document.querySelector('#carnivoreAnimalNumber').innerText = currentCarnivoreAnimalNumber;
document.querySelector('#herbivoreAnimalNumber').innerText = currentHerbivoreAnimalNumber;
document.querySelector('#omnivoreAnimalNumber').innerText = currentOmnivoreAnimalNumber;

// listen to animal selection by user
document.querySelector('#select_animal_button').addEventListener('click', () => {
  // store animal selection by user in variable
  let currentAnimal = document.querySelector('#animalName').value;
  // add selected animal name to DOM tree
  document.querySelector('#animalName_key').innerText = currentAnimal;
  // find animal element/habitat in array "currentAnimalList"
  currentElement = currentAnimalList.find(a => a.name === currentAnimal)?.element ?? null;
  // add animal element/habitat to DOM tree
  document.querySelector('#element').innerText = currentElement;
  // find animal weight in array "currentAnimalList"
  currentWeight = currentAnimalList.find(a => a.name === currentAnimal)?.averageWeightKilogram ?? null;
  // add animal weight to DOM tree
  document.querySelector('#weight').innerText = currentWeight;
  // find animal food in array "currentAnimalList"
  currentFood = currentAnimalList.find(a => a.name === currentAnimal)?.foodType ?? null;
  // add animal food to DOM tree
  document.querySelector('#food').innerText = currentFood;
});

//listen to animal addition by user
document.querySelector('#add_animal_button').addEventListener('click', () => {
  let addedAnimal = {
    'name': document.querySelector('#newAnimalName').value,
    'element': document.querySelector('#newAnimalElement').value,
    'averageWeightKilogram': document.querySelector('#newAnimalWeight').value,
    'foodType': document.querySelector('#newAnimalFood').value
  }
  
  // add new animal data object to animalRepository
  animalRepository.add(addedAnimal);
  
  // add new animal as new option to animalName select 
  let animalSelect = document.querySelector('#animalName');
  let newAnimalOption = document.createElement('option');
  // newAnimalOption.innerText = '<option value="' + addedAnimal.name + '">' + addedAnimal.name + '</option>';
  newAnimalOption.value = addedAnimal.name;
  newAnimalOption.innerText = addedAnimal.name;
  animalSelect.appendChild(newAnimalOption);
  console.log(document.querySelector('#animalName').innerHTML);
});

// fill animal overview
animalRepository.fillAnimalOverview();
