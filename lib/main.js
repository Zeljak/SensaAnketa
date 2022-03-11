document.addEventListener("DOMContentLoaded",(()=>{console.log("Hello Bulma!")}));const hamburger=document.querySelector(".hamburger"),navMenu=document.querySelector(".nav-menu");function mobileMenu(){hamburger.classList.toggle("active"),navMenu.classList.toggle("active")}hamburger.addEventListener("click",mobileMenu);

function changeColour2(value)
{
    var color = document.getElementById("form__card2").style.backgroundColor;
    
    switch(value)
    {
        case 'a':
            color = "#edfabf";
        break;
    }
    document.getElementById("form__card2").style.backgroundColor = color;
    
}

function changeColour3(value)
{
    var color = document.getElementById("form__card3").style.backgroundColor;
    switch(value)
    {      
        case 'b':
            color = "#edfabf";
        break;
    }
    document.getElementById("form__card3").style.backgroundColor = color;
}

function changeColour4(value)
{
    var color = document.getElementById("form__card4").style.backgroundColor;
    switch(value)
    {      
        case 'c':
            color = "#f8f2b2";
        break;
    }
    document.getElementById("form__card4").style.backgroundColor = color;
}