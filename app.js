


const divRating = document.querySelectorAll("#ratings-range *");
const btnSubmit = document.querySelector("button");
const divFrontside = document.querySelector("#frontside-component");
const divBackside = document.querySelector("#backside-component");
const selectedRating = document.querySelector("#selected-rating");
let ratingChoice = 0;



divRating.forEach(element => {
    element.addEventListener("click", e => {
        paintGray();
        e.target.classList.add("bg-orange");
        e.target.classList.add("text-white");
        e.target.classList.remove("hover:bg-medium-grey");

        ratingChoice = e.target.dataset.rating;
        btnSubmit.disabled = false;
    });
});


btnSubmit.addEventListener("click", e=>{
    e.preventDefault;
    divFrontside.style.display = "none";
    divBackside.style.display = "inline-block";
    selectedRating.textContent = ratingChoice;
})

function paintGray(){
    divRating.forEach(element => {
        element.classList.remove("bg-orange");
        element.classList.remove("text-white");
        element.classList.add("bg-primary");
        element.classList.add("hover:bg-medium-grey");
    });

};