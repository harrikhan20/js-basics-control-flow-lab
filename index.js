const { expect } = require("chai");


function scuberGreetingForFeet(Feet){
  // Write your code here!
//const feet = 399;

 if (Feet <= 400) {
   return ('This one is on me!');
  } else if (Feet > 2000 && Feet <= 2500) { 
   return ('I will gladly take your thirty bucks.');
  } else if (Feet > 2500 ) {
   return ('No can do.');
  }
}

function ternaryCheckCity(Feet){
  // Write your code here!
  
 if (Feet === 'NYC') {
  return ('Ok, sounds good.');
 } else if (Feet !== 'NYC'){ 
  return ('No go.');
 } 

}

function switchOnCharmFromTip(Feet){
  // Write your code here!
   if(Feet === 'generous'){ 
    return ('Thank you so much.');
   } 
   else if (Feet !== 'generous' && Feet !== 'thanks for everything'){
     return ('Thank you.')
   }
   
   else if (Feet === 'thanks for everything') {
     return('Bye.')
   }
   
}

//&& Feet <= 2500