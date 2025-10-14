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
    'element': "Water",
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

document.querySelector('button').addEventListener('click', () => {
  let currentAnimal = document.querySelector('#AnimalName').value;
  document.querySelector('#animalName_key').innerText = currentAnimal;
  currentElement = animalList.find(a => a.name === currentAnimal)?.element ?? null;
  document.querySelector('#element').innerText = currentElement;
  currentWeight = animalList.find(a => a.name === currentAnimal)?.averageWeightKilogram ?? null;
  document.querySelector('#weight').innerText = currentWeight;
  currentFood = animalList.find(a => a.name === currentAnimal)?.foodType ?? null;
  document.querySelector('#food').innerText = currentFood;
});