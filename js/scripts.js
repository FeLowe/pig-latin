$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();

    var userInput = $("#startVowel").val();
    var vowels = ["a", "e", "i", "o", "u"];
    var emptyArray = [];

debugger
    for(index1 = 0; index1 <userInput.length; index1++){
      for(index2 = 0; index2 <vowels.length; index2++){
        if(userInput[index1]===vowels[index2]) {
          emptyArray.push(userInput + "ay");


        // var newSlice = userInput.slice(0,1);
        // var newSlice2 = userInput.slice(1,2);

        console.log(userInput);
          alert(emptyArray);
        }
      }
    }
  // for (var index = 0; index < userInput.length; index += 1) {

    // if (userInput.charAt(0) === vowel) {
    //   alert(userInput + "ay");
    // } else
    //   (vowels.forEach(function(vowel))







  // console.log(userInput.charAt(0));
  // if (userInput.charAt(0) === "a" || "e" || "i" || "o" || "u") {
  //   emptyArray.push(userInput + "ay");
  //   console.log(emptyArray);
  // alert(emptyArray);
  // }
  // else if
    // (userInput.indexOf(0) != "a" && "e" && "i" && "o" && "u") {
    // alert(emptyArray);
  // }
  });
});
