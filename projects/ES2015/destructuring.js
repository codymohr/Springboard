//object destructuring 1

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//object destructuring 2

console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//object destructuring 3

//getUserData({firstName: "Alejandro", favoriteColor: "purple"})
// Your name is Alejandro and you like purple

getUserData({firstName: "Melissa"})
// Your name is Melissa and you like green

getUserData({})
// Your name is undefined and you like green

//array destructuring 1

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//array destructuring 2

console.log(raindrops); // "Raindrops on roses"
console.log(whiskers); // "whiskers on kittens"
console.log(aFewOfMyFavoriteThings);
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//array destructuring 3

console.log(numbers) // [10,30,20]

//ES2015 Object Destructuring

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

//ES2015 One-Line Array Swap with Destructuring

[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

// {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})

