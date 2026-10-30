// image slider

const slides=document.querySelectorAll(".slide")
var counter = 0
//console.log(slides)
slides.forEach(
    (slide, index)=>{
        slide.style.left=`${index*100}%` //THIS IS BACKTICK NOT SINGLE QUOATATION//
    }
)

const goNext = () => {
    counter++
    if (counter >= slides.length) {
        counter = 0; // Loop back to the first slide
    }
    slideImage();
}


const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)` //translatex moves the element horizontally along x-axis
        }//-${counter * 100}% moves the slide of its own width, here by 100%
    )
}

// Automatically changes in 5 seconds
setInterval(goNext, 5000);


//POPUP 

const popup=document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");  //Makes the pop up visible//
}

function closePopup(){
    popup.classList.remove("open-popup"); //Hides the pop up//
}


//Form for BloG Page//
function formvalidation()
{
    var name = document.forms["form"]["name"].value;  //Gets the id value
    var email = document.forms["form"]["email"].value;

    if(name== "" || email =="" )  //checks if the values are empty 
    {
        alert("Empty Fields, Please enter proper credentials ")
    }

    else
    {
        alert("Thank you")
    }
}

//Add to cart
function addtocart()
{
    alert("Successfully added to cart")
}