export default function shuffleArray(array) {
  console.log(array);
  const shuffledCards = [...array]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card }));
  return shuffledCards;
}
