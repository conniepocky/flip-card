var text = document.getElementById("text");
var wishes = ["Have an amazing day!", "May all your dreams come true!", "You are the best!", "Hope you have a great day!", "Enjoy your special day!", "The day is all yours - have fun!", "Wishing you the biggest slice of happy today.", "Have the best birthday ever!"]

function changeText() {
    
    text.innerHTML = wishes[[Math.floor(Math.random()*wishes.length)]]
}