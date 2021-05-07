class ProjectData {
    constructor(title, blurb, link, github, picture, technologies) {
        this.title = title;
        this.blurb = blurb;
        this.link = link;
        this.github = github;
        this.picture = picture;
        this.technologies = technologies
    }
}

const projects = [
    new ProjectData("HEROES: Infinite ROBLOX Game",
    "Developing action/fighting game on the ROBLOX game, with 30 million visits to date. Implemented a complex consumer/producer back end to improve daily player visits from 50 to 1000.",
    "https://www.roblox.com/games/112917475/HEROES-Infinite",
    null,
    "images/heroesinfinite.png",
    ["Roblox Lua", "GitHub Projects"]),
    new ProjectData("CSCB63 Course Website Redesign",
        "Course assignment for CSCB20, Introduction to Databases and Web Development. I developed the overwhelming majority of the front and back end, and I got 100 on this assignment.",
        null,
        "https://github.com/Dubem101/CSCB20Assignment3",
        "images/cscb20assignment3.png",
        ["Python 3", "Python Flask", "JavaScript", "SQLite"]),
    new ProjectData("Dubem101.Github.Io",
        "Developing Personal Website",
        "https://dubem101.github.io/",
        "https://github.com/Dubem101/dubem101.github.io",
        "images/pwebsite-february8.png",
        ["HTML5", "CSS3", "JavaScript"]),
    new ProjectData("Success Stories of New Canadians Website",
        "Developed Success Stories of New Canadians website to help share the stories of Canadian immigrants. Implemented the programmatically generated blog pages through Gatsby, easily editable through NetlifyCMS. Researched UX principles in developing responsive landing page components. Created a script to dynamically display the countries of the stories hosted on the site.",
        "https://immigrant-success-canada.netlify.com/",
        "https://github.com/PEAR-Impact-Project-Team-2/success-stories-of-new-canadians",
        "images/ssonc-january10.png",
        ["React.js", "Gatsby.js", "NetlifyCMS"]),
    new ProjectData("Sudoku Game Android App",
        "Developed Sudoku Game Android Application",
        null,
        "https://github.com/Dubem101/SudokuSolver",
        "images/sudoku-august31.png",
        ["Java", "XML", "Android Studio"])
]

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById("project-container")

    for (var project of projects) {
        const projectCard = document.createElement("div")
        projectCard.setAttribute("class", "project-card")

        const link = document.createElement("a")
        link.href = project.link
        link.target = "_blank"
        link.rel = "noreferrer"

        const image = document.createElement("img")
        image.src = project.picture
        image.alt = project.title
        link.appendChild(image)
        projectCard.appendChild(link)

        const textContainer = document.createElement("div")
        textContainer.setAttribute("class", "text-container")

        const textWrapper = document.createElement("div")
        textWrapper.setAttribute("class", "text-wrapper")

        const h4 = document.createElement("h4")
        h4.textContent = project.title
        textWrapper.appendChild(h4)

        const p = document.createElement("p")
        p.textContent = project.blurb
        textWrapper.appendChild(p)

        const ul = document.createElement("ul")
        ul.classList.add("technologies")

        for (var technology of project.technologies) {
            let li = document.createElement("li")
            li.classList.add("technologies-item")
            li.textContent = technology
            ul.appendChild(li)
        }

        textWrapper.appendChild(ul)

        if (project.github != null) {
            const github = document.createElement("a")
            github.href = project.github
            github.target = "_blank"
            github.rel = "noreferrer"

            let icon = document.createElement("i")
            icon.setAttribute("class", "fa fa-github")
            icon['aria-hidden'] = true
            github.appendChild(icon)

            textWrapper.appendChild(github)
        }

        if (project.link != null) {
            const externalLink = document.createElement("a")
            externalLink.href = project.link
            externalLink.target = "_blank"
            externalLink.rel = "noreferrer"

            let icon = document.createElement("i")
            icon.setAttribute("class", "fa fa-external-link")
            icon['aria-hidden'] = true
            externalLink.appendChild(icon)

            textWrapper.appendChild(externalLink)
        }

        textContainer.appendChild(textWrapper)
        projectCard.appendChild(textContainer)
        container.appendChild(projectCard)
    }
})
