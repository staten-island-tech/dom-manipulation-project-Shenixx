const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    box: document.getElementById("container-box"),
    input: document.querySelector("#input"),
    nameInput: document.getElementById("nameInput"),
    ageInput: document.getElementById("ageInput"),
    removeButton: document.getElementById("removeButton"),
};  

function getData(){
    const userName = DOMSelectors.nameInput.value;
    const userAge = DOMSelectors.ageInput.value;
    return {
        name: userName,
        age: userAge,
    }
}

function newCard() {
    const data = getData();
    DOMSelectors.box.insertAdjacentHTML("afterend", `<div class=newInfo id="card"> <h2 class=> My name is ${data.name} and my age is ${data.age} </h2>  
    <button type="button" id="rbtn">remove</button> </div>`);
    const card = document.querySelector("#card");
    remove(card);
};

function clearFields() {
    DOMSelectors.nameInput.value = "";
    DOMSelectors.ageInput.value = ""; 
} 

DOMSelectors.button.addEventListener("click", function () {
    newCard();
    clearFields();
});

function remove(card) {
    const button = card.querySelector("#rbtn");

    button.addEventListener("click", function (event) {
        card.remove();
    });
};