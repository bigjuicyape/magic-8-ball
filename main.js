let eight = document.getElementById("eightball");
let text = document.getElementById("answer");

eight.addEventListener("click", answer)

function answer() {
    let random = Math.random();
    if (random < 0.25) {
    eight.src = "img/goblin3.png";
    text.innerHTML = `no, no, no, no`;
    } else if (random < 0.5) {
        eight.src = "img/goblin1.png";
        text.innerHTML = `yes.`;
    } else if (random < 0.75) {
        eight.src = "img/goblin2.jpg";
        text.innerHTML = `yes no maybe so`;
    } else { 
        eight.src = "img/goblinfree.png";
        text.innerHTML = `im free now thank you`;
    }
    }
