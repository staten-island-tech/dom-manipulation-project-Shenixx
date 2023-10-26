const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("container-box"),
    input: document.querySelector("#input"),
    nameInput: document.getElementById("nameInput"),
    ageInput: document.getElementById("ageInput"),
    removeButton: document.getElementById("removeButton"),
};  

DOMSelectors.button.addEventListener("click", function () {
    const name = nameInput.value;
    const age = ageInput.value;

    DOMSelectors.box.insertAdjacentHTML("afterend", `<h2 class="newInfo" > My name is ${name} and my age is ${age} </h2>  <button type="button" id="removeButton">remove</button>` );
    DOMSelectors.nameInput.value = "";
    DOMSelectors.ageInput.value = "";
    
    
    removeButton.addEventListener("click", function () {
        const existingH2 = DOMSelectors.box.querySelector('h2');
        if (existingH2) {
            existingH2.remove();
        }
    });
});





// function backgroundAndText(background, text) {
//     background.style.backgroundColor = "red";
//     text.textContent = "This is now a big red box";
//     text.style.fontSize = "40px";
// }

// DOMSelectors.button.addEventListener("click", function () {
//     backgroundAndText(DOMSelectors.box, DOMSelectors.text);
// })

// function changeli(){
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