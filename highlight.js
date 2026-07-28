/*cursor glow*/

const cursor = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
    cursor.Style.left = e.clientX + "px";
    cursor.Style.top = e.clientY + "px";
    

});


/*scroll reveal*/

const revealElements = document.querySelectorAll(
    ".content, .stat-box, .cta"
);
function revealOnScroll() {
    revealElements.forEach((Element)=>{
        const top = Element.getBoundingClientReact().top;
        const screenHeight = window.innerHeight;
        if(top< screenHeight - 100){
            Element.classList.add("show");

        }
    });
    
}

window.addEventListener("scroll",revealOnScroll);
revealOnScroll();



/*counter animaton*/


const counter = document.querySelectorAll(".counter");
const speed = 40;
counter.forEach(counter=>{
    const updateCounter = ()=>{
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);
        if (count < target){
            counter.innerText = count + increment;
            setTimeout(updateCounter,30);
        }
        else{
            counter.innerText = target;
        }
    };
    updateCounter();
});




/*3d*/


const card = document.querySelectorAll(".content");
Cards.forEach(card=>{
    card.addEventListener("mousemove", (e)=>{
        const rect = card.getBoundingClientrect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = ((x / rect.width)-0.5)*20;
        card.Style.transform =`
        perspectve(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
        `;
    });
    card.addEventListener("mouseleave",()=>{
        card.Style.transform="perspective(1000px) rotateX(0) rotateY(0) scale(1)";
    });

});



/*button ripple*/



const button = document.querySelectorAll(".hero-btn, .cta-btn");
button.forEach(btn=>{
    btn.addEvenListener("click", function(e){
        const ripple=document. createElement(span);
        const rect=this.getBoundingClientRect();
        const size=Math.max
    })
})