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

  return {
    getAll: getAll,
    add: add,
    countLandAnimals: countLandAnimals,
    countWaterAnimals: countWaterAnimals,
    countAirAnimals: countAirAnimals,
    findMaxAnimalWeight: findMaxAnimalWeight,
    findMinAnimalWeight: findMinAnimalWeight,
    findMaxAnimalWeightName: findMaxAnimalWeightName,
    findMinAnimalWeightName: findMinAnimalWeightName

  }

})()

let currentAnimalList = animalRepository.getAll();
let currentNumberLandAnimals = animalRepository.countLandAnimals();
let currentNumberWaterAnimals = animalRepository.countWaterAnimals();
let currentNumberAirAnimals = animalRepository.countAirAnimals();
let currentMaxAnimalWeight = animalRepository.findMaxAnimalWeight();
let currentMinAnimalWeight = animalRepository.findMinAnimalWeight();
let currentMaxAnimalWeightName = animalRepository.findMaxAnimalWeightName();
let currentMinAnimalWeightName= animalRepository.findMinAnimalWeightName();

// add animal habitat/element numbers to DOM tree
document.querySelector('#landAnimalNumber').innerText = currentNumberLandAnimals;
document.querySelector('#waterAnimalNumber').innerText = currentNumberWaterAnimals;
document.querySelector('#airAnimalNumber').innerText = currentNumberAirAnimals;

// add animal weight numbers & names to DOM tree
document.querySelector('#maxWeightAnimalName').innerText = currentMaxAnimalWeightName;
document.querySelector('#maxAnimalWeight').innerText = currentMaxAnimalWeight;
document.querySelector('#minWeightAnimalName').innerText = currentMinAnimalWeightName;
document.querySelector('#minAnimalWeight').innerText = currentMinAnimalWeight;

// findulate number of animals based on diet
let carnivoreAnimalNumber = 0;
let herbivoreAnimalNumber = 0;
let omnivoreAnimalNumber = 0;
for (let i = 0; i < currentAnimalList.length; i++) {
  if (currentAnimalList[i].foodType === 'Carnivore') {
    carnivoreAnimalNumber++;
  }
  else if (currentAnimalList[i].foodType === 'Herbivore') {
    herbivoreAnimalNumber++;
  }
  else if (currentAnimalList[i].foodType === 'Omnivore') {
    omnivoreAnimalNumber++;
  }
}

// add animal diet numbers to DOM tree
document.querySelector('#carnivoreAnimalNumber').innerText = carnivoreAnimalNumber;
document.querySelector('#herbivoreAnimalNumber').innerText = herbivoreAnimalNumber;
document.querySelector('#omnivoreAnimalNumber').innerText = omnivoreAnimalNumber;

// listen to animal selection by user
document.querySelector('button').addEventListener('click', () => {
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