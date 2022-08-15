const computerChoiceDisplay = document.getElementById(`computer-choice`);
const userChoiceDisplay = document.getElementById(`user-choice`);
const resultDisplay = document.getElementById(`rewsult`);
const possibleChoices = document.querySelectorAll(`button`);

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener(`click`, (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // possibleChoices.length
    console.log(randomNumber)

}


