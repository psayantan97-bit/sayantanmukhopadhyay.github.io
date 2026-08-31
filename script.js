/* Scroll Fade Animation */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:0.15});

document.querySelectorAll(

"section,.card,.toc-card,.discovery-card,.timeline-item"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});
