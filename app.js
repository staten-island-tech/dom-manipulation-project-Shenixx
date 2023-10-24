const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("big-black-box"),
    points: document.getElementById(".point"),

    firstName:document.querySelector(".first-name"),
};
console.log(DOMSelectors);

function backgroundAndText(background, text) {
    background.style.backgroundColor = "red";
    text.textContent = "This is now a big red box";
    text.style.fontSize = "40px";
}

backgroundAndText(DOMSelectors.box, DOMSelectors.text);

// const DOMSelectors = {
//     form: document.querySelector("#form"),
//     firstName:document.querySelector(".first-name"),
//     h2s:document.querySelectorAll("h2"), 
// };

// DOMSelectors.form.addEventListener("submit", function(event){
//     event.preventDefault();
//     console.log(DOMSelectors.firstName.value);
    
//     DOMSelectors.h2s.forEach(
//         (el) =>(el.textContent = DOMSelectors.firstName.value)
//     );
// });


//const Album = makeAlbum()
//addCard()
//clearFields()
//addRemoveButtons()

//cant use on-click