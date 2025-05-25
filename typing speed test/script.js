const quotes = [
    "Even if i am not one of the chossen ones there are times when i cant give up",
    "rejection makes a man stronger",
    "with great power come great responsibilty",
];

let quote = "";
let startTime;
let timeInterval;

const quoteDisplay = document.getElementById("quotedisplay");
const quoteInput = document.getElementById("quoteinput");
const timerEl = document.getElementById("timer");
const wpmEl = document.getElementById("wpm");
const accuracyEl = document.getElementById("accuracy");

function startTest() {
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = "";
    quote.split("").forEach(char => {
        const span = document.createElement("span");
        span.innerText = char;
        quoteDisplay.appendChild(span);
    });

    quoteInput.value = "";
    quoteInput.disabled = false;
    quoteInput.focus();

    startTime = new Date();
    clearInterval(timeInterval);
    timeInterval = setInterval(updateTimer, 1000);
    timerEl.innerText = "0";
    wpmEl.innerText = "0";
    accuracyEl.innerText = "100";
}

quoteInput.addEventListener("input", () => {
    const arrayQuote = quote.split("");
    const arrayValue = quoteInput.value.split("");
    let correct = 0;

    quoteDisplay.querySelectorAll("span").forEach((charspan, index) => {
        const typedchar = arrayValue[index];
        
        if (typedchar === undefined) {
            charspan.classList.remove("correct", "incorrect");
        } else if (typedchar === arrayQuote[index]) {
            charspan.classList.add("correct");
            charspan.classList.remove("incorrect");
            correct++;
        } else {
            charspan.classList.add("incorrect");
            charspan.classList.remove("correct");
        }
    });

    const timeTaken = (new Date() - startTime) / 1000 / 60;
    const wpm = Math.round((arrayValue.length / 5) / timeTaken);
    const accuracy = Math.round((correct / arrayValue.length) * 100);

    wpmEl.innerText = isNaN(wpm) ? 0 : wpm;
    accuracyEl.innerText = isNaN(accuracy) ? 100 : accuracy;

    if (arrayValue.length === arrayQuote.length && quote === quoteInput.value) {
        clearInterval(timeInterval);
        quoteInput.disabled = true;
    }
});

function updateTimer() {
    const timePassed = Math.floor((new Date() - startTime) / 1000);
    timerEl.innerText = timePassed;
}

startTest();

