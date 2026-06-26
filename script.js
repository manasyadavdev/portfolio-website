// ===============================
// Typing Animation
// ===============================

const words = [
  "Web Developer",
  "Cybersecurity Learner",
  "AWS Cloud Learner",
  "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    if(!typing) return;

    const current = words[wordIndex];

    if(!deleting){

        typing.textContent = current.substring(0,charIndex+1);

        charIndex++;

        if(charIndex===current.length){

            deleting=true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typing.textContent=current.substring(0,charIndex-1);

        charIndex--;

        if(charIndex===0){

            deleting=false;

            wordIndex++;

            if(wordIndex===words.length){

                wordIndex=0;

            }

        }

    }

    setTimeout(typeEffect,deleting?60:120);

}

typeEffect();


// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-120;

        if(pageYOffset>=sectionTop){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Scroll Reveal Animation
// ===============================

const cards=document.querySelectorAll(

".skill,.project-card,.edu-card,.certificate-card,.contact-card"

);

function reveal(){

    cards.forEach(card=>{

        const top=card.getBoundingClientRect().top;

        if(top<window.innerHeight-80){

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        }

    });

}

cards.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(40px)";

    card.style.transition=".7s";

});

window.addEventListener("scroll",reveal);

reveal();


// ===============================
// Navbar Shadow
// ===============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 25px rgba(0,0,0,.5)";

    }

    else{

        header.style.boxShadow="none";

    }

});


// ===============================
// Smooth Button Effect
// ===============================

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        if(this.getAttribute("href").startsWith("#")){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    });

});


// ===============================
// Console Message
// ===============================

console.log("Manas Portfolio Loaded Successfully 🚀");
