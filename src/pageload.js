const loadPage = () => {
    let content = document.querySelector("#content")

    let heading = document.createElement('h1');
    heading.textContent = "Welcome to D'Angelo's!";

    let copy = document.createElement('p');
    copy.setAttribute("style", "font-style: italic;");
    copy.textContent = "Serving up Italian meals with names vaguely inspired by musical artist D'Angelo since 2018";

    //let image = document.createElement("img");
    //image.src = "/home/chelsi/Pictures/kaboompics_pizza.jpg" ;
    //image.setAttribute("style", "width: 250px;")

    [heading, copy].forEach(element => {
        content.appendChild(element)
    })
}

export default loadPage;