//same keys and values

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

//computed property names

    let favoriteNumber = 42;

    const instructor = {
        firstName: "Colt",
        [favoriteNumber]: "That is my favorite!"
    }

//object methods

    const instructor = {
        firstName: "Colt",
        sayHi(){
          return "Hi!";
        },
        sayBye(){
          return this.firstName + " says bye!";
        }
      }

//createAnimal function

const d = createAnimal("cat", "meow", "mrowwww")
// {species: "cat", meow: ƒ}
d.meow()  //"mrowwww"

const s = createAnimal("cow", "moo", "MoooOOOOOoooo")
// {species: "cow", moo: ƒ}
s.moo() //"MoooOOOOOoooo"

function createAnimal(species, verb, noise){
  return {
    species,
    [verb](){
      return noise;
    }
  }
}