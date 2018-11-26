const loadTabs = () => {
    
    const main = document.createElement('div');
    main.setAttribute("id", "main");

    const tabOneButton = document.createElement("input");
    tabOneButton.setAttribute("type", "radio");
    tabOneButton.setAttribute("id", "tab1");

    const tabOneLabel = document.createElement("label");
    tabOneLabel.setAttribute("class", "tab-button");
    tabOneLabel.setAttribute("for", "tab1");
    tabOneLabel.textContent = "About Us";

    const tabTwoButton = document.createElement("input");
    tabTwoButton.setAttribute("type", "radio");
    tabTwoButton.setAttribute("id", "tab2");

    const tabTwoLabel = document.createElement("label");
    tabTwoLabel.setAttribute("class", "tab-button");
    tabTwoLabel.setAttribute("for", "tab2");
    tabTwoLabel.textContent = "Menu";

    const tabContent = document.createElement('div');
    tabContent.setAttribute("id", "tab");

    [tabOneButton, tabOneLabel, tabTwoButton, tabTwoLabel, tabContent].forEach(e => {
        main.appendChild(e);
    })

    document.querySelector("body").appendChild(main);

}

export default loadTabs;