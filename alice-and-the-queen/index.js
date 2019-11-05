const run = document.querySelector("#run");

const runKeyframes = [
    { transform: "translateY(0)" },
    { transform: "translateY(-100%)" }
];

const runSettings = {
    duration: 1000,
    iterations: Infinity,
    easing: "steps(7)"
};

const spring = run.animate(runKeyframes, runSettings);

function slakkFarten() {
    spring.playbackRate *= 0.97;

    console.log(spring.playbackRate);
    console.log(spring.currentTime);
}

setInterval(slakkFarten, 100);

document.onclick = () => {
    spring.playbackRate += 0.5;
}