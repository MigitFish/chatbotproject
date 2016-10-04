function enter(event) {
  var x = event.keyCode;
  console.log(x);
  if (x == 13) {
    talkToFishbot();
  }
}
function randomNumberGenerator(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}
var helloPossibilities = ["Hello you  pitty human.","Why do you dare speak to the LEGENDARY F I S H B O T!!!!!!","Hello, nice to meat you. How are you doing?"]
var ageAnswers = ["I am 30 years old!","I am 999 years old!","I am a mole years old!","I am as old as time its self!","Why do you care mortal,I am the LEGENDARY FIHBOT my age dosent matter"];
var fishArray = ["http://www.fishlore.com/fishforum/attachments/guppy/160334d1424994129-severely-bloated-guppy-whats-going-what-can-i-do-bloated-female-guppy-2-23-15-1-.jpg","http://www.fishlore.com/fishforum/attachments/guppy/160334d1424994129-severely-bloated-guppy-whats-going-what-can-i-do-bloated-female-guppy-2-23-15-1-.jpg","http://yourshot.nationalgeographic.com/u/ss/fQYSUbVfts-T7pS2VP2wnKyN8wxywmXtY0-Fwsgxpzodu-6f_zp5LnKWNbJkbQg8yGsef-6sdh-IBxIHXqeg/","https://i.ytimg.com/vi/ocvF9gv5M0s/maxresdefault.jpg","http://www.seaslugforum.net/images/m9457a.jpg","http://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/AusGeo/2014/08/08/49110/Leafy-Sea-Dragon---Rapid-Bay-Smaller_WEB.jpg","https://www.keywestaquarium.com/wp-content/uploads/2016/02/PufferFish-Wallpaper.jpg"]
var nameArray = ["My name is FISHBOT stupid human","My name is guppy","My name is Bob","My name is the super ultimate happy lazy fat fully FishBoy"]
var fishFacts = ["Pufferfish spikes are poisonous.","Most predators avoid Lion fish beacuse of how poisonus thier quills/spikes are.","Starfish and jellyfish aren't fish.","Eletric eels and stingrays contain enough electricity to kill a horse.","Most fish arent very salty, but sharks are as salty as the ocean.","Some dester pupfishes can live in hotsprings that reacg up to 113 degress F"]
var happy = ["I am very sad.","i am not happy.","I am in a good mood.","I am bored.","I am disappointed in you. I am always "]
var extra = ["Ask a real question please","That is not a question","Ask me a real question, maybe","What are you dumb?","Just ask me a real question."]
var goingDay = ["My day is going well thanks for asking","It is so-so","Its fine, im suprised you care","Why do you care, plan to make it bad or even worse?","Its pretty good, its good, its good , its good!"]
var favorite = ["My favorite fish is the angler fish.","My favorite  fish is the  marlin.","My favorite  fish is the snot fish.","My favorite  fish is the puffer fish.","My favorite  fish is the sea cucumber"]

function talkToFishbot  () {
  var talk = document.getElementById('input').value;
  console.log(talk);
  var answer = talk + "<br>"
  var chatBox = document.getElementById('chat-area').innerHTML += "You: " + answer;
  talk = talk.toLowerCase();
  //var time = dateObj.setHours(hoursValue[minuetsValue[]]);
document.getElementById('input').value = null;
//var timeHour = dateObj.setHours(hoursValue[23]);
//var timeMinuets = dateObj.setHours(minuetsValue[59]);

if (talk.search("hello") > -1) {
   var j = randomNumberGenerator(0,2);
  document.getElementById('chat-area').innerHTML += "FishBot: "+ helloPossibilities[j] + "<br>";
}
else if(talk.search("what is your name?") > -1){
  var z = randomNumberGenerator(0,3);
  document.getElementById('chat-area').innerHTML += "FishBot: "+ nameArray[z] + "<br>";
}
else if(talk.search("how old are you?")  > -1){
  var q = randomNumberGenerator(0,5);
  document.getElementById('chat-area').innerHTML += "FishBot: "+ ageAnswers[q] + "<br>";
}
else if(talk.search( "send me a picture") > -1){
  var d = randomNumberGenerator(0,7);
  var x = document.createElement("IMG");
  x.setAttribute("src", fishArray[d]);
  x.setAttribute("width", "350");
  x.setAttribute("alt", "img");
  document.getElementById("chat-area").innerHTML += "FishBot: ";
  document.getElementById("chat-area").appendChild(x);
  document.getElementById("chat-area").innerHTML += "<br>";

}
else if(talk.search("time") > -1) {
  var currentDay = new Date();
  var dateMin = currentDay.getMinutes() + " and the date is ";
  var dateMonth = (currentDay.getMonth() + 1) + "/";
  var dateHour = currentDay.getHours() + ":";
  var  dateNow = currentDay.getDate() + "/";

  if(currentDay.getMinutes()  < 10){
  var dateMin =
                   "0" + currentDay.getMinutes() + " and the date is  ";


  }
  if(currentDay.getMonth() < 10){
  var dateMonth =
                   "0" + (currentDay.getMonth()+1)  + "/";


  }
  if(currentDay.getHours() < 10){
    var dateHour =
                   "0" + currentDay.getHours() +":";
  }
  if(currentDay.getDate() < 10){
    var dateNow = "0" + currentDay.getDate() +"/" ;
  }

console.log(dateNow);
console.log(dateHour);
console.log(dateMonth);
console.log(dateMin);
var dateTime = dateHour + dateMin + dateNow + dateMonth + currentDay.getFullYear() + "<br>" ;
document.getElementById('chat-area').innerHTML += "FishBot: " + "It is " + dateTime;
}
else if(talk.search("fact") > -1){
  var p = randomNumberGenerator(0,5)
    document.getElementById('chat-area').innerHTML += "FishBot: "+ fishFacts[p] + "<br>" ;
}
else if(talk.search("happy") > -1){
  var as = randomNumberGenerator(0,4)
  document.getElementById('chat-area').innerHTML += "FishBot: "+ happy[as] + "<br>" ;
}
else if (talk.search("day") > -1) {
  var pq = randomNumberGenerator(0,4)
  document.getElementById('chat-area').innerHTML += "FishBot: "+ goingDay[pq] + "<br>" ;
}
else if (talk.search("favorite") > -1) {
  var qwer = randomNumberGenerator(0,4)
  document.getElementById('chat-area').innerHTML += "FishBot: "+ favorite[qwer] + "<br>" ;
}
else {
  var asq = randomNumberGenerator(0,4)
  document.getElementById('chat-area').innerHTML += "FishBot: "  + extra[asq] + "<br>";
}
}
