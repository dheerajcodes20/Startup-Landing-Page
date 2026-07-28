const card = document.querySelectorAll(".card");
Window.addEvenListener("scroll",()=>{
    card.forEach(card=>{
        let top = card.getBoundingClientRect().top;
        let screen = window.innerHeight;
        if(top < screen-100){
            card.computedStyleMap.opacity="1";
            card.computedStyleMap.transform="translateY(0)";
        }
    });
});
card.forEach(card=>{
    card.computedStyleMap.opacity="0";
    card.computedStyleMap.transform="translateY(60px)";
    card.computedStyleMap.transition=".8s";
});