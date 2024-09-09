const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".hamburger img");

hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("show-mobile-nav")
  console.log('Clicked')
  document.body.classList.toggle("overflow-hidden")
  if (nav.classList.contains("show-mobile-nav")) {
    menuIcon.src = "images/icon-close.svg";  
  } else {
    menuIcon.src = "images/icon-hamburger.svg";  
  }
  
});



const navItems = document.querySelectorAll('.screen-nav li');

navItems.forEach(item => {
  const dropdown = item.querySelector('.dropdown'); 
  
  if (dropdown) {
    item.addEventListener('mouseover', () => {
      dropdown.style.display = 'block'; pdown
    });

    item.addEventListener('mouseout', () => {
      dropdown.style.display = 'none'; 
    });
  }
});

const mobiledivdown = document.querySelector('.mobile-dropdown');
const mobilediv = document.querySelectorAll('.mobile-nav > ul > li');

mobilediv.forEach(li => {
    li.addEventListener("click", (e) => {
       
const dropdown = li.querySelector('.mobile-dropdown');
const iElement = li.querySelector('.mobile-nav ul li a span i');

if (dropdown) {
    dropdown.classList.toggle("hidden");
    
    iElement.classList.toggle('fa-solid fa-angle-down');
    iElement.classList.toggle('fa-solid fa-angle-up');
}
console.log('it was clicked');
});
});

 // You might want to toggle only the dropdown within the clicked list item
//         const dropdown = li.querySelector('.mobile-dropdown');
//         if (dropdown) {
//             dropdown.classList.toggle("hidden");
            
//         const iElement = document.querySelector('.mobile-nav ul li a span i')
//         iElement.classList.add('fa-solid fa-angle-down');
           
//         }
//         console.log('it was clicked');
//     });
// });





