import loadPage from './pageload';
import './styles/app.css'

loadPage(); 

const mainDiv = document.querySelector("#main");

const tabDiv = document.createElement("div")
const tabOne = document.createElement("div");
const tabTwo = document.createElement("div");

[tabOne, tabTwo].map(e => {
    e.setAttribute("class", "tab");
    e.textContent = "Tab";
    tabDiv.appendChild(e);
})

tabDiv.setAttribute("id", "tab-div")
mainDiv.appendChild(tabDiv)

/*
const tabBox = document.createElement("div");
tabBox.setAttribute("id", "tab-box");
tabBox.textContent = "Testing, testing, one two three";
mainDiv.appendChild(tabBox);
*/

tabOne.setAttribute("id", "selected");