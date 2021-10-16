const text = document.getElementById("text");
const wordCount = document.getElementById("count");
const characterCount = document.getElementById("character");
const longCharacter = document.getElementById("longCharacter");
let countCharacter = 0;
let textValue = [];


text.addEventListener("input", countCheck)

function countCheck() {
     textValue = []
    textValue.push(text.value);
    let stringJoin = textValue.join(" ");
    let stringArray =stringJoin.split(" ");
    let character = stringJoin;
    let count = 0;
    for(let i = 0; i < stringArray.length; i++) {
        // console.log(stringArray[i])
        if(stringArray[i] != " ") {
            count++;
            // countCharacter++;
        }
    }
    wordCount.textContent = count;
    characterCount.textContent = text.value.split("").length; 
    longCharacter.textContent = character;

}



