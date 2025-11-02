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

// animal attributes distribution

// calculate number of animals based on element/habitat
let landAnimalNumber = 0;
let waterAnimalNumber = 0;
let airAnimalNumber = 0;
for (let i = 0; i < animalList.length; i++) {
  if (animalList[i].element === 'Land') {
    landAnimalNumber++;
  }
  else if (animalList[i].element === 'Water') {
    waterAnimalNumber++;
  }
  else if (animalList[i].element === 'Air') {
    airAnimalNumber++;
  }
}

// add animal habitat/element numbers to DOM tree
document.querySelector('#landAnimalNumber').innerText = landAnimalNumber;
document.querySelector('#waterAnimalNumber').innerText = waterAnimalNumber;
document.querySelector('#airAnimalNumber').innerText = airAnimalNumber;

// find highest & lowest animal weight, and corresponding animal name
let maxAnimalWeight = (animalList[0].averageWeightKilogram + animalList[1].averageWeightKilogram + 0.1) / 2;
let maxWeightAnimalName = '';
let minAnimalWeight = (animalList[0].averageWeightKilogram + animalList[1].averageWeightKilogram + 0.1) / 2;
let minWeightAnimalName = '';

// loop over animalList, compare weight numbers & find min/max + name
for (let i = 0; i < animalList.length; i++) {
  if (animalList[i].averageWeightKilogram > maxAnimalWeight) {
    maxAnimalWeight = animalList[i].averageWeightKilogram;
    maxWeightAnimalName = animalList[i].name;
  }
  else if (animalList[i].averageWeightKilogram < minAnimalWeight) {
  minAnimalWeight = animalList[i].averageWeightKilogram;
  minWeightAnimalName = animalList[i].name;
  }
}

// add animal weight numbers & names to DOM tree
document.querySelector('#maxWeightAnimalName').innerText = maxWeightAnimalName;
document.querySelector('#maxAnimalWeight').innerText = maxAnimalWeight;
document.querySelector('#minWeightAnimalName').innerText = minWeightAnimalName;
document.querySelector('#minAnimalWeight').innerText = minAnimalWeight;

// calculate number of animals based on diet
let carnivoreAnimalNumber = 0;
let herbivoreAnimalNumber = 0;
let omnivoreAnimalNumber = 0;
for (let i = 0; i < animalList.length; i++) {
  if (animalList[i].foodType === 'Carnivore') {
    carnivoreAnimalNumber++;
  }
  else if (animalList[i].foodType === 'Herbivore') {
    herbivoreAnimalNumber++;
  }
  else if (animalList[i].foodType === 'Omnivore') {
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
  // find animal element/habitat in array "animalList"
  currentElement = animalList.find(a => a.name === currentAnimal)?.element ?? null;
  // add animal element/habitat to DOM tree
  document.querySelector('#element').innerText = currentElement;
  // find animal weight in array "animalList"
  currentWeight = animalList.find(a => a.name === currentAnimal)?.averageWeightKilogram ?? null;
  // add animal weight to DOM tree
  document.querySelector('#weight').innerText = currentWeight;
  // find animal food in array "animalList"
  currentFood = animalList.find(a => a.name === currentAnimal)?.foodType ?? null;
  // add animal food to DOM tree
  document.querySelector('#food').innerText = currentFood;
});