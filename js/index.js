const text = document.getElementById("text");
const wordCount = document.getElementById("count");
let textValue = [];


text.addEventListener("input", countCheck)

function countCheck() {
     textValue = []
    textValue.push(text.value);
    let stringJoin = textValue.join(" ");
    let stringArray =stringJoin.split(" ");
    let count = 0;
    for(let i = 0; i < stringArray.length; i++) {
        // console.log(stringArray[i])
        if(stringArray[i] != " ") {
            count++;
        }
    }
    wordCount.textContent = count;
}



