const src = "https://www.netflix.com/browse/genre/"
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

list = [
    {
        name: "Action & Adventure",
        genre_id: 1365,
        subgenres: [
            { name: "Action Comedies", genre_id: 43040 },
            { name: "Action Thrillers", genre_id: 43048 },
            { name: "Action Sci-Fi & Fantasy", genre_id: 1568 },
            { name: "Adventures", genre_id: 7442 },
            { name: "Asian Action Movies", genre_id: 77232 },
            { name: "Classic Action & Adventure", genre_id: 46576 },
            { name: "Comic Book & Superhero", genre_id: 10118 },
            { name: "Martial Arts Movies", genre_id: 8985 },
            { name: "Military Action & Adventure", genre_id: 2125 }
        ]
    },
    {
        name: "Anime",
        genre_id: 7424,
        subgenres: [
            { name: "Anime Action", genre_id: 2653 },
            { name: "Anime Comedies", genre_id: 9302 },
            { name: "Anime Dramas", genre_id: 452 },
            { name: "Anime Fantasy", genre_id: 11146 },
            { name: "Anime Horror", genre_id: 10695 },
            { name: "Anime Sci-Fi", genre_id: 2729 },
            { name: "Anime Series", genre_id: 6721 }
        ]
    },
    {
        name: "Children & Family Movies",
        genre_id: 783,
        subgenres: [
            { name: "Animal Tales", genre_id: 5507 },
            { name: "Family Comedies", genre_id: 1516534 },
            { name: "Family Adventures", genre_id: 52855 },
            { name: "Movies based on children's books", genre_id: 10056 },
            { name: "Education for Kids", genre_id: 10659 },
            { name: "Disney", genre_id: 67673 }
        ]
    },
    {
        name: "Classic Movies",
        genre_id: 31574,
        subgenres: [
            { name: "Classic Comedies", genre_id: 31694 },
            { name: "Classic Dramas", genre_id: 29809 },
            { name: "Classic Action & Adventure", genre_id: 46576 },
            { name: "Classic Sci-Fi & Fantasy", genre_id: 47147 },
            { name: "Classic Thrillers", genre_id: 46588 },
            { name: "Film Noir", genre_id: 7687 }
        ]
    },
    {
        name: "Comedies",
        genre_id: 6548,
        subgenres: [
            { name: "Dark Comedies", genre_id: 869 },
            { name: "Screwball Comedies", genre_id: 9702 },
            { name: "Slapstick Comedies", genre_id: 10256 },
            { name: "Stand-up Comedy", genre_id: 11559 },
            { name: "Teen Comedies", genre_id: 3519 },
            { name: "Satire", genre_id: 4922 }
        ]
    },
    {
        name: "Documentaries",
        genre_id: 6839,
        subgenres: [
            { name: "True Crime Documentaries", genre_id: 9875 },
            { name: "Science & Nature Docs", genre_id: 2595 },
            { name: "Biographical Documentaries", genre_id: 3652 },
            { name: "Historical Documentaries", genre_id: 5349 },
            { name: "Music & Concert Documentaries", genre_id: 90361 },
            { name: "Social & Cultural Documentaries", genre_id: 3675 }
        ]
    },
    {
        name: "Dramas",
        genre_id: 5763,
        subgenres: [
            { name: "Crime Dramas", genre_id: 1252 },
            { name: "Period Pieces", genre_id: 12123 },
            { name: "Biographical Dramas", genre_id: 3179 },
            { name: "Dramas based on Books", genre_id: 4961 },
            { name: "Dramas based on real life", genre_id: 3653 },
            { name: "Social Issue Dramas", genre_id: 3947 },
            { name: "Political Dramas", genre_id: 6616 }
        ]
    },
    {
        name: "Horror Movies",
        genre_id: 8711,
        subgenres: [
            { name: "Slasher Horror", genre_id: 8646 },
            { name: "Supernatural Horror", genre_id: 42023 },
            { name: "Cult Horror Movies", genre_id: 10944 },
            { name: "Monster Movies", genre_id: 947 },
            { name: "Zombie Horror Movies", genre_id: 75405 },
            { name: "Teen Screams", genre_id: 52147 }
        ]
    },
    {
        name: "Independent Movies",
        genre_id: 7077,
        subgenres: [
            { name: "Indie Dramas", genre_id: 38436 },
            { name: "Indie Comedies", genre_id: 4195 },
            { name: "Indie Thrillers", genre_id: 3269 },
            { name: "Experimental Movies", genre_id: 11079 }
        ]
    },
    {
        name: "Music",
        genre_id: 1701,
        subgenres: [
            { name: "Concert Films", genre_id: 90361 },
            { name: "Musical Dramas", genre_id: 12550 },
            { name: "Musicals", genre_id: 13335 },
            { name: "Classic Musicals", genre_id: 32392 },
            { name: "Rock & Pop Concerts", genre_id: 3278 }
        ]
    },
    {
        name: "Romantic Movies",
        genre_id: 8883,
        subgenres: [
            { name: "Romantic Comedies", genre_id: 5475 },
            { name: "Steamy Romantic Movies", genre_id: 35800 },
            { name: "Romantic Favorites", genre_id: 502675 },
            { name: "Quirky Romance", genre_id: 36103 },
            { name: "Romantic Dramas", genre_id: 1255 }
        ]
    },
    {
        name: "Sci-Fi & Fantasy",
        genre_id: 1492,
        subgenres: [
            { name: "Alien Sci-Fi", genre_id: 3327 },
            { name: "Fantasy Movies", genre_id: 9744 },
            { name: "Sci-Fi Adventure", genre_id: 694 },
            { name: "Sci-Fi Dramas", genre_id: 3916 },
            { name: "Sci-Fi Thrillers", genre_id: 11014 }
        ]
    },
    {
        name: "Sports Movies",
        genre_id: 4370,
        subgenres: [
            { name: "Sports Comedies", genre_id: 5286 },
            { name: "Sports Documentaries", genre_id: 180 },
            { name: "Sports Dramas", genre_id: 7243 },
            { name: "Boxing Movies", genre_id: 12443 },
            { name: "Football Movies", genre_id: 12803 },
            { name: "Baseball Movies", genre_id: 12339 },
            { name: "Basketball Movies", genre_id: 12762 },
        ]
    },
    {
        name: "Thrillers",
        genre_id: 8933,
        subgenres: [
            { name: "Action Thrillers", genre_id: 43048 },
            { name: "Crime Thrillers", genre_id: 10499 },
            { name: "Psychological Thrillers", genre_id: 5505 },
            { name: "Spy Thrillers", genre_id: 9147 },
            { name: "Supernatural Thrillers", genre_id: 11140 }
        ]
    },
    {
        name: "TV Shows",
        genre_id: 83,
        subgenres: [
            { name: "British TV Shows", genre_id: 52117 },
            { name: "Classic TV Shows", genre_id: 46553 },
            { name: "Crime TV Shows", genre_id: 26146 },
            { name: "Cult TV Shows", genre_id: 74652 },
            { name: "Kids' TV", genre_id: 27346 },
            { name: "Reality TV", genre_id: 9833 },
            { name: "Sci-Fi & Fantasy TV", genre_id: 1372 },
            { name: "TV Comedies", genre_id: 10375 },
            { name: "TV Dramas", genre_id: 11714 },
        ]
    },
    {
        name: "LGBTQ Movies",
        genre_id: 5977,
        subgenres: [
            { name: "LGBTQ+ Comedies", genre_id: 7120 },
            { name: "LGBTQ+ Dramas", genre_id: 500 },
            { name: "Romantic LGBTQ+ Movies", genre_id: 3329 }
        ]
    },
    {
        name: "Cult Movies",
        genre_id: 7627,
        subgenres: [
            { name: "Cult Comedies", genre_id: 9434 },
            { name: "Cult Horror Movies", genre_id: 10944 },
            { name: "Cult Sci-Fi & Fantasy", genre_id: 4734 }
        ]
    },
    {
        name: "Faith & Spirituality",
        genre_id: 26835,
        subgenres: [
            { name: "Religious Documentaries", genre_id: 10005 },
            { name: "Spirituality Documentaries", genre_id: 2760 }
        ]
    },
    {
        name: "Foreign Movies",
        genre_id: 7462,
        subgenres: [
            { name: "African Movies", genre_id: 3761 },
            { name: "Indian Movies", genre_id: 10463 },
            { name: "Korean Movies", genre_id: 5685 },
            { name: "French Movies", genre_id: 58807 }
        ]
    },
    {
        name: "Adult Animation",
        genre_id: 11881,
        subgenres: []
    },
    {
        name: "Westerns",
        genre_id: 7700,
        subgenres: [
            { name: "Classic Westerns", genre_id: 47465 }
        ]
    },
];

displayGenres(document.getElementById("container"));