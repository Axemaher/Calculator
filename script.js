let btn = document.getElementsByClassName("btnCalc");
btn = [...btn];
let score = document.getElementById("score");
let reset = document.getElementById("reset");
let calc = document.getElementById("calc");
let lastNumbers = document.getElementById("lastNumbers");
let historyList = document.getElementById("historyList");

reset.addEventListener("click", () => {
    score.textContent = "";
    lastNumbers.textContent = "";
});

btn.forEach((e) => {

    e.addEventListener("click", () => {
        score.textContent += e.getAttribute("data-num");
    });
});


calc.addEventListener("click", () => {

    let timeNow = new Date().toLocaleTimeString();
    let result = eval(score.textContent)
    let li = document.createElement("li");
    lastNumbers.textContent = score.textContent;
    historyList.appendChild(li);
    li.classList.add("historyRow");

    li.innerHTML = `<p class="time">${timeNow}</p><p class="numbersHistory">${score.textContent}<span class="resultHistory"> = ${result}</span><span></span></p>`;
    score.textContent = result.toFixed(2);
});