const myButton = document.getElementById('btn');
myButton.onclick = function () {
    const name = prompt('Enter your full name');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142; 
let name = 'Japhlet Ama Takyiwaa';
let age = 9;
let present = false;
console.log(name);


// Objects
const car = {
    numberPlate: 'GA-095-23',
    model: 'Lexus',
    color: 'red',
    weight: 50,
    weightUnit: 'kg',
    owner:{
        name: 'Japhlet Ama Takyiwaa',
        driver: {
            name: 'Fiifi'
        }
    }
}

console.log(car.numberPlate);
console.log(car.owner.driver.name);
console.log(car);

car = {
    model:'cheverolet'
}
car.owner.driver.name = 'Elizabeth'
console.log(car.owner.driver.name);


// js practice continuation
const tweet1 = {
    text: 'I am learning js today',
    likes: 5,
    shares: 2,
    retweets: 1
  }
  
  const tweet2 = {
    text: 'I am learning arrays today',
    likes: 6,
    shares: 1,
    retweets: 0
  }
  
  const tweets = [];
  tweets.push(tweet1);
  tweets.push(tweet2);
  tweets.push(tweet2);
  tweets.length;
  tweets;
  
  // dates
  const today = new Date();
  today.toString();
  today.toLocaleDateString();
  today.getHours();
  
  // If/else 
  if (today.getHours()  >= 16) {
    console.log('Class has ended');
  } else {
    console.log('Class is in session');
  }
  
  
  //for loop
  for (let i  = 0; i <= 9; i+=2) {
    console.log('Notify my friends!', i);
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  