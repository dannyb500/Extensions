const src = "https://www.netflix.com/browse/genre/"
const github = "https://raw.githubusercontent.com/dannyb500/Extensions/refs/heads/main/Netflix-Genres/List.json"

let list = []



function openLink(genre_id) {
    window.open(src + genre_id);
}

function newButton(append, text, hasSub) {
    const button = document.createElement("div");
    button.textContent = "";
    button.className = "genre-container";

    const textElement = document.createElement("button");
    textElement.textContent = text;
    textElement.className = "genre-text";
    button.appendChild(textElement);

    let dropdownButton = null;
    if (hasSub) {
        dropdownButton = document.createElement("button");
        dropdownButton.textContent = "+";
        dropdownButton.className = "dropdown-button";
        button.appendChild(dropdownButton);
    }

    append.appendChild(button);
    return { button, textElement, dropdownButton };
}

function displayGenres(container) {
    list.forEach(genre => {
        const { _, textElement, dropdownButton } = newButton(container, genre.name + "(" + genre.subgenres.length + ")", true);

        const subButton = document.createElement("button");
        subButton.className = "sub-body";

        dropdownButton.onclick = function () {
            subButton.style.display = subButton.style.display === "block" ? "none" : "block";
        }

        textElement.onclick = function (event) {
            openLink(genre.genre_id);
        }

        genre.subgenres.forEach(s => {
            const item = newButton(subButton, s.name, false).textElement;

            item.onclick = function () {
                openLink(s.genre_id);
            }

        });
        container.appendChild(subButton);
    });
}


fetch(github)
    .then(response => response.json())
    .then(data => {
        console.log(data.list);
        list = data.list;
        displayGenres(document.getElementById("container"));
    });