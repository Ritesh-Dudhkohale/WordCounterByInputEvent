let textbox = document.getElementById("sentence")

let characters = document.querySelector("body > div.output-container > div:nth-child(1) > h1")
let words = document.querySelector("body > div.output-container > div:nth-child(2) > h1")
let lines = document.querySelector("body > div.output-container > div:nth-child(3) > h1")


//we can use "change" event but change event will fire once we get out of the input box
textbox.addEventListener('input', (e) => {
    let text = e.target.value
    characters.innerHTML = charactersCounter(text)
    words.innerHTML = wordsCounter(text)
    lines.innerHTML = linesCounter(text)
})

function charactersCounter(text) {
    let count = 0;
    for (const c of text) {
        count++
    }
    return count;
}

function wordsCounter(text) {
    let count = 0;
    let wordArray = text.split(' ');

    return wordArray.length;
}

function linesCounter(text) {
    let count = 0;
    let lineArray = text.split(/[.\n]+/); // Split by newline character instead of period

    for (const line of lineArray) {
        if (line.trim() !== '') {
            count++;
        }
    }
    return count;
}