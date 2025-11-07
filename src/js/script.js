// TODO
const texte = document.querySelector("#a-mettre-en-rouge");
texte.style.color="red";

const button = document.querySelector("#en-rouge-suite-a-click");
button.addEventListener("click" ,(evt)=>{button.style.color="red";})

const H2 = document.querySelectorAll("h2");
H2.forEach((elm)=>{elm.addEventListener("click", (evt)=>{evt.target.style.color = "red"; 
});
});
