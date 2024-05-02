// JavaSctipt Countdown
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn")

startBtn.addEventListener("click", () => {
    let sec = 60;
    timer = setInterval(() => {
        let time = document.querySelector("p").innerHTML = '00<span>h</span> : 00<span>m</span> : ' + sec +'<span>s</span>';
        if (sec <= 0) {
            clearInterval(timer);
        }
        sec--;
    }, 1000)
})

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
});

resetBtn.addEventListener("click", () => {
    sec = 0;
    time.innerHTML = '00<span>h</span> : 00<span>m</span> : 0' + sec +'<span>s</span>';
})

// Quotes Slider
let arr = [
    "All our dreams can come true, if we have the courage to pursue them. — Walt Disney",
    "Don't sit down and wait for the opportunities to come. Get up and make them. — Madam C.J. Walker",
    "I am lucky that whatever fear I have inside me, my desire to win is always stronger. — Serena Williams",
    "I am lucky that whatever fear I have inside me, my desire to win is always stronger. — Serena Williams",
    "You are never too old to set another goal or to dream a new dream. — C.S. Lewis",
    "It is during our darkest moments that we must focus to see the light. — Aristotle",
    "You just gotta keep going and fighting for everything, and one day you’ll get to where you want. — Naomi Osaka",
    "Success isn't always about greatness. It's about consistency. Consistent hard work leads to success. Greatness will come. — Dwayne Johnson",
    "Failure doesn’t mean you are a failure it just means you haven’t succeeded yet. ― Robert H. Schuller",
    "There is no secret to success. It is the result of preparation, hard work, and learning from failure. – General Colin Powell",
    "Ninety-nine percent of the failures come from people who have the habit of making excuses. – George Washington Carver"
];

let currentIndex = 0;
setInterval(() => {
    currentIndex = (currentIndex + 1) % arr.length;
    document.querySelector("#quote").innerText = arr[currentIndex];
}, 3000);