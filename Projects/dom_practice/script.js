// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm Red!";
content.style.color = 'red';
container.appendChild(content);

const header3 = document.createElement('h3');
header3.style.color = 'blue';
header3.textContent = "I'm a blue h3";
container.appendChild(header3);

const div = document.createElement('div');
div.backgroundColor = 'pink';
div.borderColor = 'black';
const divh1 = document.createElement('h1');
divh1.textContent = "I'm in a div";
div.appendChild(divh1);
const divp = document.createElement('p');
divp.textContent = "ME TOO!";
div.appendChild(divp);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(e) {
    alert(e.target);
    if(e.target.style.backgroundColor === 'blue') {
        e.target.style.backgroundColor = 'red';
    } else {
        e.target.style.backgroundColor = 'blue';
    }
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert("ID: " + button.id);
        if(button.id % 2 === 0) {
            document.body.style.backgroundColor = 'pink';
            button.textContent = "Pink Background";
        } else {
            document.body.style.backgroundColor = 'yellow';
            button.textContent = "Yellow Background";
        }
    });
});

const direction = document.createElement('p');
direction.classList.add("dir");
direction.textContent = "No Direction Yet";
container.appendChild(direction);


document.addEventListener('keydown', (e) => {
    let element = direction;

    let a = 'KeyA';
    let s = 'KeyS';
    let d = 'KeyD';
    let w = 'KeyW';

    switch(e.code) {
        case a:
            element.textContent = "Left";
            break;
        case s:
            element.textContent = "Down";
            break;
        case d:
            element.textContent = "Right";
            break;
        case w:
            element.textContent = "Up";
            break;
        default:
            element.textContent = "No Direction!"; 
    }
});