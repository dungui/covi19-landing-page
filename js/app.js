/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const unOrderedlist = document.getElementById("navbar__list");
const scrollUpBtn = document.querySelector(".scrollUp");

// build the nav


        sections.forEach(section => {
            const listItem = document.createElement("li");

            // setting the attribute on the list item and appending
            listItem.setAttribute("class", section.getAttribute("id"));
            listItem.classList.add("menu__link")

            // setting the href attribute on each a tag and their texts
            listItem.textContent  = section.getAttribute("data-nav");
            unOrderedlist.appendChild(listItem);

            /** 
             *  attaching the click eventListener on each list item enabling    the scrolling into the respective section item
             */
            listItem.addEventListener("click", function(event){
                event.preventDefault();
                section.scrollIntoView({behavior: "smooth"})
            });
        });
 

// Add class 'active' to section when near top of viewport
function makeActive(){
    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top <= 150 && sectionRect.bottom >= 150){
            // apply class active__section for this section to be visible
            section.classList.add("active__section");
            const ListItems = document.querySelectorAll("li");
            ListItems.forEach(singleItem => {
                
                // making the associated link in the menu to be highlighted too
                if (singleItem.classList[0] === section.getAttribute("id")){
                    singleItem.setAttribute("id", "active__listItem");
                } else{
                    singleItem.removeAttribute("id", "active__listItem");
                }
            });

        } else{
            // remove class active for this section to be visible
            section.classList.remove("active__section");
        }
    });
}

// the function controlling the visibility of the scroll up button
function scrollButtonVisible(){

    if (document.documentElement.scrollTop || 
        document.body.scrollTop > 20 ){
        scrollUpBtn.style.display = "block";
    } else{
        scrollUpBtn.style.display = "none";
    }
}


// function called on clicking the scroll up button 
scrollUpBtn.addEventListener("click", function(){
    document.documentElement.scrollTop = 0;
});
 

// Scroll to anchor ID using scrollTO event

document.addEventListener("scroll", function() {
    // to make the link in nav and asociated section
    makeActive();
    // to show the scroll to top button
    scrollButtonVisible();
  });



/**
 * End Main Functions
 *
 * 
*/



