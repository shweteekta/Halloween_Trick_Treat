// Define costume and candy
var costumes = ["ghost 👻", "skeleton 💀", "cat 🐈", "witch 🧙", "vampire 🧛", "bat 🦇", "spider 🕷️", "zombie 🧟", "inflatable dinosaur 🦖", "creepy clown 🤡"]
var level = 1
var level_index = 0
var multiplier = 2
var cost = 5
var candy = 1
// Define funciton for reloading the status
function reloadStatus() {
 candy = Math.round(candy)
  document.getElementById("status").innerHTML = "<p> 🍬x " + String(candy) + "</p><p> " + costumes[level_index] + " (level " + String(level) + ")</p>"
}
// define random function that is used in trick or treating
function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}
// Costume store - improve graphics later
function costumeStore() {
  document.getElementById("mainPage").style.display = "none"
  document.getElementById("costumeStore").innerHTML = "<p> Next up is a " + costumes[level_index + 1] + " costume with a candy multpilier of " + String(level ** 2) + ". </p>"
  if (costumes[level_index + 1] == "creepy clown 🤡") {
    document.getElementById("costumeStore").innerHTML += "<p> BONUS: This costume will scare the vampires so much that they won't attack you anymore! </p>"
  }
  else if (costumes[level_index + 1] == "inflatable dinosaur 🦖") {
    document.getElementById("costumeStore").innerHTML += "<p> BONUS: This costume will allow you to hide half of your candy under your costume when the vampires come. You will only lose half of your candy! </p>"
  }
  document.getElementById("costumeStore").innerHTML += " <p> You have " + String(candy) + " out of the " + String(cost * 2) + " candies to buy this costume. Would you like to proceed? </p> <button id= \"buyCostume\"> Buy this costume </button> <button id=\"cancelBuyCostume\"> Cancel </button>"
document.getElementById("buyCostume").addEventListener("click", function() {
    if (candy >= cost * 2) {
      alert("Transaction complete!")
      level += 1
      level_index += 1
      multiplier = level ** 2
      cost *= 2
      candy -= cost
      reloadStatus()
      if (level == 10) {
        alert("Wow, level 10! Your clown costume is so creepy that even vampires are afraid! You can now just trick or treat forever! ")
      }
      else if (level == 9) {
        alert("You're now able to hide half of your candy under your costume, so you'll only lose half each time you come to a vampire house!")
      }
      document.getElementById("mainPage").style.display = "block"
      document.getElementById("costumeStore").innerHTML = ""
    }
    else {
      alert("You don't have enough candy to complete this transaction.")
      document.getElementById("mainPage").style.display = "block"
      document.getElementById("costumeStore").innerHTML = ""
    }
  })
  document.getElementById("cancelBuyCostume").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "block"
    document.getElementById("costumeStore").innerHTML = ""
  })
};
// Trick or treating - improve graphics later
function trickOrTreat() {
  var rand_num = randint(1, 100)
  if (rand_num < 85 || level >= 10) {
    var house_candies = randint(0, 5)
    house_candies *= multiplier
    if (house_candies == 0) {
      alert("This house gives you a toothbrush  ")
    }
    else {
    alert("You get " + String(house_candies) + " 🍬 candies from this house! ")
    candy += house_candies
    }
  }
  else {
    alert("🧛 VAMPIRES! This house has vampires inside of it! ")
    if (level >= 9) {
      alert("You hide half of your candy in your costume, but the rest is lost. ")
      candy /= 2
    } 
    else {
    alert("Thankfully, all they want is your candy. ALL of it. You're back to 1. Sorry :(")
    candy = 1
    }
  }
  reloadStatus()
}
// Add event listeners for the two beginning buttons
document.getElementById("costumeStoreButton").addEventListener("click", costumeStore)
document.getElementById("trickOrTreat").addEventListener("click", trickOrTreat)
reloadStatus();



   