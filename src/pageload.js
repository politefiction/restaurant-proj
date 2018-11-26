const loadPage = () => {
    let content = document.querySelector("#content");

    let heading = document.createElement('div');
    heading.setAttribute("id", "heading");

    let title = document.createElement('h1');
    title.textContent = "Welcome to D'Angelo's!";

    let copy = document.createElement('p');
    copy.setAttribute("id", "copy");
    copy.textContent = "Serving up classic Italian favorites with names inspired by musical artist D'Angelo since 2018";

    [title, copy].map(e => { heading.appendChild(e) });

    let image = new Image(250);
    image.src = "/home/chelsi/Pictures/kaboompics_pizza.jpg";

    [heading, image].forEach(element => { content.appendChild(element) });
}

export default loadPage;