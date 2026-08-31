/* ---------- PUBLICATIONS ---------- */

const publications = [

{
journal:"Main-Group Organometallic Chemistry",
title:"Magnesium Hydride Catalysis and Mechanistic Investigations",
year:"PhD Research"
},

{
journal:"Mechanistic Organometallic Chemistry",
title:"Substrate-Assisted Activation of Nitriles and Isocyanides",
year:"Research"
},

{
journal:"Reactive Magnesium Chemistry",
title:"Chalcogen Transfer Chemistry",
year:"Research"
}

];

const grid=document.getElementById("publicationGrid");

if(grid){

publications.forEach(pub=>{

grid.innerHTML+=`
<div class="card fade-up">
<h3>${pub.journal}</h3>
<p>${pub.title}</p>
<small>${pub.year}</small>
</div>
`;

});

}

/* ---------- TOC CAROUSEL ---------- */

const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

let current=0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));
dots.forEach(dot=>dot.classList.remove("active"));

slides[index].classList.add("active");
dots[index].classList.add("active");

current=index;

}

document.querySelector(".next").addEventListener("click",()=>{

showSlide((current+1)%slides.length);

});

document.querySelector(".prev").addEventListener("click",()=>{

showSlide((current-1+slides.length)%slides.length);

});

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>showSlide(index));

});

setInterval(()=>{

showSlide((current+1)%slides.length);

},5000);

/* ---------- SCROLL ANIMATION ---------- */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll(".fade-up").forEach(el=>observer.observe(el));
