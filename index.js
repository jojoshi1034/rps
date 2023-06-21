function playRound(ps, cs) {
    ps.toUpperCase();
    if (ps == cs) {
        return "Tie";
    } else if (ps == "ROCK") {
        if (cs == "PAPER") return "Lose";
        else return "Win";
    } else if (ps == "PAPER") {
        if (cs == "ROCK") return "Win";
        else return "Lose";
    } else {
        if (cs == "PAPER") return "Win";
        else return "Lose";
    }
}

function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    if (x == 0) {
        return "ROCK";
    } else if (x == 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

const r = document.querySelector('#r');
r.onclick = () => {
    const div = document.createElement('div');
    div.textContent = playRound("rock", getComputerChoice());
    document.body.appendChild(div);
}
const p = document.querySelector('#p');
p.onclick = () => {
    const div = document.createElement('div');
    div.textContent = playRound("paper", getComputerChoice());
    document.body.appendChild(div);
}
const s = document.querySelector('#s');
s.onclick = () => {
    const div = document.createElement('div');
    div.textContent = playRound("scissors", getComputerChoice());
    document.body.appendChild(div);
}