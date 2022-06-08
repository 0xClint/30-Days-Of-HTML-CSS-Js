// 'use strict';
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

let darkMode = 'active';

function handleClick() {
  const navbar = document.getElementById("navbar");
  const btn = document.getElementById("btn");
  const a = document.querySelectorAll(".a");

  if(darkMode == 'active'){
    navbar.classList.add('light');
    a.forEach((a) => {
      a.classList.add('light');
    });
    btn.classList.add('light')
    darkMode = "in-active";

  }

  else{
    navbar.classList.remove("light");
    a.forEach((a) => {
      a.classList.remove('light');
    });
    darkMode = "active";
  }
  
  console.log(`darkMode:${darkMode}`);
};
