// I'm starting by defining the hex array
const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]
// console.log(hexadecimalNumberSystem.length)

// then bring in all the dynamic objects/elements & targets (remeber targets are object which events will occur on)
let firstColourBox = document.getElementById(`first-colour-box`)
let secondColourBox = document.getElementById(`second-colour-box`)
let thirdColourBox = document.getElementById(`third-colour-box`)
let fourthColourBox = document.getElementById(`fourth-colour-box`)
let firstHexCode = document.getElementById(`first_hex_code`)
let secondHexCode = document.getElementById(`second_hex_code`)
let thirdHexCode = document.getElementById(`third_hex_code`)
let fourthHexCode = document.getElementById(`fourth_hex_code`)
let nameOfColour = document.getElementById(`colour-name`)
let generateButton = document.getElementById(`generate-button`)
let resetButton = document.getElementById(`reset-button`)
let firstColouredLabel = document.getElementById(`first_hex_code_container`)
let secondColouredLabel = document.getElementById(`second_hex_code_container`)
let thirdColouredLabel = document.getElementById(`third_hex_code_container`)
let fourthColouredLabel = document.getElementById(`fourth_hex_code_container`)
let colours = document.getElementById(`colours`)

// generates random numbers
function generateRandomNumbers(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}

// determines how bright the box color is
function getBrightness(hexColor) {    
    hexColor = hexColor.replace("#", ""); // Remove the # symbol
    
    // Convert to RGB
    let r = parseInt(hexColor.substring(0, 2), 16);
    let g = parseInt(hexColor.substring(2, 4), 16);
    let b = parseInt(hexColor.substring(4, 6), 16);

    // Calculate brightness using the luminance formula
    let brightness = (0.299 * r + 0.587 * g + 0.114 * b);

    // console.log(`Brightness of ${hex}:`, brightness); // Debugging
    return brightness;
}

// changes text color based on brightness
function adjustTextAndBorderColor(textElement, containerElement, hex) {
    let brightness = getBrightness(hex);
    let textAndBorderColor = brightness < 128 ? `#F5F5F5` : `#333333`; // Dark background -> white text, Light background -> black text

    // Apply text color
    textElement.style.color = textAndBorderColor;

    // Apply border color
    containerElement.style.borderColor = textAndBorderColor
}

// changes the box colours randomly
// with button
generateButton.addEventListener(`click`, ()=>{
    let hexCodeForFirstBox = `#`
    for(let w=0; w<6; w++){
        hexCodeForFirstBox += hexadecimalNumberSystem[generateRandomNumbers()]
    }
    firstColourBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox
    firstColouredLabel.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.style.backgroundColor = hexCodeForFirstBox

    firstColouredLabel.style.border = `1px solid black`;

    // Apply the text color adjustment
    adjustTextAndBorderColor(firstHexCode, firstColouredLabel, hexCodeForFirstBox);
})

generateButton.addEventListener(`click`, ()=>{
    let hexCodeForSecondBox = `#`
    for(let x=0; x<6; x++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumbers()]
    }
    secondColourBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox
    secondColouredLabel.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.style.backgroundColor = hexCodeForSecondBox

    secondColouredLabel.style.border = `1px solid black`;

    // Apply the text color adjustment
    adjustTextAndBorderColor(secondHexCode, secondColouredLabel, hexCodeForSecondBox);
})

generateButton.addEventListener(`click`, ()=>{
    let hexCodeForThirdBox = `#`
    for(let y=0; y<6; y++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumbers()]
    }
    thirdColourBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox
    thirdColouredLabel.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.style.backgroundColor = hexCodeForThirdBox

    thirdColouredLabel.style.border = `1px solid black`;

    // Apply the text color adjustment
    adjustTextAndBorderColor(thirdHexCode, thirdColouredLabel, hexCodeForThirdBox);
})

generateButton.addEventListener(`click`, ()=>{
    let hexCodeForFourthBox = `#`
    for(let z=0; z<6; z++){
        hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumbers()]
    }
    fourthColourBox.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.textContent = hexCodeForFourthBox
    fourthColouredLabel.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.style.backgroundColor = hexCodeForFourthBox

    fourthColouredLabel.style.border = `1px solid black`;

    // Apply the text color adjustment
    adjustTextAndBorderColor(fourthHexCode, fourthColouredLabel, hexCodeForFourthBox);
})

// with spacebar
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        event.preventDefault(); // Prevents scrolling when spacebar is pressed
        generateButton.click(); 
    }
});

// Reset Button
resetButton.addEventListener(`click`, ()=>{    
    let defaultColours = [`#F0D9FF`, `#D6A3FB`, `#B07AE6`, `#7D42C8`]
    let colouredBoxes = document.querySelectorAll(`.colour-box`)
    let hexCodes = document.querySelectorAll(".hex-code h5");
    let labelledBoxes = document.querySelectorAll(`.hex-code`)
    
    colouredBoxes.forEach((box,index)=>{
        box.style.backgroundColor = defaultColours[index]
        hexCodes[index].textContent = defaultColours[index]
        hexCodes[index].style.color = `#3B235A`
        hexCodes[index].style.backgroundColor = `#9B6ACD`
        labelledBoxes[index].style.backgroundColor = `#9B6ACD`
        labelledBoxes[index].style.borderColor = `#8458B3`
    })

    // change the colour when clicked
    resetButton.style.backgroundColor = `#4B1E79`; 
    resetButton.style.color = `#f9f9f9`; 
})

// Hover Effect
function addHoverEffect(button) {
    button.addEventListener(`mouseover`, () => {
        button.style.backgroundColor = `#5E2CA5`;
        button.style.color = `#f9f9f9`;;
        button.style.transform = `scale(1.05)`; // slightly increases size
    });

    button.addEventListener(`mouseout`, () => {
        button.style.backgroundColor = ``; // Resets to original
        button.style.color = ``;
        button.style.transform = ``;
    });
}
addHoverEffect(generateButton);
addHoverEffect(resetButton);

// change button colours when clicked
generateButton.addEventListener('click', ()=>{
    generateButton.style.backgroundColor = `#4B1E79`; 
    generateButton.style.color = `#f9f9f9`; 
});

function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
