var myPetsArray = [
    { animalType: "Dog",
    name: "pujdo",
},
{
animalType: "Cat",
name: "Maca",
},
{
animalType: "Bird",
name: "Tweety",
},
];

function myPetsFunction(pets) {
return pets[1]["name"];
}
console.log(myPetsFunction(myPetsArray));

module.exports = myPetsFunction;
module.exports = myPetsArray;


