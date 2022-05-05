export default function shuffleArray(array) {
  console.log(array);
  const shuffledCards = [...array]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card }));
  console.log(shuffledCards);
  return shuffledCards;
}

// export default function shuffleArray(array) {
//   for (var i = array.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   console.log(array);
//   return array;
// }

// export default function shuffleArray(array) {
//   let newArray = array;
//   for (var i = newArray.length - 1; i > 0; i--) {
//     var j = Math.floor(Math.random() * (i + 1));
//     var temp = newArray[i];
//     newArray[i] = newArray[j];
//     newArray[j] = temp;
//   }
//   console.log(newArray);
//   return newArray;
// }
