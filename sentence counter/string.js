// function submit() {
//   // let text = "this ithe most important thing in the world";
//   let text = document.getElementById("add").value.trim();
//   if (!text || !isNaN(text)) {
//     alert("Please enter a sentence");
//     return;
//   }

//   let count = 0;
//   const vowels = "aeiouAEIOU";

//   for (let char of text) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   // console.log(count);

//   document.getElementById("display").innerHTML = `Number of vowels: ${count}`;
//   document.getElementById("add").value = "";
// }
// // submit();

//diferent method convert to array
function submit() {
  let text = document.getElementById("add").value.trim();
  if (!text || !isNaN(text)) {
    alert("Please enter a sentence");
    return;
  }

  const vowels = "aeiouAEIOU";
  let count = 0;

  // Convert the sentence to an array of characters
  let textArray = Array.from(text);

  // Use the for...of loop to iterate over each character in the textArray
  for (let char of textArray) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  document.getElementById("display").innerHTML = `"${text}" has ${count} vowels`;
  document.getElementById("add").value = "";
}


//different map method

// function submit() {
  // let text = "this ithe most important thing in the world";
//   let text = document.getElementById("add").value.trim();
//   if (text === "" || text === null || text === undefined || text.length === 0) {
//     alert("Please enter a sentence");
//     return;
//   }

//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   // Using map method with a regular function to count vowels
//   Array.from(text).map(function(char) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   });

//   document.getElementById("display").innerHTML = `Number of vowels: ${count}`;
//   document.getElementById("add").value = "";
// }
// // submit();
