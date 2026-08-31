const publications=[

{

journal:"Organometallic Chemistry",

year:"PhD Research",

title:"Magnesium Hydride Catalysis and Mechanistic Investigations",

link:"#"

},

{

journal:"Main-Group Chemistry",

year:"Research",

title:"Substrate-Assisted Activation of Nitriles and Isocyanides",

link:"#"

},

{

journal:"Reactive Magnesium Chemistry",

year:"Research",

title:"Chalcogen Transfer Chemistry",

link:"#"

}

];

const grid=document.getElementById("publicationGrid");

publications.forEach(pub=>{

grid.innerHTML+=`

<div class="card">

<h3>${pub.journal}</h3>

<p>${pub.title}</p>

<small>${pub.year}</small>

</div>

`;

});

const slides=document.querySelectorAll(".slide");

const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(i){

slides.forEach(s=>s.classList.remove("active"));

dots.forEach(d=>d.classList.remove("active"));

slides[i].classList.add("active");

dots[i].classList.add("active");

current=i;

}

document.querySelector(".next").onclick=()=>{

showSlide((current+1)%slides.length);

};

document.querySelector(".prev").onclick=()=>{

showSlide((current-1+slides.length)%slides.length);

};

dots.forEach((dot,index)=>{

dot.onclick=()=>showSlide(index);

});

setInterval(()=>{

showSlide((current+1)%slides.length);

},5000);
