let btn = document.getElementsByClassName("btnNumber");
btn = [...btn]
let inp = document.getElementById("inp");
let reset = document.getElementById("btnReset");
let calc = document.getElementById("btnCalc");
let lastNumbers = document.getElementById("lastNumbers");
let lastCalc = document.getElementById("lastCalc");

reset.addEventListener("click", () => {
    inp.value = "";
});


btn.forEach((e) => {
    e.addEventListener("click", function () {
        console.log(e.getAttribute("data-num"));
        inp.value += e.getAttribute("data-num");
    });
});

calc.addEventListener("click", () => {
    lastNumbers.textContent = inp.value;
    inp.value = eval(inp.value);
    lastCalc.textContent = ` = ${eval(inp.value)}`;

});