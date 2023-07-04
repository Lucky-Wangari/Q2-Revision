class Story {
    constructor(content, author, moral_lessons, age_group, length, title) {
        this.content = content;
        this.author = author;
        this.moral_lessons = moral_lessons;
        this.age_group = age_group;
        this.length = length;
        this.title = title;
    }
}

class StoryTeller {
    constructor(name, language, age_group, title) {
        this.name = name;
        this.language = language;
        this.age_group = age_group;
        this.title = title;
    }
}

class Translator extends StoryTeller {
    constructor(name, language, age_group, title) {
        super(name, language, age_group, title);
    }

    translate_story(story, target_language) {
        console.log(`Translating story into ${target_language}...`);

        console.log("Translated story:");
        console.log(`Content: ${story.content}`);
        console.log(`Author: ${story.author}`);
        console.log(`Moral Lessons: ${story.moral_lessons}`);
        console.log(`Age Group: ${story.age_group}`);
        console.log(`Length: ${story.length}`);
        console.log(`Title: ${story.title}`);
    }
}

let story = new Story(
    "Once upon a time...",
    "Bridget",
    "Always be kind",
    "Children",
    10,
    "The River Between"
);

let storyteller = new StoryTeller(
    "Janey",
    "English",
    "Children",
    "Storyteller"
);

let translator = new Translator(
    "Lucky",
    "French",
    "Children",
    "Translator"
);

translator.translate_story(story, "French");


// **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// The app needs to handle recipes from different African countries, each with its
// unique ingredients, preparation time, cooking method, and nutritional
// information. Consider creating a `Recipe` class, and think about how you might
// create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// methods.

class Recipe {
    constructor(dishName,country, ingredients, cooking_time,cooking_method,nutrional_value){
        this.dishName = dishName;
        this.country = country;
        this.ingredients = ingredients;
        this.cooking_method = cooking_method;
        this.cooking_time = cooking_time;
        this.nutrional_value = nutrional_value;
    }
        displayRecipe() {
            console.log(this.name);
            console.log(this.country);
            console.log("Ingredients:");
            for (let ingredient of this.ingredients) {
                console.log(`- ${ingredient}`);
            }
            console.log(this.preparation_time);
            console.log(this.cooking_method);
            console.log("Nutritional Information:");
            for (let key in this.nutritional_value) {
                console.log(`- ${key}: ${this.nutritional_value[key]}`);
            }
        }
}


class MoroccanRecipe extends Recipe {
    constructor(dishName,country, ingredients, cooking_method,cooking_time,nutrional_value, spicing_level){
    super(dishName,country,ingredients,cooking_method,cooking_time,nutrional_value);
       this.spicing_level = spicing_level
    }

    displayRecipe(){
        super.displayRecipe()
        console.log(`${this.spicing_level}`);
    }
}

class EthiopianRecipe extends Recipe {
    constructor(dishName,country,ingredients,cooking_method,cooking_time,nutrional_value,add_injera){
        super(dishName,country,ingredients,cooking_method,cooking_time,nutrional_value);
        this.add_injera = add_injera
    }
    displayRecipe(){
        super.displayRecipe()
        console.log(`${this.add_injera}`);
    }
}
class NigerianRecipe extends Recipe {
    constructor(dishName,country,ingredients,cooking_method,cooking_time,nutritional_value,yams_fufu){
        super(dishName,country,ingredients,cooking_method,cooking_time,nutritional_value);
        this.yams_fufu = yams_fufu
    }
    displayRecipe(){
        super.displayRecipe()
        console.log(`${this.yams_fufu}`);
    }
}

// Creating recipe for Moroccan food
const morrocan_recipe = new MoroccanRecipe(
   "Biriani",
   "Morocco",
   ["Chicken","Spices", "Sour milk", "chillies" ],
   "stove top",
   "45 minutes",
   {"Calories": 49, "Protein": 40, "carbs": 70},
   "added"
);

const ethiopian_recipe = new EthiopianRecipe(
    "Ciru soup",
    "Ethiopian",
    ["Capsicum","Spices", "Water", "Tomatoes",],
    "bake",
    {"Caloriies": 450, "proteins": 300}
)

//  **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own characteristics and behaviors, such as its diet, typical lifespan, migration
//  patterns, etc. Some species might be predators, others prey. You'll need to
//  create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
//  these classes might relate to each other through inheritance.
class Species {
    constructor(identity, diet, lifeSpan, patterns){
        this.diet = diet
        this.lifeSpan = lifeSpan
        this.patterns = patterns
        this.identity = identity
    }
    displayDetails(){
        console.log(`${this.diet}`);
        console.log(`${this.lifeSpan}`);
        console.log(`${this.patterns}`);
        console.log(`${this.identity}`);
    }  
}

class Predator extends Species{
    constructor(identity,diet,lifeSpan,patterns, hunting){
    super(identity, diet,lifeSpan,patterns)
        this.hunting = hunting
    }
    displayDetails(){
        super.displayDetails()
        console.log(`${this.hunting}`)
    }
    predatorInfo(prey){
       console.log(`${this.identity} hunts for ${prey.identity}`);

       if(this.diet.includes(prey.diet)){
        console.log(`${this.identity}, has hunted a ${this.identity} successfully`)
       }else{
        console.log(`${this.identity}, failed in hunting the ${this.identity}`)
       }
    }
 } 
class Prey extends Species{
    constructor(identity,lifeSpan,patterns,escape,diet){
        super(identity,lifeSpan,patterns,diet)
        this.escape = escape
    }
    displayDetails(){
        super.displayDetails()
        console.log(`${this.escape}`)
    }
    preySurvival(prey,predator){
        if(prey == 'present' && predator == 'present'){
            console.log(`This ${this.identity} is ${this.diet}, its ${this.pattern} involves eating ${this.identity}, it lives for ${this.lifeSpan} years`)
        }else if( prey != 'present' && predator == 'present'){
            console.log(`${this.identity} ${this.patterns} away from normal areas has reduced ${this.identity} age limit by ${this.lifeSpan} years`)
        } else{
          console('No effects being esxperienced in the wild') 
        }
    }
}

const species1 = new Species("Antelope", "Herbivore", 10, "Diurnal");
const species2 = new Species("Cheetah", "Carnivore", 15, "Nocturnal");

const predator1 = new Predator("Crocodile", "Carnivore", 12, "Nocturnal", "Ambush");
const predator2 = new Predator("Lion", "Carnivore", 20, "Nocturnal", "Stalking");

const prey1 = new Prey("Zebra", 8, "Diurnal", "Camouflage", "Herbivore");
const prey2 = new Prey("Antelope", 10, "Nocturnal", "Speed", "Herbivore");


predator1.displayDetails();
predator2.displayDetails();

prey1.displayDetails();
prey2.displayDetails();

species1.displayDetails();
species2.displayDetails();

prey1.preySurvival("present", "present");
prey2.preySurvival("absent", "present");

// African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments, are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or
// stages.

class Artist{
    constructor(musicStyle, instruments){
        this.musicStyle = musicStyle
        this.instruments = instruments
        this.schedules = []
    }
    artistwork(){
        console.log(`${this.musicStyle}`)
        console.log(`${this.instruments}`)
        console.log(`${this.schedules}`)
    } 
};
class Performance extends Artist {
    constructor(musicStyle,instruments,schedules,){
        super(musicStyle, instruments,schedules)
        this.lineup = []
    }
    artistwork(){
        super.artistwork()
        console.log(`${this.lineup}`)
    }
     eventPlanner(event){
     const find = this.schedules.findIndex(schedule => schedule === event)
     if( find != -1){
        const addEvent = this.lineup.splice(index, 1)
        return `${addEvent} has been added to the line up`
     } else{
        return 'No scheduled event found'
     }}    
};
class Stage extends Artist {
    constructor(musicStyle,instruments,schedules, arrangement){
        super(musicStyle, instruments,schedules)
        this.arrangement = arrangement
    }
    artistwork(){
        super.artistwork()
        console.log(`${this.arrangement}`)
    }
    stageStyle() {
            if (this.musicStyle === this.arrangement) {
                return `The music style "${this.musicStyle}" matches the stage arrangement.`;
            } else if (this.arrangement.includes(this.musicStyle)) {
                return `The music style "${this.musicStyle}" is included in the stage arrangement.`;
            } else {
                return `The music style "${this.musicStyle}" does not match the stage arrangement.`;
            }
        }
        
    }

    //Implement a class called Student with attributes for name, age, and grades (a
    //list of integers). Include methods to calculate the average grade, display the
    //student information, and determine if the student has passed (average grade >=
    //60). Create objects for the Student class and demonstrate the usage of these
    //methods.

class Student{
    constructor(name,age,grades){
        this.name = name
        this.age = age
        this.grades = []
    }
    displayStudentDetails(){
        console.log(`${this.name}`);
        console.log(`${this.age}`);
        console.log(`${this.grades}`);
    }
}

// Create a FlightBooking class that represents a flight booking system. Implement
// methods to search for available flights based on destination and date, reserve
// seats for customers, manage passenger information, and generate booking
// confirmations.

class FlightBooking {
    constructor() {
      this.flights = [];
    }
  
    addFlight(flight) {
      this.flights.push(flight);
    }
  
    searchFlights(destination, date) {
      const availableFlights = [];
      for (const flight of this.flights) {
        if (
          flight.destination === destination &&
          flight.date === date &&
          flight.availableSeats > 0
        ) {
          availableFlights.push(flight);
        }
      }
      return availableFlights;
    }
  
    reserveSeat(flight, passengerName) {
      if (flight.availableSeats > 0) {
        flight.availableSeats -= 1;
        flight.passengers.push(passengerName);
        return true;
      }
      return false;
    }
  
    passengerInfo(flight) {
      return flight.passengers;
    }
  
    bookingConfirmation(flight) {
        let passengerList = '';
        flight.passengers.forEach((passenger, index) => {
          passengerList += `${index + 1}. ${passenger}`;
        });
      
        const confirmation = `Confirmation for Flight ${flight.flightNumber}:
      Destination: ${flight.destination}
      Date: ${flight.date}
      Passenger List:
      ${passengerList}`;
        
        return confirmation;
      }
      
  }
  
  class Flight {
    constructor(flightNumber, destination, date, availableSeats) {
      this.flightNumber = flightNumber;
      this.destination = destination;
      this.date = date;
      this.availableSeats = availableSeats;
      this.passengers = [];
    }
  }
  
  
  const bookingSystem = new FlightBooking();
  
  
  const flight1 = new Flight("FLY540", "Mombasa", "2023-07-05", 500);
  const flight2 = new Flight("BOENG560", "London", "2023-07-05", 220);
  bookingSystem.addFlight(flight1);
  bookingSystem.addFlight(flight2);
  
  
  const availableFlights = bookingSystem.searchFlights("Mombasa", "2023-07-05");
  for (const flight of availableFlights) {
    console.log(`${flight.flightNumber},${flight.availableSeats}`);
  }
  
  
  const flightToReserve = availableFlights[0];
  const passengerName = "Brigit Amakove";
  if (bookingSystem.reserveSeat(flightToReserve, passengerName)) {
    console.log(`Seat reserved for ${passengerName}`);
  } else {
    console.log("No seats available");
  }
  

  const passengersInfo = bookingSystem.passengerInfo(flightToReserve);
  console.log(`Passenger information for ${flightToReserve.flightNumber}: ${passengersInfo}`);
  
  
  const confirmation = bookingSystem.bookingConfirmation(flightToReserve);
  console.log(confirmation);
  
