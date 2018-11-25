const loadTabs = () => {
    
    let main = document.createElement('div');
    main.setAttribute("id", "main");

    let tabOneButton = document.createElement("input");
    tabOneButton.setAttribute("type", "radio");
    tabOneButton.setAttribute("id", "tab1");
    //setAttributes(tabOne, { "type": "radio", "class": "tab", "name": "tab" })

    let tabOneLabel = document.createElement("label");
    tabOneLabel.setAttribute("class", "tab-button");
    tabOneLabel.setAttribute("for", "tab1");
    tabOneLabel.textContent = "Tab One";

    let tabTwoButton = document.createElement("input");
    tabTwoButton.setAttribute("type", "radio");
    tabTwoButton.setAttribute("id", "tab2");

    let tabTwoLabel = document.createElement("label");
    tabTwoLabel.setAttribute("class", "tab-button");
    tabTwoLabel.setAttribute("for", "tab2");
    tabTwoLabel.textContent = "Tab Two";

    let tabContent = document.createElement('div');
    tabContent.setAttribute("class", "tab");

    main.appendChild(tabOneButton);
    main.appendChild(tabOneLabel);
    main.appendChild(tabTwoLabel);
    main.appendChild(tabContent);

    document.querySelector("body").appendChild(main);

}

export default loadTabs;

/*
    const setAttributes = (e, attrs) => {
        attrs.map((k,v) => {
            e.setAttribute(k, v);
        })
    }

    setAttributes(tabOne, { "type": "radio", "class": "tab", "name": "tab" })
*/