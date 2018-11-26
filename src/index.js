import loadPage from './pageload';
import loadTabs from './tabload';
import showTabOne from './tabOne'
import showTabTwo from './tabTwo';
import './styles/app.css';

loadPage(); 
loadTabs();


const tabContent = document.querySelector("#tab");
const tabs = document.querySelectorAll("[type='radio']");

window.onload = () => {
    let tab1 = document.querySelectorAll(".tab-button")[0];
    tab1.setAttribute("id", "selected");
    tabContent.innerHTML = showTabOne();
}

tabs.forEach(tab => {
    tab.onclick = () => {
        let buttons = document.querySelectorAll(".tab-button");
        buttons.forEach(button => {
            if (button.control.id === tab.id) {
                button.setAttribute("id", "selected");
                tabContent.innerHTML = (tab.id === "tab1" ? 
                    showTabOne() : 
                    showTabTwo());
            } else {
                button.setAttribute("id", "");
            }
        })
    }
})