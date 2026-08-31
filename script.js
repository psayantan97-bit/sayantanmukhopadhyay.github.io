const publications=[

{

journal:"Organometallics",

year:"2024",

title:"Substrate-Assisted Dihydroboration of Nitriles and Isocyanides",

doi:"#"

},

{

journal:"ChemCatChem",

year:"2024",

title:"Magnesium Hydride Complexes and Hydroboration",

doi:"#"

},

{

journal:"Dalton Transactions",

year:"2023",

title:"Magnesium Chalcogen Transfer Chemistry",

doi:"#"

}

];

const grid=document.getElementById("publicationGrid");

publications.forEach(pub=>{

grid.innerHTML+=`

<div class="card">

<h3>${pub.journal}</h3>

<p>${pub.title}</p>

<small>${pub.year}</small>

<br><br>

<a href="${pub.doi}" target="_blank">Read Article →</a>

</div>

`;

});

const cycle=document.getElementById("catalyticCycle");

let pulse=false;

setInterval(()=>{

pulse=!pulse;

cycle.style.filter=pulse

?"drop-shadow(0 0 20px rgba(29,78,216,.45))"

:"drop-shadow(0 0 0 rgba(29,78,216,0))";

},4000);
