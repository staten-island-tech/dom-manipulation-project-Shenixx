const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("container-box"),
    input: document.querySelector("#input"),
    nameInput: document.getElementById("nameInput"),
    ageInput: document.getElementById("ageInput"),
    removeButton: document.getElementById("removeButton"),
};  

function makeAlbum(){
    DOMSelectors.button.addEventListener("click", function () {
        const name = nameInput.value;
        const age = ageInput.value;
        const infoStuff = {
            name: name,
            age: age,
        };
        return infoStuff;
    })
}

// function newCard() {
//         DOMSelectors.box.insertAdjacentHTML("afterend", `<div class=newInfo> <h2 class=> My name is ${name} and my age is ${age} </h2>  
//         <button type="removeButton" id="removeButton">remove</removeButton> </div>`);
//         DOMSelectors.nameInput.value = "";
//         DOMSelectors.ageInput.value = "";
// };

function newCard() {
    DOMSelectors.box.insertAdjacentHTML("afterend", `<div class=newInfo> <h2 class=> My name is ${name} and my age is ${age} </h2>`);}

// function removeButton(){
//     let btns = document.querySelectorAll("newInfo")
//     btns.forEach((button)=> button.addEventListener("click", function (event){
//         console.log(event.target.parentElement)
//         })
//     );
// }


makeAlbum()
newCard()


// function backgroundAndText(background, text) {
//     background.style.backgroundColor = "red";
//     text.textContent = "This is now a big red box";
//     text.style.fontSize = "40px";
// }

// DOMSelectors.button.addEventListener("click", function () {
//     backgroundAndText(DOMSelectors.box, DOMSelectors.text);
// })

// function changeli(){-
//     let pointIndex = 1;
//     DOMSelectors.points.forEach((point) => {
//         point.addEventListener("click", function () {
//             point.textContent = `Hello I is point ${pointIndex}`;
//             pointIndex++;
//         });
//     });
// }

// changeli();

// DOMSelectors.form.addEventListener("submit", function(event){
//     backgroundAndText(DOMSelectors.box, DOMSelectors.text);

//     event.preventDefault();
//     console.log(DOMSelectors.firstName.value);
    
//     DOMSelectors.h2s.forEach(
//         (el) =>(el.textContent = DOMSelectors.firstName.value)
//     );
// });

// const DOMSelectors = {
//     form: document.querySelector("#form"),
//     firstName:document.querySelector(".first-name"),
//     h2s:document.querySelectorAll("h2"), 
// };

//const Album = makeAlbum()
//addCard()
//clearFields()
//addRemoveButtons()

//cant use on-click