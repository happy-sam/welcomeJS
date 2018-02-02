var today = new Date();
var hourNow = today.getHours();
var welcome;

if (hourNow > 18) {
    welcome = "Dobry wieczór";
} else if (hourNow > 12) {
    welcome = "Dzień dobry";
} else if (hourNow > 8) {
    welcome = "Dzień dobry";
} else if (hourNow > 5) {
    welcome = "Witaj o poranku";
} else {
    welcome = "Witaj";
}

//document.write("<h3>" + greeting + "</h3>");

var name = prompt("Podaj swoje imię:");

document.write("<h3>" + welcome + "<br>" + "<span>" + name + "</span>" + "<br>" + "Miło cię widzieć na mojej stronie :) </h3>");