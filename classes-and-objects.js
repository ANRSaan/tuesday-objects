let person = {
    firstName: 'Brian',
    lastName: 'Williams',
    'age': 40

}

// console.log(person.age)
// console.log(person["lastName"])

//destructuring

let meal = {
    appetizer: 'chips and salsa',
    entree: 'steak and bean burrito',
    dessert: 'fried icecream',
    drink: "water, bitches"
}

// let dessert = meal.dessert

let {dessert, entree, appetizer, drink: bestDrinkEver} = meal

// console.log(dessert)

for (food in meal){
    // console.log(`For my ${food} I had ${meal[food]}.`)
}

// adding, changing, and deleting properties from objects

person.occupation = "Fuckin' bum"
person.age = 41 //or person.age++

delete person.firstName


//classes and extending classes

class Pet {
    constructor(name, age){
        this.flarg = name
        this.age = age
    }
}

let lassie = new Pet("Lassie", 7)

// console.log(lassie.flarg)

class Dog extends Pet{
    constructor(name, age, breed){
        super (name, age)

        this.breed = breed
    }

    bark(){
        console.log(`${this.flarg} says: bork bork`)
    }
}

let nike = new Dog('Nike', 7, "Several doggos")

nike.bark()

class Cat extends Pet{
    constructor(name, age, color){
        super (name, age)
        this.color = color,
        this.temperment = 'mean'
    }

    beNice(){
        this.temperment = 'nice'
        console.log(`${this.flarg} is now a nice cat`)
    }
}

let leshy = new Cat('Leshy', 14, 'tuxedo')

console.log(leshy.temperment)
leshy.beNice()
console.log(leshy.temperment)

/* ***INPORTANT***
Naming your attribute something other than the variable you're calling in reference to 
makes things FUCKING COMFUSING in the future
*/