const ride = 3000;
const tip = "okay";
let comment;

function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return 'This one is on me!';
  } else if (ride > 2500) {
    return 'No can do.';
  } else if (ride > 2000) {
    return 'I will gladly take your thirty bucks.';
  }
}


function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      comment = "Thank you so much.";
      break;
    case 'not as generous':
      comment = "Thank you.";
      break;
    default:
      comment = "Bye.";
      break;
  }
  return comment; // Return the comment
}