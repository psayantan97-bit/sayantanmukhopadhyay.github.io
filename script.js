
/* ---------- PUBLICATIONS ---------- */

const publications = [
    {
        journal: "Main-Group Organometallic Chemistry",
        title: "Magnesium Hydride Catalysis and Mechanistic Investigations",
        year: "PhD Research"
    },
    {
        journal: "Mechanistic Organometallic Chemistry",
        title: "Substrate-Assisted Activation of Nitriles and Isocyanides",
        year: "Research"
    },
    {
        journal: "Reactive Magnesium Chemistry",
        title: "Chalcogen Transfer Chemistry",
        year: "Research"
    }
];

const grid = document.getElementById("publicationGrid");

if(grid){

    publications.forEach(pub=>{

        grid.innerHTML += `
        <div class="card fade-up">
            <h3>${pub.journal}</h3>
            <p>${pub.title}</p>
            <small>${pub.year}</small>
        </div>
        `;

    });

}

/* ---------- SCROLL FADE ANIMATION ---------- */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.18
});

document.querySelectorAll(
    "section, .card, .toc-card, .discovery-card, .timeline-item"
).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});
