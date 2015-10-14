
var welcome;
welcome = confirm;
confirm("Are you ready to enter the Aegean?");
console.log("Are you ready to enter the Aegean?", welcome);

var areyousure;
areyousure = alert;
alert("Are you sure?");
console.log("Are you sure?", areyousure);

var text;
var sunormoon;
var sunormoon = prompt("Do you align with the sun or the moon?");
console.log("Do you align with the Sun or the Moon?", sunormoon);

if(sunormoon === "Sun, sun"){
  console.log('You are not a real mermaid. Nice try'); alert(text);
}
else if(sunormoon === "Moon, moon"){
   console.log('Welcome Mermaid Friend!');

};

var text;
var companions;
var companions = prompt("Who will be your companion? Starfish, Octopus, or Jellyfish?");
console.log("Who will be your companion? Starfish, Octopus, or Jellyfish?", companions);

if(companions === "Starfish");{
  console.log('You are headed to the coast of California.');

}
if(companions === "Octopus");{
  console.log('You are headed to the Indian Ocean.');

}
if(companions === "Jellyfish");{
   console.log('You are headed to the North American Atlantic Coast.');
 }
 // else (companions === "default");{
 //     console.log('Mermaids need friends. Choose one!');
 // }
