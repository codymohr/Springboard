//Quick Question #1

{1,2,3,4}

//Quick Question #2

"ref"

//Quick Questions #3

0: {Array(3) => true}
1: {Array(3) => false}

//hasDuplicate

const hasDuplicate = arr => new Set(arr).size !== arr.length

//vowelCount

function isVowel(letter){
    return "aeiou".includes(letter);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let letter of str){
      let lowerCaseLetter = letter.toLowerCase()
      if(isVowel(lowerCaseLetter)){
        if(vowelMap.has(lowerCaseLetter)){
          vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);
        } else {
          vowelMap.set(lowerCaseLetter, 1);
        }
      }
    }
    return vowelMap;
  }
