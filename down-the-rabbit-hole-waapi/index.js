const alice = document.querySelector("#alice");
const main = document.querySelector("main");


/*
#alice {
    width: 50%;
    animation: snurr 3s linear infinite;
}

@keyframes snurr {
    to {
        transform: rotate(1turn);
    }
}
*/

const keyframesSnurr = [
    { transform: "rotate(0)" },
    { transform: "rotate(1turn)" }
];

const settingsSnurr = {
    duration: 3000,
    easing: "linear",
    iterations: Infinity
}

const snurr = alice.animate(keyframesSnurr, settingsSnurr);
snurr.currentTime = 30000;
document.onclick = () => {
    const newAlice = alice.cloneNode(false);
    newAlice.id = "klone" + Math.floor(Math.random() * 100000);   
    newAlice.style.position = "absolute";
    newAlice.style.width = Math.random() * 50 + "%";
    newAlice.style.top = Math.random() * innerHeight + "px"; 
    newAlice.style.left = Math.random() * 600 + "px"; 
    main.appendChild(newAlice);
    const anim = newAlice.animate(keyframesSnurr, settingsSnurr);
    anim.currentTime = Math.round(Math.random() * 3000);
    
}