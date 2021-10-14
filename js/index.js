const inputField = document.getElementById('inputField');
const wordCount = document.getElementById('count');
let count = 0;

inputField.addEventListener('input', function() {
    countWords();
})



function countWords() {
    let words = inputField.value;
    let split = words.split(' ');
    for(let i = 0; i < split.length; i++) {
        if(split[i] != ' ') {
            count += 1;
        }
    }

    wordCount.textContent = count;
}

countWords();