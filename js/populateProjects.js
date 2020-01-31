const container = document.getElementById("project-container")

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const projects = request.response;
    showProjects(projects);
}

function showProjects(jsonObj) {
    projectCard = document.createElement("div")
    projectCard.setAttribute("class", "project-card")

    image = document.createElement("img")
    
    textContainer = document.createElement("div")
    textContainer.setAttribute("class", "text-container")

    
}