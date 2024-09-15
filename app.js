const menuBar=document.querySelector(".open-menubar");
const navBar=document.querySelector(".navbar");
const input=document.querySelector("input");
const label=document.querySelector(".label")
menuBar.addEventListener("click", function menu(){


if(input.checked){
    menuBar.setAttribute("src", "images/icon-hamburger.svg" );
   
}else{
    menuBar.setAttribute("src", "images/icon-close.svg");      
}

});
/*function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  multiply(4, 7);
  multiply(20, 20);
  multiply(0.5, 3);
console.log(multiply(4, 7));  
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  */
  