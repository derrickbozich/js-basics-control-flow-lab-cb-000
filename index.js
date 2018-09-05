// Write your code in this file!

function scuberGreetingForFeet(value){
  if (value <= 400) {
    return "This one is on me!";
  } else if (value > 2000 && value < 2500) {
    return "I will gladly take your thirty bucks.";
  } else  {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  if (tip > 5) {
    return "Thank you so much.";
  } else if (tip <= 5 && tip >= 2) {
    return  "Thank you.";
  } else  {
    return "Bye.";
  }

}
