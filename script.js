

let tempFahr = prompt("What is the farhenheit, today?");
let eventType = prompt("Is the event formal, semi-formal, or casual?");

let result = tempFahr +eventType;//no clue what to do with this variable...

//This is were the user will insert the data.
    
let tempFahrCloth=[ "a coat", "a jacket", "no jacket" ]
let eventTypeCloth=[ "polo", " a suit", "t-shirt" ]

//FORMAL
if (tempFahr < 54 && eventType == "formal") {
  alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[0] +" & "  +eventTypeCloth[1] +".");

} else if ( 54 <  tempFahr && tempFahr < 70 && eventType =="formal" ) {
  alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[1] +" & "  +eventTypeCloth[1] +".");

} else if (70 <= tempFahr && eventType =="formal" ){
    alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[2] +" & "  +eventTypeCloth[1] +".");
} else 


//SEMI-FORMAL
if (tempFahr < 54 && eventType == "semi-formal") {
  alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[0] +" & "  +eventTypeCloth[0] +".");

} else if ( 54 <  tempFahr && tempFahr < 70 && eventType =="semi-formal" ) {
  alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[1] +" & "  +eventTypeCloth[0] +".");

} else if (70 <= tempFahr && eventType =="semi-formal"){
    alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[2] +" & "  +eventTypeCloth[0] +".");
} else 


//CASUAL
if (tempFahr < 54 && eventType == "casual") {
  alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[0] +" & "  +eventTypeCloth[2] +".");

} else if ( 54 <  tempFahr && tempFahr < 70 && eventType =="casual" ) {
  alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[1] +" & "  +eventTypeCloth[2] +".");

} else if (70 <= tempFahr && eventType =="casual"){
    alert("Since it is " +tempFahr +" degrees and you are going to a " +eventType +" event, you should wear " +tempFahrCloth[2] +" & "  +eventTypeCloth[2] +".");
} else {
    alert("error")
}

console.log(result)// Still don't know what this is for...


//The conditional that reacts to the data inserted by the user.