const DOMSelectors = {
    form: document.querySelector("#form"),
    firstName:document.querySelector(".first-name"),
    h2s:document.querySelectorAll("h2"), 
    //select textbox
    //select all h2 in one property
};

DOMSelectors.form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(DOMSelectors.firstName.value);
    
    DOMSelectors.h2s,forEach(
        (el) =>(el.textContent = DOMSelectors.firstName.value)
    );
});