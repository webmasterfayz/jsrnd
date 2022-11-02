const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


let myVariable;
myVariable = "Bob";


document.querySelector("h1").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  const height = myImage.getAttribute("height");
  const width = myImage.getAttribute("width");
  if (mySrc === "images/biglogo.png") {
    myImage.setAttribute("src", "images/grails_logo.jpg");
    myImage.setAttribute("width",200);
    myImage.setAttribute("height",150);
  } else {
    myImage.setAttribute("src", "images/biglogo.png");
    myImage.setAttribute("width",150);
    myImage.setAttribute("height",100);
  }
  console.log(width);
  console.log(height);
  
};

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