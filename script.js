/* Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

1. a <p> with red text that says “Hey I’m red!”
2. an <h3> with blue text that says “I’m a blue h3!”
3. a <div> with a black border and pink background color with the following elements inside of it:
  another <h1> that says “I’m in a div”
  a <p> that says “ME TOO!”
  Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.*/

const container = document.querySelector("#container");
const paragraph = document.createElement("p");
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const p = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey, I'm red";
h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
div.setAttribute("style", "background-color: pink; border: 2px solid black;");
h1.textContent = "I'm a div";
p.textContent = "Me too!";
container.appendChild(paragraph);
container.insertBefore(h3, paragraph);
div.appendChild(h1);
div.appendChild(p);
container.appendChild(div);
