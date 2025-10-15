let animalList = [];

animalList = [
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

// animal weight distribution

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
    waterAnimalNumber++;
  }
}

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